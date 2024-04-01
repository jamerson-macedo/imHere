import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import * as React from "react";
import { useState } from "react";
import { Participant } from "../../components/Participant";
export default function Home() {
  // para atualizar a lista precisa do usestate
  // atualizando o estado da lsita
  const [participants, setParticipants]=useState<String[]>([]);
  const [participantsName, setParticipantName]=useState('');
  

  //const participants = ["jamerson"];
  function handlerParticipantAdd() {
    // includes verifica se existe
    if (participants.includes(participantsName)) {
      return Alert.alert(
        "Participante existe",
        "já existe um participante nessa lista com esse nome"
      );
    }
    // SE ELE NÃO EXISTE 
    // prevstate atualiza a lista com o anterior
    setParticipants(prevState=>[...prevState,participantsName]);
    // apos adicionar eu limpo o campo
    setParticipantName('');

  }
  // estados sao assicronos entao no log aparece com delay mesmo adicionando
  function handlerParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        // modifica a lista e me retorna o valor menos o que cliquei
        onPress: () => setParticipants(prevstate=>prevstate.filter(participants=>participants!==name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Nome do Evento</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={text =>setParticipantName(text)}
          value={participantsName}
        />

        <TouchableOpacity style={styles.button} onPress={handlerParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguem chegou no evento ainda ? Adicione um participante na sua
            lista
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handlerParticipantRemove(item)}
          />
        )}
      />
    </View>
  );
}
