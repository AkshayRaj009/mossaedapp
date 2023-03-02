import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carListData, jewData, jewelleryCase, JewelleryInput, watchesData } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'

const WatchJewelleryScreen = ({ navigation }) => {
  const slideshow = (type) => {
    switch (type) {
      case "watches":
        return <View style={{ flex: 1 }} >
          <FlatList
            style={{ marginTop: HEIGHT * 0.029 }}
            data={watchesData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Pressable onPress={() => navigation.navigate(item?.path)} style={{ borderWidth: 1, marginHorizontal: WIDTH * 0.06, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: HEIGHT * 0.24, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: colors.borderYellow, marginBottom: HEIGHT * 0.027 }} >
                <View style={{ alignItems: "center" }} >
                  <Image style={{ shadowColor: "red" }} source={item?.image} />
                </View>
                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.03 }} >
                  <Text style={{ fontSize: 10, paddingLeft: WIDTH * 0.04, }} >{item?.order}</Text>
                  <Text style={{ fontSize: 14, paddingLeft: WIDTH * 0.07, }}>{item?.title}</Text>
                  <Image style={{ marginLeft: WIDTH * 0.09 }} source={item?.location} />
                </View>
              </Pressable>
            }
          />
        </View>
      case "Jewellery":
        return <View style={{ height: HEIGHT }} >
          <FlatList
            style={{ marginTop: HEIGHT * 0.029 }}
            data={jewData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Pressable onPress={() => navigation.navigate(item?.path)} style={{ borderWidth: 1, marginHorizontal: WIDTH * 0.06, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: HEIGHT * 0.24, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: colors.borderYellow, marginBottom: HEIGHT * 0.027 }} >
                <View style={{ alignItems: "center" }} >
                  <Image style={{ shadowColor: "red" }} source={item?.image} />
                </View>
                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.03 }} >
                  <Image source={carBack} />
                  <Text style={{ fontSize: 10, paddingLeft: WIDTH * 0.04, color: colors.grey }} >{item?.order}</Text>
                  <Text style={{ fontSize: 14, paddingLeft: WIDTH * 0.04, color: colors.textColor, marginTop: HEIGHT * 0. - 6 }}>{item?.title}</Text>
                  <Image style={{ marginLeft: WIDTH * 0.09 }} source={item?.location} />
                </View>
              </Pressable>
            }
          />
        </View>
    }
  }
  return (
    <View style={{ flex: 1 }} >
      <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
      <MainContainer titleStyle={{ color: colors.darkWhite, fontSize: 20, marginTop: HEIGHT * 0.07 }} title="Watches" image={drawerIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0, height: HEIGHT * 0.12 }} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.06 }} text="Watches and Jewelry" >
        <View>
          <FlatList
            style={{ height: HEIGHT }}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            data={jewelleryCase}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <View style={{ width: WIDTH }}>
              {slideshow(item.case)}
            </View>
            } />
        </View>
      </MainContainer>
    </View>
  )
}

export default WatchJewelleryScreen