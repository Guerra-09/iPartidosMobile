import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import CustomNavigation from '../../components/navigationView';
import SportComponent from '../../components/sportComponent';

const sports = [
  {
    sportTitle: "Futbol",
  },
  {
    sportTitle: "Baskel",
  },
  {
    sportTitle: "Tenis",
  },
  {
    sportTitle: "Padel",
  },
  {
    sportTitle: "volei",
  },
  {
    sportTitle: "ragbi",
  },
  {
    sportTitle: "beisbol",
  },
  {
    sportTitle: "handbol",
  },
];

export default function Home() {
    return (
      <SafeAreaView style={styles.container}>
        <CustomNavigation title={"Welcome"} icon={"person-circle-outline"} />

        <FlatList
          numColumns={2}
          data={sports}
          renderItem={({ item }) => <SportComponent title={"Futbol"} />}
          columnWrapperStyle={{ justifyContent: "space-between", marginTop: 10, marginHorizontal: 20}}
        />
      </SafeAreaView>
    );

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  }
});