import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. 123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // in mobile, mean take full height in column direction
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 20,
    fontSize: 32,
    color: "blue",
  }
});
