import { View, Text, ImageBackground,Image,TouchableOpacity } from 'react-native'
import React, { useContext, useState,useEffect } from 'react'
import Document from 'react-native-document-picker'
import LottieView from 'lottie-react-native'
import * as Ani from 'react-native-animatable'

export default function PdfBrowse({navigation}) {
    const [Furi,Setfuri]=useState(false)
    const [load,setLoad]=useState(true)
    const [uri,Seturi]=useState('')
    const [up,Setup]=useState('')
    const sendData=async()=>{
      setLoad(false)
      try{
        let data=new FormData();
        data.append('File',uri)
        setLoad(true)
        let res = await fetch(
          'http://192.168.1.6:3000/api/v1/ChatPdf',
          {
            method: 'POST',
            body: data,
          }
        );
        res.json().then((datas)=>{console.log(datas['yourFile']),navigation.replace('Sucess',{file:datas.yourFile})})
        console.log(JSON.stringify(up)+"hhhh")
        
      }
      catch (err){
        console.log(err.message)
      }
    }
    const getFile=async()=>{
        try{
            const pickFile=await Document.pickSingle({
                type:[Document.types.pdf]
            })
            Setfuri(true)
            Seturi(pickFile)
            console.log("Sucess...")
            console.log(pickFile['name'])
        }
        catch{
            console.log("Failed to fetch file...")
            Setfuri(false)
        }
        
    }
    useEffect(()=>{
        getFile()
    },[])
  return (
    <ImageBackground source={require('../Assets/pxfuel2.jpg')} style={{flex:1}}>
    <View style={{flex:1,backgroundColor:load?'transparent':'black',justifyContent:'center',alignItems:'center'}}>
        {
            load?      <View style={{paddingHorizontal:20,height:400,width:300,borderRadius:50,borderWidth:1,borderColor:'white',backgroundColor:'black',opacity:0.7}}>
            <Image source={require('../Assets/pdf_logo.png')} style={{position:'relative',height:100,width:100,bottom:40}}/>
            <Text style={{fontSize:20}}>File Name: {uri['name']}</Text>
            <Text style={{fontSize:20}}>Size: {uri['size']}</Text>
            <TouchableOpacity onPress={()=>sendData()} style={{justifyContent:'center',alignItems:'center',borderRadius:20,borderWidth:2,borderColor:'white',height:100,width:120,alignSelf:'center',marginTop:100}}>
                <Text style={{fontWeight:800,fontSize:20}}>UPLOAD</Text>
            </TouchableOpacity>
          </View>:<LottieView source={require('../Assets/Lottie/Analys_file.json')} style={{height:400,width:400}} autoPlay></LottieView>
        }

    </View>
    </ImageBackground>
  )
}