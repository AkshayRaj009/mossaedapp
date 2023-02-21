import React, { useState } from 'react'
import { View, ImageBackground, Image, Text, FlatList } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { whiteBellIcon, phoneCallIcon, backArrow, saraAhmedSmall, saraAhmed5,yellowHeart } from "../assests/index"
import HeaderComponent from '../components/HeaderComponent'
import { makeUpDatas } from '../constants/FlatlistArray'
const SaraAhmedScreen = ({ navigation }) => {
  return (
    <View>

      <View style={{ alignItems: "center" }} >
        <ImageBackground source={saraAhmed5} style={{ height: HEIGHT * 0.40, overflow: "hidden", width: WIDTH * 1.2, paddingHorizontal: WIDTH * 0.1 }} >
          <View style={{ marginTop: HEIGHT * 0.04 }}>
            <HeaderComponent drawernavigation={() => navigation.goBack()} image2={whiteBellIcon} image={backArrow} />
          </View>
          <View style={{ marginTop: HEIGHT * 0.17 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
              <Image source={saraAhmedSmall} />
              <View style={{ marginLeft: -8, marginTop: -10 }} >
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }} >Sara Ahmed</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6, borderWidth: 1, paddingHorizontal: WIDTH * 0.02, padding: 4, borderColor: "#fff" }}>
                  <Image source={phoneCallIcon} />
                  <Text style={{ color: "#fff", fontSize: 13, borderColor: "#fff", fontWeight: "500" }} >CALL VENDOR</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{ marginTop: HEIGHT * 0.0, marginHorizontal: 10 }}>
          <FlatList
            numColumns={2}
            data={makeUpDatas}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) =>
              <View style={{ marginHorizontal: HEIGHT * 0.02, backgroundColor: "#ffff", marginTop: HEIGHT * 0.02 }} >
                <Image source={item.image} />
                <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.08, width: WIDTH * 0.08, borderRadius: WIDTH * 0.8 / 2, borderWidth: 2, backgroundColor: "#fff",position:"absolute",top:HEIGHT*0.20,right:HEIGHT*0.02,borderColor:"#fff" }} >
                            <Image source={yellowHeart} />
                                    </View>
                <Text style={{ fontSize: 17, fontWeight: "600" }} >{item.title}</Text>
                <Text style={{ color: "#B89962", fontSize: 15, marginTop: 5 }} >{item.num}</Text>
              </View>
            }
          />
        </View>
      </View>


    </View>
  )
}
export default SaraAhmedScreen