import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import * as Animate from 'react-native-animatable';

export default function WebsitePage({ navi }) {
  return (
    <TouchableOpacity onPress={() => navi.navigate('PDF_PICK')}>
      <Animate.View useNativeDriver={true} animation='fadeInRight' style={{ borderRadius: 20, height: '100%', width: '100%', backgroundColor: 'transparent', marginRight: 20, justifyContent: 'flex-end', overflow: 'hidden' }}>
        <ImageBackground source={require("../Assets/pxfuel2.jpg")} style={{ flex: 1 }} blurRadius={0}>
          <View style={{ borderRadius: 20, height: 250, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', justifyContent: 'flex-end', padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>WEBSITE</Text>
            <Text style={{ fontSize: 14, color: 'white', marginTop: 5 }}>Tap to Explore Website</Text>
          </View>
        </ImageBackground>
      </Animate.View>
    </TouchableOpacity>
  );
}
