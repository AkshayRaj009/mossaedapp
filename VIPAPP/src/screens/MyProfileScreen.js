import React from 'react'
import { View, Text, FlatList, Pressable, Image } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, headerRightLogo, profileMask, profilePicture } from '../assests';
import { profileData } from "../constants/FlatlistArray"
import Animated, { FadeInLeft } from 'react-native-reanimated';
import HeaderComponent from '../components/HeaderComponent';

const MyProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }} >
      <View style={{ height: HEIGHT * 0.57, backgroundColor: "#181D23" }} >
        <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="MY PROFILE" />
        <Image style={{ position: "absolute", right: 0 }} source={profileMask} />
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.10 }} >
          <Image source={profilePicture} />
          <View style={{ marginTop: HEIGHT * 0.06, alignItems: "center" }} >
            <Text style={{ color: "#fff", fontSize: 23, fontWeight: "bold" }} >Hisham Tourbaq</Text>
            <View style={{ flexDirection: "row", marginTop: 3 }} >
              <Text style={{ color: "gold", fontWeight: "bold" }} >Gold</Text>
              <Text style={{ color: "gold", fontSize: 15 }} >(1038)point</Text>
            </View>
            <Text style={{ color: "#fff", fontSize: 15, marginTop: 5 }} >+97444621428</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 25, marginHorizontal: 13 }}>
        <FlatList
          data={profileData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <>
            <Animated.View entering={FadeInLeft.delay(item.id * 550)}>
              <Pressable onPress={()=>navigation.navigate(item.path)} style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#181D23", height: HEIGHT * 0.10, alignItems: "center", borderRadius: 9, paddingHorizontal: 20, marginBottom: 16 }} >
                <View style={{ backgroundColor: "black", padding: 9, borderRadius: 10 }} >
                  <Image source={item.profile} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }} >
                  <Text style={{ color: "#fff", fontSize: 20, paddingRight: HEIGHT * 0.17, }} >{item.title}</Text>
                  <Image source={item.image} />
                </View>
              </Pressable>
              </Animated.View>
            </>
          }
        />
      </View>
    </View>
  )
}

export default MyProfileScreen