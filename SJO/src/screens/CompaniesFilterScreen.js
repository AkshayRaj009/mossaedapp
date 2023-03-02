import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carListData, companyFilter, JewelleryInput, num, phnumb, uniqueFilter, uniqueNumber } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import TextInputComponent from '../component/TextInputComponent'
import ButtonComponent from '../component/ButtonComponent'

const CompaniesFilterScreen = ({navigation}) => {
  return (
    
    <View>
       <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Filter" image={crossIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
            <View style={{ height: HEIGHT*0.33 }} >
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.07 }}
                        data={companyFilter}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View  >
                                <TextInputComponent placeholderStyle={{ paddingLeft: WIDTH * 0.35 }} placeholder={item.title} text={item.text} />
                            </View>
                        } />
                             <View style={{ flexDirection: "row", marginLeft: WIDTH * 0.30 }} >
                            <Text style={{ fontSize: 13, marginLeft: WIDTH * 0.08 }} >View most uses number</Text>
                            <View style={{ height: HEIGHT * 0.018, borderWidth: 1, width: WIDTH * 0.04, marginLeft: WIDTH * 0.08, borderColor: colors.grey }} >
                            </View>
                        </View>
                        </View>
                   
                        <ButtonComponent navigation={() => navigation.navigate("Companiesscreen")} style={{ marginTop: HEIGHT * 0.49, height: HEIGHT * 0.08 }} titleStyle={{ fontSize: 13, color: "black" }} title="View jewlery" />
            </MainContainer>
    </View>
  )
}

export default CompaniesFilterScreen