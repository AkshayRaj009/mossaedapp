import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, vivre, goldenHores, crossIcon } from "../assests/index"
import ButtonComponent from '../component/ButtonComponent'
import CarListComponent from '../component/CarListComponent'
import MainContainer from '../component/MainContainer'
import TextInputComponent from '../component/TextInputComponent'
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carlistData, carListData, companiesData, estateFilter, horse, JewelleryInput, num, phnumb, uniqueFilter, uniqueNumber } from "../constants/FlatListArray"
const PropertyFilterScreen = ({navigation}) => {
    return (
        <View>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Filter" image={crossIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} ></MainContainer>
            <FlatList
                style={{ marginTop: HEIGHT * 0.07 }}
                data={estateFilter}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View  >
                        <TextInputComponent placeholderStyle={{ paddingLeft: WIDTH * 0.35 }} placeholder={item.title} text={item.text} />
                    </View>
                } />
            <ButtonComponent navigation={() => navigation.navigate("PropertyScreen")} style={{ marginTop:HEIGHT*0.12, height: HEIGHT * 0.08 }} titleStyle={{ fontSize: 13, color: "black" }} title="View jewlery" />
        </View>
    )
}

export default PropertyFilterScreen