import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Humano X Humano" onPress={() => navigation.navigate('VsHumano')} />
      <Button title="Humano X Máquina" onPress={() => navigation.navigate('VsMaquina')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20,
  },
});
