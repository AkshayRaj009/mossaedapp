import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, SafeAreaView } from 'react-native'
import { splashImage, emporiumImage } from "../assests/index"
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }) => {
  const getData = async () => {
    const value = await AsyncStorage.getItem('loggedIn')
    value ? navigation.navigate("HomeScreen") : navigation.navigate("GetStartedScreen")
    console.log("value", value);
  }
  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 2000)
  }, [])
  return <View style={{ flex: 1 }} >
    <ImageBackground style={{ flex: 1 }} resizeMode='cover' source={splashImage} >
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.13 }} >
        <Image source={emporiumImage} />
      </View>
    </ImageBackground>
  </View>

}
export default SplashScreen