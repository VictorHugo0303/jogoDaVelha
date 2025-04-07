import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableHumano from '../components/TableHumano';

export default function JogoVsHumanoScreen() {
  return (
    <View style={styles.container}>
      <TableHumano />
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
