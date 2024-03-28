import { Text, View } from "react-native";
import { Button } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0a0a0a", padding: 24 }}>
      <Text
        style={{
          color: "#ffffff",
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 25,
        }}
      >
        {" "}
        jamerson{" "}
      </Text>
      <Text> jose </Text>
    </View>
  );
}
