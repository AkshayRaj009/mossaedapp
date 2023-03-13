import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'

import { whatsappLogo } from "../../src/assests/index"
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { colors } from '../constants/colors'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStartedScreen")
    }, 2000)
  }, [])


  return (

    <View style={{ backgroundColor: colors.darkWhite, height: HEIGHT }} >
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.30 }} >
        <Image resizeMode='cover' style={{ width: WIDTH * 0.245, height: HEIGHT * 0.110 }} source={whatsappLogo} />
        <View style={{ alignItems: "center", marginTop: HEIGHT * 0.48 }} >
          <Text style={{ color: "grey" }}  >from</Text>
          <Text style={{ fontSize: 16, color: "#25D366", fontWeight: "500", marginTop: HEIGHT * 0.004 }} >FACE BOOK</Text>
        </View>
      </View>
    </View>



  )
}

export default SplashScreen