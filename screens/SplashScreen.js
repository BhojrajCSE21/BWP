import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Background from '../components/Background';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 5000); // Display splash screen for 5 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Background />
      <Image source={require('../assets/NSSS-Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 500,
    height: 300,
  },
});

export default SplashScreen;
