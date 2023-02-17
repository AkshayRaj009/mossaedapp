import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { HEIGHT } from '../constants/Dimensions'
import { bellIcon, blackBackArrow } from "../assests/index"
import { addressData } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'

const OrderStatusScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#FFFFFF250" }} >
            <SafeAreaView>
                <HeaderComponent backnavigation={() => navigation.goBack()} color={{ color: "#313131" }} image2={bellIcon} title="ORDER#1236569" image={blackBackArrow} />
                <Text style={{ textAlign: "center", fontSize: 11, color: "#313131" }} >21,July,2019</Text>
                <View style={{ marginTop: HEIGHT * 0.04 }} >
                    <FlatList
                        data={addressData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ marginHorizontal: 20 }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                    <Text style={{ fontSize: 18, fontWeight: "600" }} >{item.title}</Text>
                                    <Text style={{}} >{item.total}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: HEIGHT * 0.01 }}>
                                    <View>
                                        <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.adress}</Text>
                                        <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.adrres1}</Text>
                                        <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.address2}</Text>
                                    </View>
                                    <View>
                                        <View style={{ paddingLeft: 30 }} >
                                            <Text style={{ fontWeight: "600", fontSize: 18 }} >{item.num}</Text>
                                            <Text style={{ paddingLeft: 20, fontWeight: "600" }} >{item.qar}</Text>
                                        </View>
                                        <Text style={{}} >{item.card}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </View>
                <View>
                    <FlatList 
                  
                    />
                </View>
            </SafeAreaView>

        </View>
    )
}

export default OrderStatusScreen