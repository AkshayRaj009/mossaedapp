import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon } from "../assests/index"
import MainContainer from '../component/MainContainer'
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { investmentData} from "../constants/FlatListArray"

const InvestmentFilterScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }} >
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Investments" image={drawerIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <FlatList
                    style={{ marginTop: HEIGHT * 0.029 }}
                    data={investmentData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => navigation.navigate(item?.path)} style={{ borderWidth: 1, marginHorizontal: WIDTH * 0.06, borderTopEndRadius: 20, borderTopLeftRadius: 20, height: HEIGHT * 0.17, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderColor: colors.borderYellow, marginBottom: HEIGHT * 0.027 }} >
                            <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginTop:HEIGHT*0.01,marginHorizontal:WIDTH*0.02}} >
                                < View style={{ }} >
                                    <Text style={{ paddingRight: WIDTH * 0.09, textAlign: 'right',fontSize: 18, color: colors.grey, marginTop: HEIGHT * 0.012 }} >{item?.title1}</Text>
                                    <Text style={{ textAlign: 'right', marginTop: HEIGHT * 0.012,paddingRight: WIDTH * 0.05 }}>{item?.text}</Text></View>
                                <Image style={{ shadowColor: "red" }} source={item?.image} />
                            </View>
                            <View style={{ borderWidth: 1, borderColor: colors.borderGrey, marginHorizontal: WIDTH * 0, marginRight: WIDTH * 0.07,marginTop:HEIGHT*0.01 }} />
                            <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.03,alignItems:"center"}} >
                                <Image source={carBack} />
                                <Text style={{ fontSize: 16, paddingLeft: WIDTH * 0.04,fontWeight:"600",marginTop:HEIGHT*0.0-12 }} >{item?.order}</Text>
                                <Text style={{ textAlign: 'right',fontSize: 14, paddingLeft: WIDTH * 0.23,fontWeight:"700"}}>{item?.title}</Text>
                                <Text style={{ textAlign: 'right',fontSize: 14, paddingLeft: WIDTH * 0.02,fontWeight:"700" }} >{item?.qar} </Text>
                            </View>
                        </Pressable>

                    }
                />
            </MainContainer>
        </View>
    )
}

export default InvestmentFilterScreen