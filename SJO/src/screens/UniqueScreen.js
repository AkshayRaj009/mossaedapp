import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carListData, JewelleryInput, num, phnumb, uniqueFilter, uniqueNumber } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'


const UniqueScreen = (props) => {
    const { navigation } = props

    const slideshow = (type) => {
        switch (type) {
            case "phoneNumber":
                return <View style={{ height: HEIGHT * 0.83 }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.029 }}
                        data={uniqueNumber}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ marginBottom: HEIGHT * 0.02 }} >
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.06, }} >
                                    <Text style={{ color: colors.grey, fontSize: 16 }}>{item?.date}</Text>
                                    <Text style={{ paddingLeft: WIDTH * 0.41, fontSize: 16 }} >{item?.name}</Text>
                                    <View  >
                                        <Text style={{ fontSize: 16, fontWeight: "700" }} >{item?.num}</Text>
                                        <Text style={{ fontSize: 17, color: colors.grey }} >{item?.use}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.01 }} >
                                    <Image source={item?.arrow} />
                                    <Text style={{ paddingLeft: WIDTH * 0.04, marginTop: HEIGHT * 0.0 - 6, fontSize: 16 }} >{item?.order}</Text>
                                    <Text style={{ paddingLeft: WIDTH * 0.35, fontSize: 18, color: colors.grey }} >{item?.privet}</Text>


                                </View>
                                <View style={{ borderWidth: 1, borderColor: colors.borderGrey, marginHorizontal: WIDTH * 0, marginTop: HEIGHT * 0.01 }} />
                            </View>

                        } />
                </View>
            case "carsNumber":
                return <View style={{ height: HEIGHT * 0.80 }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.029 }}
                        data={phnumb}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ marginBottom: HEIGHT * 0.02 }} >
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.06, }} >
                                    <Text style={{ color: colors.grey, fontSize: 16 }}>{item?.date}</Text>
                                    <View  >
                                        <Text style={{ fontSize: 16, fontWeight: "700" }} >{item?.num}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02 }} >

                                    <Text style={{ fontSize: 16 }} >{item?.order}</Text>
                                    <Text style={{ fontSize: 17, paddingLeft: WIDTH * 0.30, marginTop: HEIGHT * 0.0 - 6 }} >{item?.use}</Text>

                                    <Text style={{ fontSize: 18, paddingLeft: WIDTH * 0.06 }} >{item?.privet}</Text>


                                </View>
                                <View style={{ borderWidth: 1, borderColor: colors.borderGrey, marginHorizontal: WIDTH * 0, marginTop: HEIGHT * 0.01 }} />
                            </View>

                        } />
                </View>
        }
    }

    return (
        <View style={{ flex: 1 }} >
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: "black", fontSize: 15 }} title="Unique number" color={{ backgroundColor: colors.Yellow, marginTop: 0, height: HEIGHT * 0.12 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} image={drawerIcon} >

                <FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={num}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <View style={{ width: WIDTH }}>
                        {slideshow(item.case)}
                    </View>
                    } />
            </MainContainer>
        </View>
    )
}

export default UniqueScreen