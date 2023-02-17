import React, { useState } from 'react'
import { View, Text, FlatList, Image, ImageBackground } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import HeaderComponent from '../components/HeaderComponent'
import { LeftArrow, detailsCabana, fullScreen, call, email, buttonRightArrow, buttonLeftArrow } from '../assests';
import { cabanaFeatures } from "../constants/FlatlistArray"
import PickupLocationComponent from '../components/PickupLocationComponent';
import FamilyCabanaComponent from '../components/FamilyCabanaComponent';
import ButtonComponent from '../components/ButtonComponent';
import ModalComponent from '../components/ModalComponent';

const CabanaDetails = ({ navigation }) => {
    const [ModalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ backgroundColor: "#0FC1A1", flex: 1 }}  >
            <View>
                <ImageBackground style={{ height: HEIGHT * 0.44 }} source={detailsCabana} resizeMode="cover" >
                    <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} rightLogo={fullScreen} />
                </ImageBackground>
                <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.53, marginTop: -41, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                    <View style={{ backgroundColor: "black", height: HEIGHT * 0.16, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
                        <View style={{ marginHorizontal: 20, paddingTop: 30 }} >
                            <FamilyCabanaComponent />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 18, marginTop: 13 }} >
                        <Text style={{ color: "#fff", fontSize: 20 }} >FEATURES</Text>
                        <View style={{ width: WIDTH }} >
                            <FlatList
                                horizontal
                                data={cabanaFeatures}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ backgroundColor: "black", flexDirection: "row", height: HEIGHT * 0.05, width: WIDTH * 0.27, alignItems: "center", justifyContent: "center", marginHorizontal: 5, marginTop: 10 }} >
                                        <Image source={item.image} />
                                        <Text style={{ color: "#0FC1A1", marginLeft: 10 }} >(1){item.text}</Text>
                                    </View>
                                }
                            />
                            <View style={{ marginTop: 20 }} >
                                <Text style={{ color: "#fff", fontSize: 21 }} >LOCATION</Text>
                                <View style={{marginTop:5}} >
                                <PickupLocationComponent style2={{ marginTop: -25 }} />

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 23,marginTop:8 }}>
                        <Text style={{ color: "#FF5F00", fontSize: 18 }} >Al-Rayyan Company</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                            <View>
                                <Text style={{ color: "#fff", fontSize: 15 }} >Al Mirqab Al Jadeed St,Doha</Text>
                                <Text style={{ color: "#fff", fontSize: 16 }}>Qatar</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ borderWidth: 1, borderColor: "#0FC1A1", padding: 5, justifyContent: "center", height: HEIGHT * 0.03, backgroundColor: "#0E1114", borderRadius: 2 }}>
                                    <Image source={email} />
                                </View>
                                <View style={{ borderWidth: 1, borderColor: "#0FC1A1", padding: 5, justifyContent: "center", height: HEIGHT * 0.03, backgroundColor: "#0E1114", borderRadius: 2, marginLeft: 9 }}>
                                    <Image source={call} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <ModalComponent
                style2={{ height: HEIGHT * 0.45, width: WIDTH * 0.90, marginTop: 11, borderRadius: 13 }}
                visible={ModalVisible}
                onPress={() => setModalVisible(false)}
                path="HomeScreen"
                buttonTitile="MY BUILDS"
                title="REQUEST DONE SUCCESFULLY"
                text=" Thank you. The lease has been sucessful.You can follow the order from the My Rentals page "
                noStyle={{ backgroundColor: 0 }}
                yesStyle={{ backgroundColor: 0 }}
                buttonStatus
                imagestatus
            >
            </ModalComponent>
            <View style={{marginTop:0}} >
                <ButtonComponent buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="BAY NOW" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} navigation={() => {
                    setModalVisible(true)
                }} />
            </View>

        </View>
    )
}

export default CabanaDetails