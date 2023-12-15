/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Dimensions,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import PDF from './Options/PdfPage';
import Audio from './Options/AudioPage';
import Web from './Options/WebsitePage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MainPage({navigation}) {
  const [opt, setOpt] = useState('PDF');
  function onCh() {
    if (opt === 'PDF') {
      return <PDF navi={navigation} />;
    } else if (opt === 'Audio') {
      return <Audio />;
    } else if (opt === 'Web') {
      return <Web />;
    }
  }
  return (
    <ImageBackground
      source={require('./Assets/pxfuel2.jpg')}
      style={{flex: 1}}
      blurRadius={5}>
      <View style={{flex: 1, paddingTop: windowHeight * 0.02}}>
        <View
          style={{
            height: windowHeight * 0.06,
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: windowWidth * 0.05,
          }}>
          <View
            style={{
              height: windowHeight * 0.06,
              width: windowHeight * 0.06,
              borderRadius: windowWidth * 0.05,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: windowWidth * 0.065, fontWeight: '800'}}>
              i
            </Text>
          </View>
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: windowWidth * 0.2,
              fontSize: windowWidth * 0.056,
              fontWeight: '800',
            }}>
            INTELIVISION
          </Text>
        </View>
        <View
          style={{
            height: windowHeight * 0.15,
            width: '100%',
            marginTop: windowHeight * 0.1,
            paddingHorizontal: windowWidth * 0.05,
          }}>
          <Text style={{fontSize: windowWidth * 0.1, fontWeight: '800'}}>
            EXPLORE
          </Text>
          <Text style={{fontSize: windowWidth * 0.15, fontWeight: '300'}}>
            the world
          </Text>
        </View>
        <View
          style={{
            height: windowHeight * 0.5,
            width: '100%',
            flexDirection: 'row',
            marginTop: windowHeight * 0.08,
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              height: windowHeight * 0.45,
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => setOpt('PDF')}
              style={{height: 'auto', width: 'auto'}}>
              <Text
                style={{
                  transform: [{rotate: '270deg'}],
                  width: windowHeight * 0.13,
                  fontWeight: '800',
                  color: opt === 'PDF' ? 'rgba(90, 34, 170,1)' : 'white',
                }}>
                PDF
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpt('Audio')}>
              <Text
                style={{
                  transform: [{rotate: '270deg'}],
                  width: windowHeight * 0.13,
                  fontWeight: '800',
                  color: opt === 'Audio' ? 'purple' : 'white',
                }}>
                AUDIO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpt('Web')}>
              <Text
                style={{
                  transform: [{rotate: '270deg'}],
                  width: windowHeight * 0.13,
                  fontWeight: '800',
                  color: opt === 'Web' ? 'purple' : 'white',
                }}>
                WEB
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: windowHeight * 0.42,
              marginLeft: windowWidth * 0.05,
              width: '80%',
            }}>
            {onCh()}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
