import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { bellIcon, blackBackArrow } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { supportData } from '../constants/FlatlistArray'
import Animated, { interpolate, useAnimatedStyle, FadeInLeft } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer'
import HeaderComponent from '../components/HeaderComponent'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const SupportScreen = ({ navigation }) => {
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
    <View style={{ backgroundColor: "#fff", height: HEIGHT }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} color={{ color: "#313131" }} image2={bellIcon} title="SUPPORT" image={blackBackArrow} />
        <Text style={{ textAlign: "center", marginHorizontal: HEIGHT * 0.08, marginTop: HEIGHT * 0.08, fontSize: 18 }} >Loreum Ipsum is simply dummy text of the printin</Text>
        <Animated.View style={[{ marginTop: HEIGHT * 0.04 }, animationstyles]} >
          <FlatList
            data={supportData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View style={{ marginTop: HEIGHT * 0.01 }} >
                <TextInputComponent text={item.text} />
              </View>
            } />
        </Animated.View>
        <View>
          <ButtonComponent title="SAVE" />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default SupportScreen