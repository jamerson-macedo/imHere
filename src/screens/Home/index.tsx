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
import { Participant } from "../../components/Participant";
export default function Home() {

  const participants = ["jamerson"];
  function handlerParticipantAdd() {
    // includes verifica se existe
    if (participants.includes("rodrigo")) {
      return Alert.alert(
        "Participante existe",
        "já existe um participante nessa lista com esse nome"
      );
    }
    // SE ELE NÃO EXISTE 
    participants.push('ana');
    console.log(participants)

  }
  function handlerParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado !"),
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
