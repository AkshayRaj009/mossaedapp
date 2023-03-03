import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, BMWImage, bmwLogo } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carlistData, carCase } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import CarListComponent from '../component/CarListComponent'
import ButtonComponent from '../component/ButtonComponent'
import ModalComponent from '../component/ModalComponent'

const CarsListScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const { navigation } = props

    const slideshow = (type) => {
        switch (type) {
            case "SARA":
                return <View>
                        <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={BMWImage} />
                        <View style={{
                            alignItems: "center", marginTop: HEIGHT
                                * 0. - 33
                        }} >
                            <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.17, width: WIDTH * 0.17, borderRadius: WIDTH * 0.17 / 2, borderColor: "#B89962", borderWidth: 1, backgroundColor: colors.white }}>
                                <Image source={bmwLogo} />
                            </View>
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
            case "LANA":
                return  <View>
                        <Image style={{ width: WIDTH, marginTop: 0, zIndex: -1, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, height: HEIGHT * 0.44 }} source={BMWImage} />
                        <View style={{
                            alignItems: "center", marginTop: HEIGHT
                                * 0. - 33
                        }} >
                            <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.17, width: WIDTH * 0.17, borderRadius: WIDTH * 0.17 / 2, borderColor: "#B89962", borderWidth: 1, backgroundColor: colors.white }}>
                                <Image source={bmwLogo} />
                            </View>
                        </View>
                        <View style={{ height: HEIGHT * 0.36 }}>
                            <FlatList
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
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 20 }} title="Cars" image={drawerIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }}>
                <Pressable onPress={() => setModalVisible(false)}>
                    <FlatList
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={carCase}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <View style={{ width: WIDTH }}>
                            {slideshow(item.case)}
                        </View>
                        } />
                </Pressable>
                <ModalComponent
                    visible={modalVisible2}
                    onPress={() => setModalVisible2(false)}
                    button={true}
                >
                </ModalComponent>
                <ModalComponent
                    visible={modalVisible}
                    onPress={() => {
                        setModalVisible2(false)
                        setModalVisible(false)
                    }}
                    button={true}
                >
                </ModalComponent>
                <ButtonComponent navigation={() => setModalVisible(true)} style={{ marginTop: HEIGHT * 0. - 21, height: HEIGHT * 0.08 }} title="create an order" />
            </MainContainer>

        </View>
    )
}

export default CarsListScreen