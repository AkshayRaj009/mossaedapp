import React, { useState } from 'react'
import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow } from '../assests';
import { CalendarData } from "../constants/FlatlistArray"
import { buttonRightArrow, buttonLeftArrow } from '../assests';
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';
import CalenderComponent from '../components/CalenderComponent';

const RentCalenderScreen = ({ navigation }) => {
    const [color, setColor] = useState()

    return (
        <View style={{ flex: 1, backgroundColor: "#0FC1A1", }}>
            <View style={{ height: HEIGHT * 0.88, backgroundColor: "#0E1114", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.30 }}>
                    <SafeAreaView style={{ marginTop: 5 }}>
                        <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="RENT" />
                        <CalenderComponent />
                        <View style={{ marginTop: HEIGHT * 0.06, marginHorizontal: 15 }}>
                            <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>Select Hours</Text>
                            <FlatList
                                numColumns={4}
                                data={CalendarData}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <>
                                        <Pressable onPress={() => setColor(index)} style={{ borderWidth: 1, borderColor: "#0FC1A1", padding: 10, borderRadius: 5, marginHorizontal: 7, marginVertical: 7, backgroundColor: color === index ? "#0FC1A1" : "#181D23" }}>
                                            <Text style={{ color: "#fff", fontSize: 12 }}>{item.number}</Text>
                                        </Pressable>
                                    </>
                                }
                            />
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.20 }}>
                            <ButtonComponent buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="SUBMIT" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} navigation={() => navigation.navigate("BeachScreen")} />
                        </View>
                    </SafeAreaView>
                </View>
            </View>
        </View>

    )
}

export default RentCalenderScreen