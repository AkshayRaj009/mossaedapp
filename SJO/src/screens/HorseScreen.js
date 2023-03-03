import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'

import { drawerIcon, rightBackArrow, carBack } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { camel, horseData, camelData } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'

const HorseScreen = ({ navigation }) => {
    const slideshow = (type) => {
        switch (type) {
            case "first":
                return <View style={{ flex: 1 }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.024 }}
                        data={horseData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Pressable onPress={() => navigation.navigate(item?.path)} style={{ borderWidth: 1, marginHorizontal: WIDTH * 0.06, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: HEIGHT * 0.24, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: colors.borderYellow, marginBottom: HEIGHT * 0.016 }} >
                                <View style={{ alignItems: "center" }} >
                                    <Image style={{ shadowColor: "red" }} source={item?.image} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.03, alignItems: "center" }} >
                                    <Image source={carBack} />
                                    <Text style={{ fontSize: 17, paddingLeft: WIDTH * 0.04, }} >{item?.order}</Text>
                                    <Text style={{ fontSize: 16, paddingLeft: WIDTH * 0.19, }}>{item?.title}</Text>
                                    <Text style={{ fontSize: 16, paddingLeft: WIDTH * 0.03, }}>{item?.color}</Text>
                                </View>
                            </Pressable>
                        }
                    />
                </View>
            case "second":
                return <View style={{ height: HEIGHT }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.024 }}
                        data={camelData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Pressable onPress={() => navigation.navigate(item?.path)} style={{ borderWidth: 1, marginHorizontal: WIDTH * 0.06, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: HEIGHT * 0.24, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: colors.borderYellow, marginBottom: HEIGHT * 0.016 }} >
                                <View style={{ alignItems: "center" }} >
                                    <Image style={{ shadowColor: "red" }} source={item?.image} />
                                </View>
                                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.03 }} >
                                    <Image source={carBack} />
                                    <Text style={{ fontSize: 10, paddingLeft: WIDTH * 0.04, color: colors.grey }} >{item?.order}</Text>
                                    <Text style={{ fontSize: 21, paddingLeft: WIDTH * 0.23, color: colors.grey, marginTop: HEIGHT * 0. - 14 }}>{item?.title}</Text>
                                    <Image style={{ marginLeft: WIDTH * 0.01 }} source={item?.location} />
                                </View>
                            </Pressable>
                        }
                    />
                </View>
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} leftLogo={rightBackArrow} titleStyle={{ color: colors.darkWhite, fontSize: 20, marginTop: HEIGHT * 0.04 }} title="Horses" image={drawerIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0, height: HEIGHT * 0.09 }} style2={{}} backStyle={{ marginTop: HEIGHT * 0.03 }} text="Watches and Jewelry" >
                <FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={camel}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <View style={{ width: WIDTH }}>
                        {slideshow(item.case)}
                    </View>
                    } />
            </MainContainer>
        </View>
    )
}

export default HorseScreen