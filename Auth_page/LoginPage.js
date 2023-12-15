/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#1e1b38'}}>
      <Animatable.View
        duration={500}
        useNativeDriver={true}
        animation="fadeInRight"
        style={{
          flex: 1,
          marginTop: windowHeight * 0.15,
          marginLeft: windowWidth * 0.05,
        }}>
        <StatusBar backgroundColor={'black'} />
        <Text
          style={{
            fontSize: windowWidth * 0.09,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Welcome
        </Text>
        <Text
          style={{
            fontSize: windowWidth * 0.09,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Back!
        </Text>
        <Text style={{marginTop: windowHeight * 0.01, color: 'grey'}}>
          Enter your email address and password to get
        </Text>
        <Text style={{color: 'grey'}}>access your account</Text>
        <View
          style={{
            height: windowHeight * 0.19,
            width: '95%',
            marginTop: windowHeight * 0.05,
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'grey',
              marginBottom: windowHeight * 0.015,
              borderRadius: windowWidth * 0.04,
              opacity: 0.7,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: windowWidth * 0.04,
            }}>
            <Image
              source={require('../Assets/at.png')}
              style={{height: windowWidth * 0.05, width: windowWidth * 0.05}}
            />
            <TextInput
              style={{flex: 1, marginLeft: windowWidth * 0.025}}
              placeholder="Email"
              placeholderTextColor={'white'}
            />
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: 'grey',
              marginBottom: windowHeight * 0.015,
              borderRadius: windowWidth * 0.04,
              opacity: 0.7,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: windowWidth * 0.04,
            }}>
            <Image
              source={require('../Assets/key.png')}
              style={{height: windowWidth * 0.05, width: windowWidth * 0.05}}
            />
            <TextInput
              style={{flex: 1, marginLeft: windowWidth * 0.025}}
              placeholder="Password"
              placeholderTextColor={'white'}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: windowHeight * 0.05,
            height: windowHeight * 0.06,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '95%',
          }}>
          <Text
            style={{
              fontSize: windowWidth * 0.035,
              fontWeight: 400,
              color: '#22A7F0',
            }}>
            Forgot Password ?
          </Text>
          <View
            style={{
              height: '100%',
              width: windowWidth * 0.3,
              borderRadius: windowWidth * 0.025,
              backgroundColor: 'rgb(255, 255, 255)',
              elevation: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: windowWidth * 0.035, color: 'black'}}>
              Login
            </Text>
            {/* <View
              style={{
                height: '100%',
                width: '70%',
                backgroundColor: 'rgb(102, 0, 150)',
                borderRadius: windowWidth * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}>

            </View> */}
          </View>
        </View>
        {/* <View
          style={{
            height: windowHeight * 0.08,
            width: '95%',
            flexDirection: 'row',
            marginTop: windowHeight * 0.06,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '40%',
              height: '100%',
              borderWidth: windowWidth * 0.01,
              borderColor: 'white',
              borderRadius: windowWidth * 0.05,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Assets/facebook.png')}
              style={{height: windowWidth * 0.1, width: windowWidth * 0.1}}
            />
          </View>
          <View
            style={{
              width: '40%',
              height: '100%',
              borderWidth: windowWidth * 0.01,
              borderColor: 'white',
              borderRadius: windowWidth * 0.05,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Assets/google.png')}
              style={{height: windowWidth * 0.1, width: windowWidth * 0.1}}
            />
          </View>
        </View> */}
        <View
          style={{
            height: windowHeight * 0.05,
            width: '95%',
            marginTop: windowHeight * 0.05,
          }}>
          <Text style={{fontSize: windowWidth * 0.04, color: 'grey'}}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                fontSize: windowWidth * 0.035,
                color: 'white',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
