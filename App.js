import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Homepage from "./screens/Homepage";

export default function App() {
  const profileLogo = require("./assets/Profile.png");
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <View style={styles.appBar}>
          <View style={styles.leftSection}>
            <FontAwesome name="bars" size={24} color="black" />
          </View>
          <View style={styles.centerSection}>
            <Text style={styles.appBarText}>BWP</Text>
          </View>
          <View style={styles.rightSection}>
            <Image source={profileLogo} style={styles.profileLogo} />
          </View>
        </View>
        <Homepage />
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
    paddingTop: 30,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#E3EBFF",
    marginBottom: 14,
  },
  leftSection: {
    width: 50, 
  },
  centerSection: {
    flex: 1,
    alignItems: "center",
  },
  appBarText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightSection: {
    width: 50, 
    alignItems: "flex-end",
  },
  profileLogo: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});
