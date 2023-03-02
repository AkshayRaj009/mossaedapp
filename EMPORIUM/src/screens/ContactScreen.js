import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { bellIcon, drawerIcon, doubleArrow, messageIcon, callIcon } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer'
import HeaderComponent from '../components/HeaderComponent'

const ContactScreen = ({ navigation }) => {
  const drawerProgress = useDrawerProgress()
  const animationstyles = useAnimatedStyle(() => {
    const scaleX = interpolate(
      drawerProgress.value,
      [0, 1.5],
      [1, 0.8]
    )
    const scaleY = interpolate(
      drawerProgress.value,
      [0, 0.4],
      [1, 0.9]
    )
    return {
      transform: [{ scaleX }, { scaleY }],
      borderRadius: drawerProgress.value * 30
    }
  })
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="CONTACT US" image={drawerIcon} />
        <Animated.View style={[{ marginTop: HEIGHT * 0.12, marginHorizontal: HEIGHT * 0.04 }, animationstyles]} >
          <View>
            <Text style={{ fontSize: 34, fontWeight: "700" }}>Get in touch if</Text>
            <Text style={{ fontSize: 34, fontWeight: "700" }} > you need help Or</Text>
            <Text style={{ fontSize: 34, fontWeight: "700" }}> join our family</Text>
          </View>
          <View style={{ marginTop: HEIGHT * 0.20 }} >
            <Text style={{ fontSize: 20, color: "#313131" }} >5 Capital MAll</Text>
            <Text style={{ fontSize: 20, color: "#313131", marginTop: HEIGHT * 0.02 }}>55 Al Remal Street</Text>
            <Text style={{ fontSize: 20, color: "#313131", marginTop: HEIGHT * 0.02 }}>Doha, Qatar</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: HEIGHT * 0.02 }} >
              <Text style={{ fontSize: 19, color: "#313131", fontWeight: "700" }}>Get Direction </Text>
              <Image style={{ marginLeft: 4 }} source={doubleArrow} />
            </View>
          </View>
          <View style={{ marginTop: HEIGHT * 0.02 }}>
            <Text style={{ fontSize: 19, color: "#313131", marginTop: HEIGHT * 0.02 }}>Emporium@gmail.com</Text>
            <Text style={{ fontSize: 19, color: "#313131", marginTop: 5 }}>123 456 789</Text>

          </View>
          <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02 }} >
            <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.12, width: WIDTH * 0.12, borderRadius: WIDTH * 0.12 / 2, borderWidth: 2, backgroundColor: "#B89962", borderColor: "#B89962" }} >
              <Image source={messageIcon} />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.12, width: WIDTH * 0.12, borderRadius: WIDTH * 0.12 / 2, borderWidth: 2, backgroundColor: "#B89962", borderColor: "#B89962", marginLeft: HEIGHT * 0.01 }} >
              <Image source={callIcon} />
            </View>
          </View>
        </Animated.View>

      </SafeAreaView>
    </View>
  )
}

export default ContactScreen