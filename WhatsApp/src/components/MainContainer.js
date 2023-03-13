import { View, Text, StatusBar, Platform, SafeAreaView } from 'react-native'
import React from 'react'

import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { colors } from '../constants/colors'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'




const MainContainer = (props) => {
    const { children } = props
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <View style={[{ backgroundColor: colors.darkWhite, flex: 1 }]} >
                <View style={{ backgroundColor: colors.tealGreen, height: HEIGHT * 0.15 }} >
                    <View style={[{ height: HEIGHT * 0.05, width: WIDTH, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : HEIGHT * 0.05, backgroundColor: colors.tealGreen, }]}>
                        <View style={{ marginHorizontal: WIDTH * 0.05 }} >
                            <View style={{ flexDirection: "row" }} >
                                <Text style={{ color: colors.white, fontSize: 18, fontWeight: "500", marginTop: HEIGHT * 0.015 }} >WhatsApp</Text>
                                <View style={{ flexDirection: "row", marginLeft: WIDTH * 0.52, alignItems: "center" }} >
                                    <View style={{ paddingRight: WIDTH * 0.02 }} >
                                        <Feather name='camera' size={20} color={"#fff"} />
                                    </View>
                                    <View style={{ paddingRight: WIDTH * 0.02 }} >
                                        <EvilIcons name="search" size={27} color={"#fff"} />
                                    </View>
                                    <FontAwesome name="ellipsis-v" size={20} color={"#fff"} />
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
                            <Text style={{ fontSize: 16, color: colors.white, fontWeight: "500" }} >Chats</Text>
                        </View>
                    </View>
                </View>
                <SafeAreaView style={{ backgroundColor: colors.darkWhite, flex: 1 }} >{children}</SafeAreaView>

            </View>

        </>

    )
}

export default MainContainer