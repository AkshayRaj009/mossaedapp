import React, { useState } from 'react'
import { View, Text, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import HeaderComponent from '../components/HeaderComponent'
import { headerRightLogo, LeftArrow, filterImage, washBottomMask, buttonRightArrow, buttonLeftArrow } from '../assests';
import { washingservice } from "../constants/FlatlistArray"
import ButtonComponent from '../components/ButtonComponent';
import Feather from 'react-native-vector-icons/Feather';

const BadriService = ({ navigation }) => {
    const [color, setColor] = useState(false)
    return (
        <View style={{ backgroundColor: "#0FC1A1", flex: 1 }} >
            <View style={{ backgroundColor: "black", height: HEIGHT * 0.93, borderBottomLeftRadius: 13, borderBottomRightRadius: 13 }}>
                <HeaderComponent leftLogo={LeftArrow} rightLogo={headerRightLogo} filter={filterImage} titleStyle={{ fontSize: 19 }} Title="SERVICES" drawerNavigation={() => navigation.goBack()} />
                <View style={{ marginTop: 2, height: HEIGHT * 0.81 }}>
                    <FlatList
                        data={washingservice}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <>
                                <Pressable onPress={() => setColor(index)}>
                                    <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.21, marginHorizontal: 20, borderRadius: 10, marginTop: 18, borderWidth: 3, borderColor: color === index ? "#0FC1A1" : "#0E1114" }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingTop: 20 }}>
                                            <View style={{ paddingBottom: HEIGHT * 0.08 }} >
                                                <Image source={item.image} />
                                            </View>
                                            <View style={{ paddingHorizontal: 14 }}>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ color: "#fff", fontSize: 20, paddingBottom: 4, }} >{item.title}</Text>
                                                    <Pressable onPress={() => setColor(index)} >
                                                        <View style={{ alignItems:"center",justifyContent:"center",height: WIDTH * 0.07, width: WIDTH * 0.07, borderRadius: WIDTH * 0.7 / 2, backgroundColor: color === index ? "#0FC1A1" : "#0E1114", borderColor: "#0FC1A1", borderWidth: 1, marginHorizontal: 67 }} >
                                                        {color === index ? <Feather name='check' size={20} color="#FFF" /> : ""}
                                                        </View>
                                                    </Pressable>
                                                </View>
                                                <Image style={{ paddingBottom: 8 }} source={item.star} />
                                                <Text style={{ color: "#fff", paddingTop: 8, fontSize: 16 }} >{item.text}</Text>
                                                <Text style={{ color: "#fff", paddingBottom: 8, fontSize: 16 }} >{item.text2}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 18 }}>
                                                    <Text style={{ color: "#0FC1A1", fontSize: 28 }}>250</Text>
                                                    <Text style={{ color: "#0FC1A1", marginHorizontal: 10, paddingTop: 10 }} >QAR</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Image style={{ position: "absolute", bottom: 0, right: -3 }} source={washBottomMask} />
                                    </View>
                                </Pressable>
                            </>
                        }
                    />
                </View>
            </View>
            <View style={{ marginTop: -2 }}>
                <ButtonComponent buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="CHOOSE SERVICE" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} navigation={() => navigation.navigate("WashSummaryScreen")} />
            </View>
        </View>

    )
}

export default BadriService