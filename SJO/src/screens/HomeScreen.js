import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, StatusBar } from 'react-native'

import { homeLeftIcon, spalshLeftImage, homeScreenLogo } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { HomeData } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'

const HomeScreen = (props) => {
    const { navigation } = props
    return (
        <>
            <SafeAreaView style={{ backgroundColor: colors.White, flex: 0 }} />
            <MainContainer titleStyle={{ marginLeft: WIDTH * 0.08, color: colors.Yellow }} title="Home" image={homeLeftIcon} leftImage={spalshLeftImage} color={{ backgroundColor: colors.White, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : HEIGHT * 0 }} >
                <View style={{ backgroundColor: colors.White, height: HEIGHT * 0.20, borderBottomRightRadius: 26, borderBottomLeftRadius: 26 }} >
                    {/* <Image style={{ position: "absolute", left: 0,top:0 }} source={spalshLeftImage} /> */}
                    <View style={{ marginHorizontal: WIDTH * 0.10 }} >
                        <Image source={homeScreenLogo} />
                        <Text style={{ color: colors.Yellow, fontSize: 26, fontWeight: "400" }} >Welcome</Text>
                        <View style={{ marginTop: Platform.OS === 'ios' ? 41 : 85 }} >
                            <View style={{ flexDirection: "row" }} >
                                <Text style={{ color: colors.Yellow, fontSize: 15 }}>Your Excellency Sheikh</Text>
                                <Text style={{ color: colors.Yellow, fontSize: 15, paddingLeft: WIDTH * 0.14 }}>JHK</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.White }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.003, height: HEIGHT * 0.60 }}
                        data={HomeData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Pressable onPress={() => navigation.navigate(item.path)}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.08, alignItems: "center", }} >
                                    <Image source={item?.arrow} />
                                    <Text style={{ color: colors.Yellow, fontSize: 26 }} >{item?.title}</Text>
                                    <Image source={item?.image} />
                                </View>
                                <View style={{ borderWidth: 1, borderColor: colors.borderGrey, marginHorizontal: WIDTH * 0, marginRight: WIDTH * 0.07 }} />
                            </Pressable>
                        } />
                </View>
            </MainContainer>
        </>

    )
}

export default HomeScreen