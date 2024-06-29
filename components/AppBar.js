import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function AppBar() {
    const profileLogo = require("../assets/Profile.png");
    const screenWidth = Dimensions.get("window").width;

    return (
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
    );
}

const styles = StyleSheet.create({
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
        marginTop: 28,
        width: '100%'
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