import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Modal, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, summarySpeedboad, greenPlus, buttonLeftArrow, buttonRightArrow, substarct } from '../assests';
import { Drinks, payments, DrinksBox } from "../constants/FlatlistArray"
import HeaderComponent from '../components/HeaderComponent';
import BechDetailsComponent from '../components/BechDetailsComponent';
import PickupLocationComponent from '../components/PickupLocationComponent';
import TimeSlotComponent from '../components/TimeSlotComponent';
import ButtonComponent from '../components/ButtonComponent';
import ModalComponent from '../components/ModalComponent';

const SummaryScreen = ({ navigation }) => {
    const [modalVisible1, setModalVisible1] = useState(false);
    const [ModalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ backgroundColor: "#0FC1A1", flex: 1 }}>
            <View style={{ height: HEIGHT * 0.93, backgroundColor: "black" }}>
                <View style={{ backgroundColor: "#181D23", borderBottomRightRadius: 20, borderBottomLeftRadius: 20, height: HEIGHT * 0.44 }}>
                    <SafeAreaView>
                        <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="SUMMARY" />
                        <View style={{ marginHorizontal: 8 }}>
                                <BechDetailsComponent style1={{}} image={summarySpeedboad} title="2021 FX SVHO" text="Yamaha" number="50" Qar="QAR/hour" numberStyle={{ marginLeft: HEIGHT * 0.09, }} textStyle={{ marginTop: -2 }} titlecolor={{ marginTop: 20 }} />
                            <Text style={{ color: "#fff", fontSize: 21, marginTop: -19 }} >PICK UP LOCATION</Text>
                            <PickupLocationComponent arrowStyle={{ marginTop: 20 }} height={{ marginTop: 15 }} style3={{ marginTop: 0 }} />
                            <View style={{ marginTop: 6 }}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>TIME SLOT</Text>
                                <TimeSlotComponent style2={{ borderWidth: 0 }} timeStyle={{ marginHorizontal: HEIGHT * 0.07 }} time="09:00am | 10.00am | 11.00 am" style1={{ marginTop: 10 }} />
                            </View>
                            <View style={{ marginTop: 22 }}>
                                <FlatList
                                    data={Drinks}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) =>
                                        <>
                                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25 }}>
                                                <View>
                                                    <Text style={{ color: "#fff", fontSize: 20 }}>{item.title}</Text>
                                                    <Text style={{ color: "#fff", color: "#0FC1A1", fontSize: 13 }}>{item.text}</Text>
                                                </View>
                                                <Pressable onPress={() => setModalVisible1(!modalVisible1)} style={{ alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#0FC1A1", width: WIDTH * 0.07, height: HEIGHT * 0.03, borderRadius: 3, marginTop: 17 }}>
                                                    <Image source={greenPlus} />
                                                </Pressable>
                                            </View>
                                        </>}
                                />
                            </View>
                            <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.30, marginTop: 26, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                    <Text style={{ color: "#fff", fontSize: 20 }}>PAYMENTS</Text>
                                    <FlatList
                                        data={payments}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) =>
                                            <>
                                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                    <Text style={{ color: "#fff", fontSize: 17, marginVertical: 8 }}>{item.title}</Text>
                                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                        <Text style={{ color: "#fff", marginHorizontal: 6, fontSize: 17 }}>{item.number}</Text>
                                                        <Text style={{ color: "#fff", fontSize: 17 }}>{item.Qar}</Text>
                                                    </View>
                                                </View>
                                            </>
                                        }
                                    />
                                    <View style={{ borderWidth: 1, borderColor: "black", marginTop: 13 }} />
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 13 }}>
                                        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>Total</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                            <Text style={{ color: "#fff", fontSize: 27, fontWeight: "bold", marginHorizontal: 10 }}>250</Text>
                                            <Text style={{ color: "#fff" }}>QAR</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible1}
                            onRequestClose={() => {
                                setModalVisible1(!modalVisible1);
                            }}>
                            <View style={{ backgroundColor: "#0FC1A1", marginTop: 55, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                                <View style={{ backgroundColor: "#181D23", borderRadius: 20, width: WIDTH, height: HEIGHT * 0.87, shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, }}>
                                    <View style={{ marginHorizontal: 20, marginTop: HEIGHT * 0.06 }}>
                                        <Text style={{ color: "#fff", fontSize: 19 }}>DRINKS BOX</Text>
                                        <View style={{ marginTop: 26 }}>
                                            <FlatList
                                                data={DrinksBox}
                                                keyExtractor={item => item.id}
                                                renderItem={({ item }) =>
                                                    <>

                                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 36, }}>
                                                            <View style={{ flexDirection: "row", }}>
                                                                <Image source={item.image} />
                                                                <View style={{ marginHorizontal: 20 }}>
                                                                    <Text style={{ color: "#ffff", fontSize: 17, }}>{item.title}</Text>
                                                                    <Text style={{ color: "#0FC1A1", fontSize: 18 }}>{item.text}</Text>
                                                                </View>
                                                            </View>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Image source={substarct} />
                                                                <Text style={{ color: "#0FC1A1", marginHorizontal: 10 }}>0</Text>
                                                                <Image source={greenPlus} />
                                                            </View>
                                                        </View>
                                                        {/* <View style={{ borderWidth: 1, borderColor: "#636B74", marginTop: 8 }} /> */}
                                                    </>
                                                }
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <ButtonComponent navigation={() => setModalVisible1(!modalVisible1)} title="DONE" />
                        </Modal>
                        <ModalComponent
                            style1={{ height: HEIGHT * 0.50, width: WIDTH * 0.90, marginTop: 11, borderRadius: 13 }}
                            visible={ModalVisible}
                            onPress={() => setModalVisible(false)}
                            path="HomeScreen"
                            buttonTitile="MY RENTALS"
                            title="REQUEST DONE SUCCESFULLY"
                            text=" Thank you. The lease has been sucessful.You cxan follow the order from the My Rentals page "
                            buttonStatus
                            imagestatus
                        >
                        </ModalComponent>
                    </SafeAreaView>
                </View>
            </View>
            <ButtonComponent navigation={() => setModalVisible(true)} LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} title="PROCEED TO PAYMENT" />
        </View>


    )
}

export default SummaryScreen