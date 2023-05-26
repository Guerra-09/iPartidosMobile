import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import TextInputComponent from "./textInputComponent";

export default function Landing() {
  return (
    <SafeAreaView>

      <TextInputComponent />

      {/* <TouchableOpacity style={styles.buttonFrame}>
        <Text style={styles.button}>Sign In</Text>
      </TouchableOpacity> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center",
    flex: 1,
    flexDirection: 'column'
  },

  buttonFrame: {
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 80,
    marginVertical: 400,
    backgroundColor: "red",
    borderRadius: 10,
    flex: 1,
  },

  button: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
