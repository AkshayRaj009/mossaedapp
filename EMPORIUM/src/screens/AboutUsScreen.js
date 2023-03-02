import { useDrawerProgress } from '@react-navigation/drawer'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { drawerIcon,bellIcon } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import HeaderComponent from '../components/HeaderComponent'

const AboutUsScreen = ({navigation}) => {
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
    <View style={{backgroundColor:"#FFFFFF30"}} >
      <SafeAreaView>
      <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="ABOUT US" image={drawerIcon} />
        <Animated.View style={[{marginHorizontal:HEIGHT*0.03,marginTop:HEIGHT*0.037},animationstyles]} >
          <Text style={{fontSize:33,fontWeight:"600"}} >About Us</Text>
        <Text style={{textTransform:"uppercase",marginTop:HEIGHT*0.02,color:"#313131",fontSize:15}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  type and scrambled AND</Text>
        <Text style={{textTransform:"uppercase",marginTop:HEIGHT*0.02,color:"#313131",fontSize:15}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  type and scrambled AND Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with .</Text>
        <Text style={{textTransform:"uppercase",marginTop:HEIGHT*0.02,color:"#313131",fontSize:15}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  type and scrambled AND Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </Text>
        </Animated.View>
        
    
      </SafeAreaView>
     
    </View>
  )
}

export default AboutUsScreen