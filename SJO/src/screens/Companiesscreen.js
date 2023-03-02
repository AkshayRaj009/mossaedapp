import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carListData, companiesData, JewelleryInput, num, phnumb, uniqueFilter, uniqueNumber } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'

const Companiesscreen = ({navigation}) => {
    return (
        <View style={{ flex: 1 }} >
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Companies" image={drawerIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <FlatList
                    style={{ marginTop: HEIGHT * 0.029 }}
                    data={companiesData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => navigation.navigate(item?.path)} style={{ borderWidth: 1, marginHorizontal: WIDTH * 0.06, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: HEIGHT * 0.17, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: colors.borderYellow, marginBottom: HEIGHT * 0.027 }} >
                            <View style={{ flexDirection: "row", justifyContent: 'flex-end', }} >
                                < View style={{}} >
                                    <Text style={{ fontSize: 18, color: colors.grey, marginTop: HEIGHT * 0.012 }} >{item?.title1}</Text>
                                    <Text style={{ textAlign: 'right', marginTop: HEIGHT * 0.012, paddingRight: WIDTH * 0.03 }}>{item?.text}</Text></View>
                                <Image style={{ shadowColor: "red" }} source={item?.image} />
                            </View>
                            <View style={{ borderWidth: 1, borderColor: colors.borderGrey, marginHorizontal: WIDTH * 0, marginRight: WIDTH * 0.07 }} />
                            <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.03 }} >
                                <Image source={carBack} />
                                <Text style={{ fontSize: 13, paddingLeft: WIDTH * 0.04, }} >{item?.order}</Text>
                                <Text style={{ fontSize: 14, paddingLeft: WIDTH * 0.04}}>{item?.title}</Text>
                                <Image style={{ marginLeft: WIDTH * 0.04 }} source={item?.location} />
                            </View>
                        </Pressable>
                        
                    }
                />

            </MainContainer>
        </View>
    )
}

export default Companiesscreen