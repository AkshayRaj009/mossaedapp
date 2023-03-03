import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { rightBackArrow, landsImage, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carlistData, land } from "../constants/FlatListArray"
import ButtonComponent from '../component/ButtonComponent'
import CarListComponent from '../component/CarListComponent'
import MainContainer from '../component/MainContainer'


const LandScreen = ({ navigation }) => {

    const slideshow = (type) => {
        switch (type) {
            case "first":
                return <View style={{}} >
                    <View>
                        <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={landsImage} />
                        <View style={{
                            alignItems: "center", marginTop: HEIGHT
                                * 0
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
            case "second":
                return <View style={{}} >
                    <View>
                        <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={landsImage} />
                        <View style={{
                            alignItems: "center",
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
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 14 }} title="Property" image={crossIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
                <FlatList
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={land}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <View style={{ width: WIDTH }}>
                        {slideshow(item.case)}
                    </View>
                    } />
            </MainContainer>
        </View>
    )
}

export default LandScreen