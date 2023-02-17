import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, buttonRightArrow, buttonLeftArrow } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import CalenderComponent from '../components/CalenderComponent';
import { washingData } from "../constants/FlatlistArray"
import Feather from 'react-native-vector-icons/Feather';
import ButtonComponent from '../components/ButtonComponent';


const WashingScreen = ({ navigation }) => {
    const [color, setColor] = useState(false)
    return (
        <View style={{ backgroundColor: "#0FC1A1", flex: 1 }}>

            <View style={{ backgroundColor: "black", height: HEIGHT * 0.92, borderBottomRightRadius: 15, borderBottomLeftRadius: 15 }} >
                <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.31 }}>
                    <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="WASHING" />
                    <View style={{ marginTop: 31 }}>
                        <CalenderComponent />
                    </View>
                    <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                        <Text style={{ color: "#fff", fontSize: 19 }}>Select Time</Text>
                        <View style={{ height: HEIGHT * 0.55 }}>
                            <FlatList
                                data={washingData}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <>
                                    <Pressable onPress={() => setColor(index)}>

                                        <View style={{ backgroundColor: "#181D23", marginVertical: 12, height: HEIGHT * 0.11, borderRadius: 8,borderWidth:2,borderColor: color===index?  "#0FC1A1":"#0E1114"  }}>
                                            <View style={{ marginHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
                                                <View >
                                                    <Text style={{ color: "#fff", fontSize: 21, marginTop: 17 }}>{item.title}</Text>
                                                    <Text style={{ color: "#0FC1A1", marginTop: 14, fontSize: 16 }}>{item.Time}</Text>
                                                </View>
                                            
                                                    <View style={{ flexDirection: "row",alignItems:"center" }}>
                                                        <Pressable onPress={() => setColor(index)}>
                                                    
                                                            <View style={{alignItems:"center",justifyContent:"center", height: WIDTH * 0.07, width: WIDTH * 0.07, borderRadius: WIDTH * 0.7 / 2, backgroundColor: color === index ? "#0FC1A1" : "#0E1114", borderColor: "#0FC1A1", borderWidth: 1 }}>
                                                            {color === index ? <Feather name='check' size={20} color="#FFF" /> : ""}

                                                            </View>
                                                      
                                                           
                                                        </Pressable>
                                                    </View>
                                               
                                            </View>
                                        </View>
                                    </Pressable>

                                    </>
                                }
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 0 }}>
                <ButtonComponent buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="SUMBIT" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} navigation={() => navigation.navigate("WashingSizeScreen")} />
            </View>
        </View>
    )
}

export default WashingScreen