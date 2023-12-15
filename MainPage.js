/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Image} from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MainPage({navigation}) {
  return (
    <>
      <ScrollView
        style={{
          height: windowHeight,
          backgroundColor: '#1e1b38',
          paddingHorizontal: windowWidth * 0.045,
          paddingTop: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: windowWidth * 0.07,
            fontWeight: 'bold',
            alignSelf: 'flex-start',
          }}>
          Welcome Back
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: windowWidth * 0.04,
            fontWeight: '300',
            alignSelf: 'flex-start',
          }}>
          Ankit Kumar Shah
        </Text>
        <ScrollView horizontal={true}>
          <EachCard
            title={'TALK WITH PDF'}
            discreption={'Chat with your pdf and get the best out of it'}
            image={require('./Assets/pdf.png')}
            route={''}
          />
          <EachCard
            title={'DIVE IN WEBPAGE'}
            discreption={
              'Let AI read the web page for you and get the best out of it'
            }
            image={require('./Assets/webpage.png')}
            route={''}
          />
          <EachCard
            title={'TALK WITH AUDIO'}
            discreption={'Talk wit your audio and get the best out of it'}
            image={require('./Assets/audio.png')}
            route={''}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            paddingTop: 20,
          }}>
          <Image
            source={{
              uri: 'https://icon-library.com/images/white-folder-icon-png/white-folder-icon-png-22.jpg',
            }}
            style={{
              height: windowWidth * 0.05,
              width: windowWidth * 0.05,
              objectFit: 'contain',
            }}
          />
          <Text style={{fontSize: windowWidth * 0.05, paddingLeft: 10}}>
            Your Files
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 100,
          }}>
          <Text style={{color: 'white'}}>No files 😕</Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 0,
          width: windowWidth,
          paddingBottom: 20,
        }}>
        <TextInput
          style={{
            marginTop: windowHeight * 0.025,
            width: windowWidth * 0.9,
            marginHorizontal: windowWidth * 0.0015,
            backgroundColor: '#292250',
            paddingHorizontal: 10,
            borderRadius: 20,
            fontSize: windowWidth * 0.04,
            paddingVertical: 20,
          }}
          placeholder="Start Chatting with AI"
          placeholderTextColor={'rgb(197, 195, 195)'}
        />
      </View>
    </>
  );
}

function EachCard({title, discreption, route, image}) {
  return (
    <View
      style={{
        height: windowHeight * 0.39,
        width: windowWidth * 0.7,
        backgroundColor: '#493fa0',
        borderRadius: 10,
        marginRight: windowWidth * 0.035,
        marginTop: windowHeight * 0.015,
        overflow: 'hidden',
        elevation: 20,
        paddingBottom: windowHeight * 0.02,
      }}>
      <Image
        style={{
          flex: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          width: '100%',
          objectFit: 'contain',
        }}
        source={image}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            maxWidth: windowWidth * 0.5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: windowWidth * 0.05,
              fontWeight: 'bold',
              padding: windowWidth * 0.028,
            }}>
            {title}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: windowWidth * 0.03,
              paddingHorizontal: windowWidth * 0.028,
            }}>
            {discreption}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'black',
            borderWidth: 2,
            borderRadius: 10000000,
            height: windowWidth * 0.15,
            width: windowWidth * 0.15,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 10,
            margin: windowWidth * 0.03,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: windowWidth * 0.08,
              fontWeight: 200,
              backgroundColor: 'black',
              borderRadius: 10000000,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {'>'}
          </Text>
        </View>
      </View>
    </View>
  );
}
