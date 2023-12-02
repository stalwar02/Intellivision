import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function Onboard_screens({navigation}) {
  return (
    <Onboarding
    onDone={()=>navigation.replace('Login')}
    onSkip={()=>navigation.replace('Login')}
  pages={[
    {

      backgroundColor: '#fff',
      image:
        <LottieView loop={true} style={{height:'50%',width:'50%'}} autoPlay source={require("../Assets/Lottie/Onboard_pdf.json")}/>,
      title: 'Unveil PDF Secrets',
      subtitle: 'Discover document insights: Summaries, Key Details & AI Interaction',
    },
    {
        backgroundColor: '#fff',
        image: <LottieView loop={true} style={{height:'60%',width:'100%'}} autoPlay source={require("../Assets/Lottie/Onboard_audio.json")}/>,
        title: 'Decode Audio Intelligence',
        subtitle: 'Transcriptions, Summaries & AI Queries for Varied Audio Formats',
      },
      {
        backgroundColor: '#fff',
        image: <LottieView loop={true} style={{height:'60%',width:'100%'}} autoPlay source={require("../Assets/Lottie/Onboard_website.json")}/>,
        title: 'Explore Website Depths',
        subtitle: 'Retrieve Site Details, Structural Analysis & AI-Powered Interrogations',
      },
  ]}
/>
  )
}



