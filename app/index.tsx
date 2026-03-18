import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import Profile from "../components/Profile";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>

      <Profile />

      <Pressable style={styles.button} onPress={() => router.push("/modal")}>
        <Text style={styles.buttonText}>Ver mais detalhes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#2e86de",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});