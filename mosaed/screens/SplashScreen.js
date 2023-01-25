import React, { useEffect } from 'react'
import { View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    getData()
    getData1()
  },)

  const getData = async () => {
    const value = await AsyncStorage.getItem('Interslidestatus')
    console.log("value", value);
    navigation.navigate(value ? "SplashScreen" : "GetStartedScreen")

  }
  const getData1 = async () => {
    const value = await AsyncStorage.getItem('Interslidestatus2')
    console.log("value", value);
    navigation.navigate(value ? "DrawerScreen" : "WelcomeScreen")
  }
  
  return (
    <View style={{ backgroundColor: "#32AEBC", flex: 1 }}>
      <View>
        <Image
          source={require("../assets/Images/TopMask.png")}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 70 }}>
        <Image style={{ marginVertical: 20 }}
          source={require("../assets/Images/middlecontent.png")} />
        <Image source={require("../assets/Images/maskcontent.png")} />
      </View>
      <View style={{ position: "absolute", bottom: -11, right: -9 }}>
        <Image
          source={require("../assets/Images/BottomMask.png")}
        />
      </View>
    </View>
  )
}

export default SplashScreen;