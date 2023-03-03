import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, } from 'react-native'

import { drawerIcon, horseTypes, rightBackArrow, watches } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carlistData, carListData, watchesData } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import CarListComponent from '../component/CarListComponent'
import ButtonComponent from '../component/ButtonComponent'
import ModalComponent from '../component/ModalComponent'

const HorseListScreen = ({ navigation }) => {
    return (
        <View>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Watches" image={drawerIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <View>
                    <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={horseTypes} />
                    <View style={{ alignItems: "center" }} >
                    </View>
                    <View style={{ height: HEIGHT * 0.36 }}>
                        <FlatList
                            style={{}}
                            data={carlistData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <View  >
                                    <CarListComponent color={item.color} {...item} />
                                </View>
                            } />
                        <View style={{ marginHorizontal: WIDTH * 0.05, marginBottom: HEIGHT * 0.03 }} >
                            <Text style={{ marginBottom: HEIGHT * 0.02, color: colors.lightGrey, fontSize: 20 }} >Another details</Text>
                            <Text style={{ color: colors.grey, fontSize: 20 }} >This text is an example of a text that can be replaced in the same space</Text>
                        </View>
                    </View>
                </View>
            </MainContainer>
        </View>
    )
}

export default HorseListScreen