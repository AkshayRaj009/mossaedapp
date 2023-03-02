import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, carBack } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { numData } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import ButtonComponent from '../component/ButtonComponent'

const UniqueNumberScreen = ({ navigation }) => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: "black", fontSize: 20 }} title="Add a unique number" color={{ backgroundColor: colors.Yellow, marginTop: 0, height: HEIGHT * 0.15 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <View>
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.029 }}
                        data={numData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.08, marginBottom: HEIGHT * 0.04 }} >
                                <Text style={{ fontSize: 16 }}>{item?.date}</Text>
                                <Text style={{ paddingLeft: WIDTH * 0.09, fontSize: 17 }} >{item?.title}</Text>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: "600" }}>{item?.numb}</Text>
                                    <Text style={{ fontSize: 19 }}>{item?.name}</Text>
                                </View>
                                <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.09, width: WIDTH * 0.09, borderRadius: WIDTH * 0.09 / 2, borderColor: "#B89962", borderWidth: 1, backgroundColor: colors.white }}></View>
                            </View>
                        } />
                </View>
                <ButtonComponent style={{ marginTop: HEIGHT * 0. - 33, height: HEIGHT * 0.08 }} title="Move the number" />
            </MainContainer>
        </>

    )
}

export default UniqueNumberScreen