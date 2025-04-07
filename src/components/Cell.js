import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Cell({ value, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.square} onPress={onPress}>
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
  },
});
