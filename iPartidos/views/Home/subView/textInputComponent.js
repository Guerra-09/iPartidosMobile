import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";

export default function TextInputComponent() {

    return (
      <View>
        
        <Text style={{ textAlign:'center', backgroundColor: 'red' }}> Input </Text>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})