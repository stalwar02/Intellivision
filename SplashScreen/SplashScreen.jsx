// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { Text } from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1500, // Adjust timing as needed
      useNativeDriver: true,
    }).start(() => {
      // Navigate to your main screen after the animation completes
      navigation.replace('Onboard'); // Replace with your main screen name
    });
  }, [navigation, logoOpacity]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.logo, { opacity: logoOpacity }]}
        resizeMode="contain"
      >
        <Text style={{fontSize:45}}>Intellivision</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Adjust background color as needed
  },
  logo: {
    width: 200, // Adjust size as needed
    height: 200,
    alignContent:'center',
    justifyContent:'center' // Adjust size as needed
  },
});

export default SplashScreen;
