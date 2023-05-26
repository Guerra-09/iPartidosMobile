import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SportComponent(props) {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons name="soccer" size={100} color="black" />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgreen',
        width: 165,
        height: 145,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },

    text: {
        fontSize: 21,
        fontWeight: 300
    }

})
