import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To Weather App</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/home.png")}
          style={styles.image}
          resizeMode="contain" // Adjust the resizeMode based on your image requirements
        />
      </View>
      {/* <Text style={styles.text}>Home Screen</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Weather")}
      >
        <Text style={styles.text1}>
         Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  imageContainer: {
    marginBottom: 70,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    paddingBottom: 70,
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
  },

  text1: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
