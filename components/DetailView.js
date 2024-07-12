import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import AppBar from "./AppBar";

export default function DetailView({ route }) {
  const { title, body, imgUrl } = route.params;
  const screenWidth = Dimensions.get("window").width;

  return (
    <View>
      <AppBar showBackButton={true} />
      <Image source={imgUrl} style={{ height: 200, width: screenWidth }} />
      <View style={styles.textLayout}>
        <Text style={styles.agendaTitle}>{title}</Text>
        <Text style={styles.agendaText}>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textLayout: {
    margin: 24,
  },
  agendaTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  agendaText: {
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "justify",
  },
});
