import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList } from 'react-native'

import { drawerIcon, rightBackArrow, vivre, goldenHores } from "../assests/index"
import CarListComponent from '../component/CarListComponent'
import MainContainer from '../component/MainContainer'
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carlistData, horse, } from "../constants/FlatListArray"

const GoldenHorseScreen = ({ navigation }) => {
    const slideshow = (type) => {
        switch (type) {
            case "horse":
                return <View style={{}} >
                    <View>
                        <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={goldenHores} />
                        <View style={{
                            alignItems: "center"
                        }} >
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
                </View>
            case "vivre":
                return <View style={{}} >
                    <View>
                        <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={vivre} />
                        <View style={{
                            alignItems: "center"
                        }} >
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
                </View>
        }
    }
    return (
        <View style={{ flex: 1 }} >
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Companies" image={drawerIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={horse}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <View style={{ width: WIDTH }}>
                        {slideshow(item.case)}
                    </View>
                    } />
            </MainContainer>
        </View>
    )
}

export default GoldenHorseScreen