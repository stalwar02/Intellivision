import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginPage from './Auth_page/LoginPage'
import SignPage from './Auth_page/SignPage'
import MainPage from './MainPage'
import PdfPage from './Options/PdfPage'
import AudioPage from './Options/AudioPage'
import WebsitePage from './Options/WebsitePage'
import PdfBrowse from './Browse/PdfBrowse'
import Succes from './Ui_Compo/Sucess_compo'
import Chat from './Chat_page.js/Chat'
import Onboard_screens from './Onboard/Onboard_screens'
import SplashScreen from './SplashScreen/SplashScreen'
import Otp from './Auth_page/Otp'


export default function App() {
  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='Onboard' component={Onboard_screens}/>
        <Stack.Screen name='Login' component={LoginPage}/>
        <Stack.Screen name='SignUp' component={SignPage}/>
        <Stack.Screen name='Main' component={MainPage}/>
        <Stack.Screen name='Pdf' component={PdfPage}/>
        <Stack.Screen name='Audio' component={AudioPage}/>
        <Stack.Screen name='Web' component={WebsitePage}/>
        <Stack.Screen name='PdfBrowse' component={PdfBrowse}/>
        <Stack.Screen name='Sucess' component={Succes}/>
        <Stack.Screen name='Chat' component={Chat}/>
        <Stack.Screen name='Otp' component={Otp}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
}