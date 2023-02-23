import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable, Modal } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, drawerIcon, whiteTick3, whiteTick2 } from "../assests/index"
import { cardDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import PaymentProgress from '../components/PaymentProgress'
import ButtonComponent from '../components/ButtonComponent'

const CardDetailsScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [color, setShowcolor] = useState(0)
    const array = Array.from({ length: 4 }, (x, i) => i)
    console.log("ar==>>", array);
    return (
        <Pressable style={{ height: HEIGHT }} >
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="CHECKOUT" image={drawerIcon} />
                <View style={{ marginTop: HEIGHT * 0.01 }} >
                    <PaymentProgress image={whiteTick3} style3={{ backgroundColor: "#B89962" }} borderColor={{ borderColor: "#B89962", borderWidth: 1.3 }} color={{ borderColor: "#B89962" }} textStyle={{ color: "black" }} />
                </View>
                <View style={{ marginTop: HEIGHT * 0.02 }} >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={cardDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <Pressable onPress={() => setShowcolor(index)} >
                                <View style={{ backgroundColor: "#fff", marginHorizontal: WIDTH * 0.06, flex:1, marginTop: HEIGHT * 0.02 }}  >
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: WIDTH * 0.02 }}>
                                        <Image source={item.image} />
                                        <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.5 / 2, borderColor: "#DFE1DE", borderWidth: 1, backgroundColor: color === index ? "#B89962" : "#fff" }} >
                                            <Image source={whiteTick2} />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginHorizontal: HEIGHT * 0.03, marginTop: HEIGHT * 0.02 }}>
                                        <FlatList
                                            horizontal
                                            data={array}
                                            renderItem={({ }) =>
                                                <View style={{ height: 7, width: 7, backgroundColor: 'black', marginLeft: 5, borderRadius: WIDTH }} />} />
                                        <FlatList
                                            horizontal
                                            data={array} renderItem={({ }) => <View style={{ height: 7, width: 7, backgroundColor: 'black', marginLeft: 5, borderRadius: WIDTH }} />} />
                                        <FlatList
                                            horizontal
                                            data={array}
                                            renderItem={({ }) => <View style={{ height: 7, width: 7, backgroundColor: 'black', marginLeft: 5, borderRadius: WIDTH }} />} />
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: HEIGHT * 0.02, marginTop: HEIGHT * 0.05, alignItems: "center" }} >
                                        <Text style={{ fontSize: 10, color: "#9A9A9A" }}  >{item.title}</Text>
                                        <Text style={{ fontSize: 10, color: "#9A9A9A" }}>{item.good}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: HEIGHT * 0.02, alignItems: "center" }} >
                                        <Text style={{ fontSize: 17 }} >{item.name}</Text>
                                        <Text>{item.num}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        }
                    />
                </View>
                <View style={{ backgroundColor: "#fff", marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.06, height: HEIGHT * 0.09, justifyContent: "center" }} >
                    <Text style={{ fontSize: 17, paddingLeft: 20 }} >Cash On Delivery</Text>
                </View>
                <View style={{ borderWidth: 1.5, borderStyle: "dashed", borderColor: "#B89962", padding: 12, marginHorizontal: WIDTH * 0.09, marginTop: HEIGHT * 0.02 }} >
                    <Text style={{ color: "#B89962", fontSize: 22, textAlign: "center" }} >+ADD NEW CARD</Text>
                </View>
                <View >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'grey',
                        }}>
                            <View style={{
                                marginHorizontal: WIDTH * 0.05,
                                height: HEIGHT * 0.29,
                                backgroundColor: 'white',
                                shadowColor: '#000',
                                padding: 36,
                                alignItems: 'center', justifyContent: "center"
                            }}>
                                <Text style={{ textAlign: "center", marginHorizontal: WIDTH * 0.05 }}> Your orderhas been sucessfully completed Thank you</Text>
                                <Pressable
                                    style={{ backgroundColor: "#B89962", padding: 16, width: WIDTH * 0.4, marginTop: HEIGHT * 0.02 }}
                                    onPress={() => navigation.navigate
                                        ("HomeScreen")}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>OK</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>

                </View>
                <View style={{ marginTop: HEIGHT * 0.02 }} >
                    <ButtonComponent navigation={() => setModalVisible(true)} title="NEXT" />
                    <Pressable onPress={() => navigation.goBack()} >
                        <Text style={{ color: "#A8A398", textAlign: "center", marginTop: HEIGHT * 0.01 }} >Cancel</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </Pressable>
    )
}

export default CardDetailsScreen