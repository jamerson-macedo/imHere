import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import * as React from "react";
import { Participant } from "../../components/Participant";
export default function Home() {
  function handlerParticipantAdd() {
    console.log("voce clicou");
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
      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}
