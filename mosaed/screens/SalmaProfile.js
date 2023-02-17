import React, { useState } from 'react'
import { View, Text, Image, Pressable, Dimensions } from "react-native"
import { rightbackarrow, correct } from '../../mosaed/assets/Images/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderComponent from './HeaderComponent';
import LinearGradient from 'react-native-linear-gradient';
import ButtonScreen from './ButtonScreen';
import ModalComponent from './ModalComponent';
import InputComponent from './InputComponent';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SalmaProfile = (props) => {
    const [ModalVisible, setModalVisible] = useState(false)
    const [showcolor, setShowcolor] = useState(false)
    const navigation = useNavigation()
    const route = useRoute()

    console.log(WIDTH * 0.73);
    const { item } = route.params
    return (
        <>
            <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={['#1373DF', "#319FBB", '#2ECBAA']} style={{ position: "absolute", bottom: 570, right: -850, width: HEIGHT * 2.5, height: HEIGHT * 2.5, borderRadius: HEIGHT * 1.5 }}></LinearGradient>
            <View style={{ overflow: "hidden" }}>
                <HeaderComponent navigation={() => navigation.goBack()} leftlogo={rightbackarrow} title="Profile" />
                <View style={{ height: HEIGHT * 0.33, backgroundColor: "#fff", marginHorizontal: 20, borderRadius: 10, alignItems: "center", position: "absolute", bottom: HEIGHT * 0.37, width: WIDTH * 0.90 }}>
                    <View style={{ backgroundColor: "#fff", height: HEIGHT * 0.14, width: WIDTH * 0.32, borderRadius: 67, position: "absolute", bottom: HEIGHT * 0.24 }}>
                        <Image style={{ height: HEIGHT * 0.13, width: WIDTH * 0.30, borderRadius: 59, position: "absolute", top: 5, left: 4 }}
                            source={require("../assets/Images/firstnurseimage.png")}
                        />
                    </View>
                </View>
                <View style={{ marginTop: HEIGHT * 0.22 }}>
                    <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 3 }}>
                        <Pressable onPress={() => setShowcolor(!showcolor)} style={{ position: "absolute", top: -90, left: HEIGHT * 0.40 }} >
                            <Image source={showcolor ? require("../assets/Images/bookmarkgrey.png") : require("../assets/Images/pinksaveimgae.png")} />
                        </Pressable>
                        <Image style={{ marginHorizontal: 10 }} source={require("../assets/Images/smallnurseimage.png")} />
                        <Text style={{ fontSize: 16 }}>{item.designation}</Text>
                    </View>
                    <View style={{ marginHorizontal: 50, marginTop: 23, borderColor: "#f5f5f5", width: WIDTH * 0.75, borderWidth: 1 }} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ color: "grey", fontSize: 10, marginHorizontal: 20 }}>Hourly rate</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginTop: 5, marginHorizontal: 20, fontSize: 16 }}>{item.rate}</Text>
                            <Text style={{ fontSize: 10, marginTop: 10 }}>{item.country}</Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: HEIGHT * 0.12 }}>
                        <Text style={{ color: "grey", fontSize: 10 }}>Nationality</Text>
                        <Text style={{ marginTop: 5 }}>Philippine</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 40 }}>
                    <Text style={{ marginTop: 20, fontSize: 10, color: "grey" }}>Company Name</Text>
                    <Text style={{ marginTop: 5, fontSize: 16 }}>{item.company}</Text>
                </View>
                <View>
                    <View style={{ height: HEIGHT * 0.34, backgroundColor: "#fff", marginHorizontal: 20, borderRadius: 8, marginTop: 43 }}>
                        <Text style={{ marginHorizontal: 20, fontSize: 9, color: "grey", marginTop: 15 }}>About me</Text>
                        <Text style={{ marginHorizontal: 27, fontSize: 14, color: "#363636" }}>{item.description}</Text>
                    </View>
                    <ModalComponent
                        style1={{ height: HEIGHT * 0.50, width: WIDTH * 0.90, marginTop: 11, borderRadius: 13 }}
                        logo={correct}
                        title="Hire Salma Saedd"
                        visible={ModalVisible}
                        onPress={() => setModalVisible(false)}
                        button={true}
                    >
                        <InputComponent textstyle={{ width: WIDTH * 0.72, height: HEIGHT * 0.11, marginTop: -8 }}
                            placeholder="Enter Message"
                            style2={{ paddingLeft: 15, marginTop: -10, fontSize: 13 }}
                        />
                    </ModalComponent>
                </View>
            </View>
            <View style={{ backgroundColor: "#fff", width: WIDTH, height: HEIGHT * 0.11, position: "absolute", bottom: 5, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <ButtonScreen style1={{ marginTop: 20 }} navigation={() => setModalVisible(true)} title="Hire me" />
            </View>

        </>
    )
}

export default SalmaProfile