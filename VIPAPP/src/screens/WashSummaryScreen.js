import React,{useState} from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Modal, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, mapImage, badriPulling, buttonLeftArrow, buttonRightArrow } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import BadriComponent from '../components/BadriComponent';
import TimeSlotComponent from '../components/TimeSlotComponent';
import PickupLocationComponent from "../components/PickupLocationComponent"
import { bookedPayments } from "../constants/FlatlistArray"
import ButtonComponent from '../components/ButtonComponent';
import ModalComponent from '../components/ModalComponent';

const WashSummaryScreen = ({ navigation }) => {
    const [ModalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "#0FC1A1" }}>
            <View style={{ backgroundColor: "black", height: HEIGHT * 0.92, borderBottomLeftRadius: 13, borderBottomRightRadius: 13 }}>
                <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.31, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, }}>
                    <SafeAreaView>
                        <View style={{ marginTop: 7, marginHorizontal: 20 }}>
                            <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="SUMMARY" />
                            <BadriComponent Title="BADRI CLEANUPS" image={badriPulling} text="4X6 MCABANA" />
                        </View>
                        <View style={{ marginTop: 0 }}>
                            <TimeSlotComponent  time="09:00am" timeStyle={{ color: "grey", fontSize: 13, marginHorizontal: HEIGHT * 0.08 }} />
                        </View>
                        <View style={{ marginTop: 35, marginHorizontal: 20 }}>
                            <Text style={{ color: "#fff", fontSize: 20 }} >ENTER LOCATION</Text>
                        </View>
                        <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.34, marginHorizontal: 27, alignItems: "center", justifyContent: "center", marginTop: 12, borderRadius: 10, }}>
                            <Image style={{}} source={mapImage} />
                            <PickupLocationComponent style1={{ marginHorizontal: 3, marginTop: -5 }} text1={{ color: "grey" }} text2={{ color: "grey" }} text3={{ color: "grey" }} />
                        </View>
                        <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.20, borderTopLeftRadius: 12, borderTopRightRadius: 12, borderBottomLeftRadius: 13, borderBottomRightRadius: 13, marginTop: 20 }}>
                            <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>PAYMENTS</Text>
                                <FlatList
                                    data={bookedPayments}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) =>
                                        <>
                                            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                                                <Text style={{ color: "grey", fontSize: 18 }}>{item.title}</Text>
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ color: "grey", fontSize: 17 }}>{item.number}</Text>
                                                    <Text style={{ color: "grey", marginHorizontal: 4, fontSize: 19 }}>{item.qar}</Text>
                                                </View>
                                            </View>

                                        </>
                                    }
                                />
                            </View>
                            <View style={{marginHorizontal:20,flexDirection:"row", justifyContent: "space-between",marginTop:20,alignItems:"center"}}>
                                <Text Text style={{ color: "#fff", fontSize: 20,fontWeight:"bold" }}>Total</Text>
                                <View style={{flexDirection:"row", justifyContent: "space-between",alignItems:"center"}}>
                                <Text Text style={{ color: "#0FC1A1", fontSize: 28,fontWeight:"bold" }}>250</Text>
                                <Text Text style={{ color: "#0FC1A1", fontSize: 13,marginHorizontal:10 }}>QAR</Text>
                                </View>
                            </View>
                        </View>
                        <View>

                        </View>
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
            <View style={{ marginTop: 12 }}>
                <ButtonComponent  navigation={() => setModalVisible(true)} buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="PROCEED TO PAYMENT" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow}  />
            </View>
        </View>

    )
}

export default WashSummaryScreen