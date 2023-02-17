import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow, whiteHeart } from "../assests/index"
import { addressData, homeProduct, orderDetails, saraData, saraDetails } from '../constants/FlatlistArray'

const SaraDetailsComponent = () => {
    return (
        <View>
            <View style={{ marginTop: HEIGHT * 0.0, marginHorizontal: HEIGHT * 0.02 }} >
                <Text style={{ fontSize: 18, fontWeight: "600" }} >Order Status</Text>
                <View style={{ marginTop: HEIGHT * 0.07 }} >
                    <FlatList
                        data={orderDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                <Text style={{ fontSize: 18, fontWeight: "600" }} >{item.title}</Text>
                                <Text style={{}} >{item.total}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: HEIGHT * 0.01 }}>
                                <View>
                                    <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.subtotal}</Text>
                                    <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.shipping}</Text>
                                    <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.total}</Text>
                                </View>
                                <View>
                                    <View style={{ paddingLeft: HEIGHT * 0.16 }} >
                                        <Text style={{  }} >{item.item}</Text>
                                        <Text style={{ paddingLeft: 20 }} >{item.qar}</Text>
                                    </View>
                                    <Text style={{}} >{item.card}</Text>
                                </View>
                            </View>
                        </View>
                        }
                    />
                </View>
            </View>
            {/* <FlatList
            horizontal
                data={homeProduct}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={{ backgroundColor: "#FFFFFF", paddingLeft: 4, paddingTop: 3, marginHorizontal: 9 }} >
                        <Image source={item.image} />
                        <View style={{ position: "absolute", right: 9, bottom: 34, backgroundColor: "#B89962", padding: 6, borderRadius: 15 }}>
                            <Image source={item.like} />
                        </View>
                        <Text style={{ paddingTop: 7, paddingHorizontal: 8, fontWeight: '500' }} >{item.title}</Text>
                        <Text style={{ paddingHorizontal: 8, paddingTop: 2, color: "#B89962", fontSize: 12 }}>{item.text}</Text>
                    </View>
                } /> */}
        </View>
    )
}

export default SaraDetailsComponent