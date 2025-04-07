import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableMaquina from '../components/TableMaquina';

export default function JogoVsMaquinaScreen() {
  return (
    <View style={styles.container}>
      <TableMaquina />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
