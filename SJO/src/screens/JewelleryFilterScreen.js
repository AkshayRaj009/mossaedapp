import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carListData, JewelleryInput } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import FilterComponent from '../component/FilterComponent'
import TextInputComponent from '../component/TextInputComponent'
import ButtonComponent from '../component/ButtonComponent'


const JewelleryFilterScreen = ({ navigation }) => {
    return (
        <View>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Filter" image={crossIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <View>
                    <FilterComponent />
                </View>
                <View style={{ height: HEIGHT * 0.72 }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.22 }}
                        data={JewelleryInput}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View  >
                                <TextInputComponent placeholder={item.title} text={item.text} />
                            </View>
                        } />
                    <View>
                        <View style={{ backgroundColor: colors.lightYellow, height: HEIGHT * 0.100, borderWidth: 1, borderColor: colors.lightGrey, marginHorizontal: WIDTH * 0.10, marginBottom: WIDTH * 0.01, alignItems: "center" }} >
                            <Text style={{ marginTop: HEIGHT * 0.01 }} >location details</Text>
                        </View>
                        <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center" }} >
                            <Text style={{ fontSize: 13, marginLeft: WIDTH * 0.08 }} >View most uses jewellery and watches</Text>
                            <View style={{ height: HEIGHT * 0.018, borderWidth: 1, width: WIDTH * 0.04, marginLeft: WIDTH * 0.08, borderColor: colors.grey }} >
                            </View>
                        </View>
                    </View>
                </View>
                <ButtonComponent navigation={() => navigation.navigate("WatchJewelleryScreen")} style={{ marginTop: HEIGHT * 0.095, height: HEIGHT * 0.08 }} titleStyle={{ fontSize: 13, color: "black" }} title="View jewlery" />
            </MainContainer>
        </View>
    )
}

export default JewelleryFilterScreen