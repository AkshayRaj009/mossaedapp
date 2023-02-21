import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { homeVendors, orderDetails } from '../constants/FlatlistArray'
import { useNavigation } from '@react-navigation/native'
const OrderDetailsComponent = (props) => {
    const { title, adress, adrres1, address2, num, qar, card, total, addresStyle, addresStyle1, addresStyle2, style1 } = props
    return (
        <View>
            <View style={{marginHorizontal:WIDTH*0.03}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ fontSize: 18, fontWeight: "600" }} >{title}</Text>
                    <Text>{total}</Text>
                </View>
                <View style={[{ flexDirection: "row", justifyContent: "space-between", marginTop: HEIGHT * 0.01 }, style1]}>
                    <View>
                        <Text style={[{ fontSize: 15, color: "#A8A398" }, addresStyle]} >{adress}</Text>
                        <Text style={[{ fontSize: 15, color: "#A8A398" }, addresStyle1]} >{adrres1}</Text>
                        <Text style={[{ fontSize: 15, color: "#A8A398" }, addresStyle2]} >{address2}</Text>
                    </View>
                    <View>
                        <View style={{ paddingLeft: HEIGHT * 0.04 }} >
                            <Text style={{ fontWeight: "600", fontSize: 18 }} >{num}</Text>
                            <Text style={{ paddingLeft: 20, fontWeight: "600" }} >{qar}</Text>
                        </View>
                        <Text style={{}} >{card}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default OrderDetailsComponent