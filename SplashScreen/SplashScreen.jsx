// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { Text } from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('Onboard');
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
    backgroundColor: '#000',
  },
  logo: {
    width: 200,
    height: 200,
    alignContent:'center',
    justifyContent:'center'
  },
});

export default SplashScreen;
