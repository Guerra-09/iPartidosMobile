import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function CustomNavigation(props) {

    return (
      <View style={styles.container}>

        <Text style={styles.textStyle}>
          {props.title}
        </Text>

        <View>
          <Ionicons
            name={props.icon}
            size={38}
            color="black"
            style={styles.iconStyle}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },

  textStyle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 34,
    fontWeight: "bold",
  },

  iconStyle: { 
    marginRight: 20
  },
});