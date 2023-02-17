import React,{useEffect} from 'react'
import { View, Text,Image, ImageBackground, SafeAreaView } from 'react-native'
import {splashImage,emporiumImage} from "../assests/index"
import { HEIGHT, WIDTH } from "../constants/Dimensions"


const SplashScreen = ({navigation}) => {
    
    useEffect(()=>{
        setTimeout(()=>{
navigation.navigate("HomeScreen")
        },2000)
    },[])


  return (
    <View style={{flex:1}} >
  <ImageBackground style={{flex:1}} resizeMode='cover'  source={splashImage} >
    <View style={{alignItems:"center",justifyContent:"center",marginTop:HEIGHT*0.13}} >
    <Image  source={emporiumImage} />
    </View>
  </ImageBackground>


    </View>
  )
}

export default SplashScreen