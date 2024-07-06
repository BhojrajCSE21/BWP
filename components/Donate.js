import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Donate() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Donation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      </View>
      <TouchableOpacity style={styles.donateButton} onPress={handlePress}>
        <Text style={styles.donateText}>Donate</Text>
        <MaterialIcons name="favorite" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  donateButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: 55,
    backgroundColor: '#2B29A6',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  donateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
  },
});
