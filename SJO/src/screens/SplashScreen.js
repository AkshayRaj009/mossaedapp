import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import {sjoLogo,spalshHorse,spalshLeftImage} from "../assests/index"
import {HEIGHT,WIDTH} from "../constants/Dimensions"
import {colors} from "../constants/colors"

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen")
    }, 2000)
  }, [])
  
  return (
    <View style={{backgroundColor:colors.White,flex:1}} >
      <View>
        <Image style={{position:"absolute",left:0}} source={spalshLeftImage} />
      </View>
     <View style={{alignItems:"center",justifyContent:"center",flex:1,marginBottom:HEIGHT*0.17}} >
      <Image source={sjoLogo} />
     </View>
     <Image style={{position:"absolute",right:WIDTH*0.07,bottom:0}} source={spalshHorse} />
    </View>
  )
}

export default SplashScreen