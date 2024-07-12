import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import AppBar from "./AppBar";

export default function UserProfile() {
  const user = {
    name: "John Doe",
    email: "john.doe@gmail.com.com",
    referralCode: "ABC123",
    mobileNumber: "+91 1234567891",
  };

  return (
    <ScrollView contentContainerStyle={styles.userProfileStyle}>
      <AppBar showBackButton={true} />
      <View style={styles.userProfileContainer}>
        <View style={styles.textLayout}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <View style={styles.textLayout}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
        <View style={styles.textLayout}>
          <Text style={styles.label}>Referral Code:</Text>
          <Text style={styles.text}>{user.referralCode}</Text>
        </View>
        <View style={styles.textLayout}>
          <Text style={styles.label}>Mobile Number:</Text>
          <Text style={styles.text}>{user.mobileNumber}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  userProfileStyle: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#E3EBFF",
  },
  userProfileContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    width: "100%",
    alignItems: "flex-start",
    marginTop: 20,
  },
  textLayout: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 14
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    paddingLeft: 4
  },
});
