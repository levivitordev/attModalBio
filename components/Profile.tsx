import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/minhaFoto.jpg")}
        style={styles.image}
      />

      <Text style={styles.name}>Levi Vitor</Text>

      <Text style={styles.bio}>
        Sou estudante de Sistemas para Internet na UNICAP.
        Atualmente trabalho como Aprendiz Administrativo na multinacional Otis Elevadores.
        Meu objetivo é evoluir como suporte técnico.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
    padding: 20,
  },

  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  bio: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});