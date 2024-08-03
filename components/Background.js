// Background.js
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Background = () => {
  return (
    <View style={styles.container}>
      {/* Top Ribbon */}
      <View style={styles.ribbonContainer}>
        <Image source={require('../assets/ribbon.png')} style={styles.ribbon} />
      </View>

      {/* Top Left Ashok Chakra */}
      <Svg height="100" width="100" style={styles.topLeftChakra}>
        <Path
          d="M50 10 a40 40 0 1 0 0 80 a40 40 0 1 0 0 -80"
          stroke="purple"
          strokeWidth="5"
          fill="none"
        />
      </Svg>

      {/* Bottom Right Ashok Chakra */}
      <Svg height="100" width="100" style={styles.bottomRightChakra}>
        <Path
          d="M50 10 a40 40 0 1 0 0 80 a40 40 0 1 0 0 -80"
          stroke="purple"
          strokeWidth="5"
          fill="none"
        />
      </Svg>

      {/* Center Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Ashoka_Chakra-1.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ribbonContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
  },
  ribbon: {
    width: '100%',
    height: '100%',
  },
  topLeftChakra: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  bottomRightChakra: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Background;
