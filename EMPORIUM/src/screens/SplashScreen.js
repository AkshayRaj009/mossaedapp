import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView } from 'react-native'
import { splashImage, emporiumImage } from "../assests/index"
import { HEIGHT, WIDTH } from "../constants/Dimensions"


const SplashScreen = ({ navigation }) => {



  const getData = async () => {
    const value = await AsyncStorage.getItem('loggedIn')
   
    // setTimeout(()=>{
      value ?navigation.navigate("HomeScreen"): navigation.navigate("GetStartedScreen")


    // },1500)
    console.log("value", value);

  }
  useEffect(() => {
    
    // navigation.navigate("GetStartedScreen")
    getData()
  
 
}, [])

  return (
    <View style={{ flex: 1 }} >
      <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={splashImage} >
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.13 }} >
          <Image source={emporiumImage} />
        </View>
      </ImageBackground>


    </View>
  )
}

export default SplashScreen