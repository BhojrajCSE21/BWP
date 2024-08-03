import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AppBar({ showBackButton }) {
  const profileLogo = require("../assets/Profile.png");
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDrawerToggle = () => {
    navigation.toggleDrawer();
  };

  const handleProfilePress = () => {
    navigation.navigate("UserProfile");
  };

  return (
    <View>
    <SafeAreaView style={styles.mainContainer}>
    <View style={styles.appBar}>
      <View style={styles.leftSection}>
        {showBackButton ? (
          <TouchableOpacity onPress={handleBack}>
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleDrawerToggle}>
            <FontAwesome name="bars" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.appBarText}>BWP</Text>
      </View>
      <TouchableOpacity style={styles.rightSection} onPress={handleProfilePress}>
        <Image source={profileLogo} style={styles.profileLogo} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#E3EBFF"
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 28,
    width: "100%",
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
