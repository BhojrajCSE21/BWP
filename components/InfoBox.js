import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InfoBox() {
    const [data, setData] = useState({ sensorsScore: 0, donationReceived: 0 });
  
    useEffect(() => {
      // Fetch data from backend
      // For demonstration, using hardcoded values
      const fetchData = async () => {
        const response = await fetch("your-backend-url"); // Replace with your backend URL
        const result = await response.json();
        setData({
          sensorsScore: result.sensorsScore,
          donationReceived: result.donationReceived,
        });
      };
  
      fetchData();
    }, []);
  
    return (
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Buddhist Sensors: {data.sensorsScore}</Text>
        <Text style={styles.separator}> | </Text>
        <Text style={styles.infoText}>Donation Received: {data.donationReceived}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    infoBox: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#15136C",
      padding: 10,
      marginHorizontal: 16,
      marginTop: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ccc",
    },
    infoText: {
      fontSize: 16,
      color: "white",
    },
    separator: {
      fontSize: 16,
      color: "white",
      marginHorizontal: 5,
    },
  });