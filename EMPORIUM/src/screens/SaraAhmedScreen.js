import React, { useState } from 'react'
import { View, ImageBackground, Image, Text, FlatList } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { whiteBellIcon, phoneCallIcon, backArrow, saraAhmedSmall, saraAhmed5, yellowHeart } from "../assests/index"
import HeaderComponent from '../components/HeaderComponent'
import { makeUpDatas } from '../constants/FlatlistArray'

const SaraAhmedScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }} >
      <ImageBackground source={saraAhmed5} style={{ height: HEIGHT * 0.40, overflow: "hidden", width: WIDTH * 1.2, paddingHorizontal: WIDTH * 0.1 }} >
        <View style={{ marginTop: HEIGHT * 0.04 }}>
          <HeaderComponent drawernavigation={() => navigation.goBack()} image2={whiteBellIcon} image={backArrow} />
        </View>
        <View style={{ marginTop: HEIGHT * 0.16 }} >
          <View style={{ flexDirection: "row", alignItems: "center" }} >
            <Image source={saraAhmedSmall} />
            <View style={{ marginLeft: -8,  }} >
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }} >Sara Ahmed</Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6, borderWidth: 1, paddingHorizontal: WIDTH * 0.02, padding: 4, borderColor: "#fff" }}>
                <Image source={phoneCallIcon} />
                <Text style={{ color: "#fff", fontSize: 14, borderColor: "#fff", fontWeight: "500",paddingLeft:4 }} >CALL VENDOR</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 10, height: HEIGHT*0.580 }}>
        <FlatList
          numColumns={2}
          data={makeUpDatas}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={{ marginHorizontal: HEIGHT * 0.02, backgroundColor: "#ffff",height: Platform.OS === 'ios' ? 244 : 246 }} >
              <Image source={item.image} />
              <View style={{marginHorizontal:HEIGHT*0.02}} >
              <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.08, width: WIDTH * 0.08, borderRadius: WIDTH * 0.8 / 2, borderWidth: 2, backgroundColor: "#fff", position: "absolute",  left: HEIGHT * 0.10, bottom:HEIGHT*0.05,borderColor: "#fff" }} >
                <Image source={yellowHeart} />
              </View>
              <Text style={{ fontSize: 17, fontWeight: "600",marginTop:HEIGHT*0.01 }} >{item.title}</Text>
              <Text style={{ color: "#B89962", fontSize: 15, marginTop: 5 }} >{item.num}</Text>
                </View>
              
            </View>
          }
        />
      </View>
    </View>
  )
}
export default SaraAhmedScreen