import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, drawerIcon, whiteTick2,saleOfferImage } from "../assests/index"
import { checkoutDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import PaymentProgress from '../components/PaymentProgress'
import OrderDetailsComponent from '../components/OrderDetailsComponent'
import ButtonComponent from '../components/ButtonComponent'

const CheckOutScreen = ({ navigation }) => {
    const [color, setShowColor] = useState(0)
    return (
        <View style={{ backgroundColor: "#FFFFFF25", height: HEIGHT }} >
            <SafeAreaView >
                <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="CHECKOUT" image={drawerIcon} />
                <View  >
                    <PaymentProgress />
                </View>
                <View style={{ marginTop: HEIGHT * 0.03 }} >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={checkoutDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <Pressable onPress={() => setShowColor(index)} >
                                <View style={{ backgroundColor: "#ffffff60", marginHorizontal: 20, height: HEIGHT * 0.19, marginTop: 10 }} >
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: HEIGHT * 0.02, marginTop: HEIGHT * 0.02 }}>
                                        <Text style={{}} >{item.name}</Text>

                                        <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.07, width: WIDTH * 0.07, borderRadius: WIDTH * 0.7 / 2, borderColor: "#DFE1DE", borderWidth: 2, backgroundColor: color === index ? "#B89962" : "#ffffff60" }} >
                                            <Image source={whiteTick2} />
                                        </View>
                                    </View>
                                    <View style={{ borderWidth: 1, marginHorizontal: HEIGHT * 0.02, borderColor: "#DFE1DE", marginTop: HEIGHT * 0.01 }} />
                                    <View style={{ marginHorizontal: HEIGHT * 0.02 }} >
                                        <Text style={{ marginTop: HEIGHT * 0.03 }} >{item.num}</Text>
                                        <OrderDetailsComponent style1={{ marginTop: HEIGHT * 0.0 - 9 }} addresStyle={{ fontSize: 13 }} addresStyle1={{ fontSize: 13 }} addresStyle2={{ fontSize: 13 }} adress="5Th Capital MAll" adrres1="55 Al Remal Street" address2="Doha,Qatar" />
                                    </View>
                                </View>
                            </Pressable>
                        } />
                </View>
                <View style={{ borderWidth: 1.5, borderStyle: "dashed", borderColor: "#B89962", padding: 12, marginHorizontal: WIDTH * 0.09, marginTop: HEIGHT * 0.02 }} >
                    <Text style={{ color: "#B89962", fontSize: 22, textAlign: "center" }} >+ADD NEW ADDRESS</Text>
                </View>
                <View style={{ marginTop: HEIGHT * 0.138 }} >
                    <ButtonComponent navigation={() => navigation.navigate("CheckOutPaymentScreen")} title="NEXT" />
                    <Pressable onPress={() => navigation.goBack()} >
                        <Text style={{ color: "#A8A398", textAlign: "center", marginTop: HEIGHT * 0.01 }} >Cancel</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default CheckOutScreen 