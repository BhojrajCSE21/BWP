import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Homepage from "./screens/Homepage";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <AppBar />
        <Homepage />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
});
