import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { uniqueFilter } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import FilterComponent from '../component/FilterComponent'
import TextInputComponent from '../component/TextInputComponent'
import ButtonComponent from '../component/ButtonComponent'

const UniqueFilterScreen = ({ navigation }) => {
    return (
        <View>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Filter" image={crossIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <View>
                    <FilterComponent />
                </View>
                <View style={{ height: HEIGHT * 0.47 }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.22 }}
                        data={uniqueFilter}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <TextInputComponent placeholderStyle={{ paddingLeft: WIDTH * 0.35 }} placeholder={item.title} text={item.text} />
                        } />
                    <View>
                        <View style={{ flexDirection: "row", marginLeft: WIDTH * 0.30 }} >
                            <Text style={{ fontSize: 13, marginLeft: WIDTH * 0.08 }} >View most uses number</Text>
                            <View style={{ height: HEIGHT * 0.018, borderWidth: 1, width: WIDTH * 0.04, marginLeft: WIDTH * 0.08, borderColor: colors.grey }} >
                            </View>
                        </View>
                    </View>
                </View>
                <ButtonComponent navigation={() => navigation.navigate("UniqueScreen")} style={{ marginTop: HEIGHT * 0.35, height: HEIGHT * 0.08 }} titleStyle={{ fontSize: 13, color: "black" }} title="View jewlery" />
            </MainContainer>
        </View>
    )
}

export default UniqueFilterScreen