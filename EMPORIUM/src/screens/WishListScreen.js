import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import { bellIcon, drawerIcon } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { makeUpDatas } from '../constants/FlatlistArray'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer'
import HeaderComponent from '../components/HeaderComponent'

const WishListScreen = ({ navigation }) => {
  const drawerProgress = useDrawerProgress()
  const animationstyles = useAnimatedStyle(() => {
    const scaleX = interpolate(
      drawerProgress.value,
      [0, 1.5], [1, 0.8]
    )
    const scaleY = interpolate(
      drawerProgress.value,
      [0, 0.4], [1, 0.9]
    )
    return {
      transform: [{ scaleX }, { scaleY }],
      borderRadius: drawerProgress.value * 30
    }
  })
  return (
    <View style={{ backgroundColor: "#ffffff30" }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="WISHLIST" image={drawerIcon} />
        <Animated.View style={[{ marginTop: HEIGHT * 0.02, marginHorizontal: 10 }, animationstyles]}>
          <FlatList
            numColumns={2}
            data={makeUpDatas}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View style={{ marginHorizontal: HEIGHT * 0.02, backgroundColor: "#ffff", marginTop: HEIGHT * 0.02, height: HEIGHT * 0.30 }} >
                <Image source={item.image} />
                <View style={{ paddingLeft: 20, paddingTop: HEIGHT * 0.02 }} >
                  <Text style={{ fontSize: 17, fontWeight: "600" }} >{item.title}</Text>
                  <Text style={{ color: "#B89962", fontSize: 15, marginTop: 5 }} >{item.num}</Text>
                </View>
              </View>
            }
          />
        </Animated.View>
      </SafeAreaView>
    </View>
  )
}

export default WishListScreen