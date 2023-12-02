import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignPage({ navigation }) {
  return (
    <ImageBackground style={{ flex: 1 }} source={require("../Assets/pxfuel2.jpg")}>
      <Animatable.View useNativeDriver={true} animation="fadeIn" style={{ flex: 1, marginTop: windowHeight * 0.15, marginLeft: windowWidth * 0.05 }}>
        <Text style={{ fontSize: windowWidth * 0.08, fontWeight: '800', color: 'white' }}>Create Account</Text>
        <Text style={{ marginTop: windowHeight * 0.01, color: 'grey', fontSize: windowWidth * 0.035 }}>Please enter valid information to access your account</Text>
        <ScrollView style={{ height: windowHeight * 0.6, width: '95%', marginTop: windowHeight * 0.06 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, width: '100%', backgroundColor: 'grey', marginBottom: windowHeight * 0.015, borderRadius: windowWidth * 0.04, opacity: 0.7, flexDirection: 'row', alignItems: 'center', paddingLeft: windowWidth * 0.04,height: windowWidth * 0.18 }}>
              <Image source={require("../Assets/phone-call.png")} style={{ height: windowWidth * 0.05, width: windowWidth * 0.05 }} />
              <TextInput style={{ flex: 1, marginLeft: windowWidth * 0.025 }} placeholder='Enter Phone' placeholderTextColor={'white'}></TextInput>
            </View>
            <View style={{ flex: 1, width: '100%', backgroundColor: 'grey', marginBottom: windowHeight * 0.015, borderRadius: windowWidth * 0.04, opacity: 0.7, flexDirection: 'row', alignItems: 'center', paddingLeft: windowWidth * 0.04,height: windowWidth * 0.18 }}>
              <Image source={require("../Assets/user.png")} style={{ height: windowWidth * 0.05, width: windowWidth * 0.05 }} />
              <TextInput style={{ flex: 1, marginLeft: windowWidth * 0.025 }} placeholder='Full Name' placeholderTextColor={'white'}></TextInput>
            </View>
            <View style={{ flex: 1, width: '100%', backgroundColor: 'grey', marginBottom: windowHeight * 0.015, borderRadius: windowWidth * 0.04, opacity: 0.7, flexDirection: 'row', alignItems: 'center', paddingLeft: windowWidth * 0.04,height: windowWidth * 0.18 }}>
              <Image source={require("../Assets/at.png")} style={{ height: windowWidth * 0.05, width: windowWidth * 0.05 }} />
              <TextInput style={{ flex: 1, marginLeft: windowWidth * 0.025 }} placeholder='Email' placeholderTextColor={'white'}></TextInput>
            </View>
            <View style={{ flex: 1, width: '100%', backgroundColor: 'grey', marginBottom: windowHeight * 0.015, borderRadius: windowWidth * 0.04, opacity: 0.7, flexDirection: 'row', alignItems: 'center', paddingLeft: windowWidth * 0.04,height: windowWidth * 0.18 }}>
              <Image source={require("../Assets/key.png")} style={{ height: windowWidth * 0.05, width: windowWidth * 0.05 }} />
              <TextInput style={{ flex: 1, marginLeft: windowWidth * 0.025 }} placeholder='Password' placeholderTextColor={'white'}></TextInput>
            </View>
          </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <View style={{ marginTop: windowHeight * 0.05, height: windowHeight * 0.07, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
            <View style={{ height: '100%', width: windowWidth * 0.35, borderRadius: windowWidth * 0.04, backgroundColor: '#d1b3ff' }}>
              <View style={{ height: '100%', width: '70%', backgroundColor: 'rgb(102, 0, 150)', borderRadius: windowWidth * 0.04, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: windowWidth * 0.055, fontWeight: '800' }}>Create</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ height: windowHeight * 0.08, width: '95%', marginTop: windowHeight * 0.05 }}>
          <Text style={{ fontSize: windowWidth * 0.03, color: 'grey' }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontSize: windowWidth * 0.055, fontWeight: '800', color: 'white' }}>Login</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </Animatable.View>
    </ImageBackground>
  );
}