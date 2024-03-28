import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import * as React from "react";
import { Participant } from "../../components/Participant";
export default function Home() {
  const participants = [
    "jamerson",
    "maria",
    "jase",
    "mariah",
    "jamersone",
    "mariaa",
    "jamersonh",
    "mariar",
    "jamersony",
    "marian",
    "karanan",
    " kjfwekfm",
  ];
  function handlerParticipantAdd() {
    console.log("voce clicou");
  }
  function handlerParticipantRemove(name: string) {
    console.log(`voce clicou em ${name}`);
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
          <Text style={styles.listEmpty}>Ninguem chegou no evento ainda ? Adicione um participante na sua lista</Text>
        )}
        showsVerticalScrollIndicator={false}
        data={[]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handlerParticipantRemove("jamerson ")}
          />
        )}
      />
    </View>
  );
}
