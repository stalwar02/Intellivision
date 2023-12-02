import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import * as Animate from 'react-native-animatable'

export default function Succes({navigation,route}){
    console.log(route.params.file)
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
    <View style={{height:200,width:200}}>
      <LottieView loop={false} style={{height:'100%',width:'100%'}} autoPlay onAnimationFinish={()=>navigation.replace('Chat',{file:route.params.file})} source={require("../Assets/Lottie/sucess_ani.json")}/>
    </View>
    </View>
  )
}