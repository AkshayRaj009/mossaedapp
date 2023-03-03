import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'

import { rightBackArrow, firstProperty, crossIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carlistData, property } from "../constants/FlatListArray"
import CarListComponent from '../component/CarListComponent'
import MainContainer from '../component/MainContainer'

const PropertyScreen = ({ navigation }) => {
    const slideshow = (type) => {
        switch (type) {
            case "first":
                return <View>
                    <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={firstProperty} />
                    <View style={{ alignItems: "center" }} >
                    </View>
                    <View style={{ height: HEIGHT * 0.36 }}>
                        <FlatList
                            style={{}}
                            data={carlistData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <CarListComponent color={item.color} {...item} />
                            } />
                        <View style={{ marginHorizontal: WIDTH * 0.05, marginBottom: HEIGHT * 0.03 }} >
                            <Text style={{ marginBottom: HEIGHT * 0.02, color: colors.lightGrey, fontSize: 20 }} >Another details</Text>
                            <Text style={{ color: colors.grey, fontSize: 20 }} >This text is an example of a text that can be replaced in the same space</Text>
                        </View>
                    </View>
                </View>
            case "second":
                return <View>
                    <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={firstProperty} />
                    <View style={{ alignItems: "center" }} >
                    </View>
                    <View style={{ height: HEIGHT * 0.36 }}>
                        <FlatList
                            style={{}}
                            data={carlistData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <CarListComponent color={item.color} {...item} />
                            } />
                        <View style={{ marginHorizontal: WIDTH * 0.05, marginBottom: HEIGHT * 0.03 }} >
                            <Text style={{ marginBottom: HEIGHT * 0.02, color: colors.lightGrey, fontSize: 20 }} >Another details</Text>
                            <Text style={{ color: colors.grey, fontSize: 20 }} >This text is an example of a text that can be replaced in the same space</Text>
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
                    data={property}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <View style={{ width: WIDTH }}>
                        {slideshow(item.case)}
                    </View>
                    } />
            </MainContainer>
        </View>
    )
}

export default PropertyScreen