import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { bellIcon, drawerIcon } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import HeaderComponent from '../components/HeaderComponent'

const TermsScreen = ({ navigation }) => {
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
    <View style={{ backgroundColor: "#ffffff", height: HEIGHT }} >
      <View style={{ backgroundColor: "#FFFFFF30" }} >
        <SafeAreaView>
          <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="TERMS AND CONDITION" image={drawerIcon} />
          <Animated.View style={[{ marginHorizontal: HEIGHT * 0.04, marginTop: HEIGHT * 0.038 }, animationstyles]} >
            <Text style={{ fontSize: 31, fontWeight: "700", textAlign: "center" }} >Terms And Conditions</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  type and scrambled AND</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >1-Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >2-Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >3-Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since the 1500s, when an unknown  </Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >4-Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >5-Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >6-Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >7-Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since the 1500s, when an unknown dummy text </Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >8-Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            <Text style={{ textTransform: "uppercase", marginTop: HEIGHT * 0.02, color: "#313131", fontSize: 15 }} >9-Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
          </Animated.View>

        </SafeAreaView>
      </View>
    </View>
  )
}

export default TermsScreen