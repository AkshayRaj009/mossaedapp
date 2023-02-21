import React from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { orderDetails } from '../constants/FlatlistArray'
import OrderStausComponent from './OrderStausComponent'

const SaraDetailsComponent = (props) => {
    const { title, style1, status } = props
    return (

        <View>
            <View style={[{ marginTop: HEIGHT * 0.01, marginHorizontal: HEIGHT * 0.02 }]} >
                <Text style={{ fontSize: 18, fontWeight: "600" }} >{title}</Text>
                <View>
                    {status && <OrderStausComponent />}
                </View>

                <View style={{ marginTop: HEIGHT * 0.02 }} >
                    <FlatList
                        data={orderDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{}}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontWeight: "600", fontSize: 18, }}>{item.title}</Text>
                                    <Text style={{ paddingLeft: HEIGHT * 0.24 }}>{item.item}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: HEIGHT * 0.02 }}>
                                    <Text style={{ color: "#A8A398" }} >{item.subtotal}</Text>
                                    <Text>{item.qar}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: HEIGHT * 0.01 }}>
                                    <Text style={{ color: "#A8A398" }} >{item.shipping}</Text>
                                    <Text>{item.qar2}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: HEIGHT * 0.01 }}>
                                    <Text style={{ color: "#A8A398" }} >{item.total}</Text>
                                    <Text>{item.qar3}</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        </View>




    )
}

export default SaraDetailsComponent