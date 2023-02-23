import React, { useRef, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import {whiteTick3 } from "../assests/index"

import { HEIGHT, WIDTH } from '../constants/Dimensions'

const PaymentProgress = (props) => {
    const { borderColor,color,textStyle,summaryStyle,style3,border,image } = props
    return (
        <View>
            <View style={{ marginHorizontal: HEIGHT * 0.04, marginTop: HEIGHT * 0.04 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.05, width: WIDTH * 0.05, borderRadius: WIDTH * 0.5 / 2, borderColor: "#B89962", borderWidth: 2 },style3]} >
                        <Image source={image} />
                    </View>
                    <View style={[{ borderWidth: 1, height: 1, width: WIDTH * 0.33, borderColor: "#DFE1DE" },borderColor]} />
                    <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.05, width: WIDTH * 0.05, borderRadius: WIDTH * 0.5 / 2, borderColor: "#DFE1DE", borderWidth: 2 },color]} >
                        <Image style={{}} source={image} />
                    </View>
                    <View style={[{ borderWidth: 1, height: 1, width: WIDTH * 0.33, borderColor: "#DFE1DE" },border]} />
                    <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.05, width: WIDTH * 0.05, borderRadius: WIDTH * 0.5 / 2, borderColor: "#DFE1DE", borderWidth: 2 }} />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: HEIGHT * 0.02,marginTop:HEIGHT*0.01 }}>
                <Text>ADDRESS</Text>
                <Text style={[{ color: "#A8A398" },textStyle]} >PAYMENT</Text>
                <Text style={[{ color: "#A8A398" },summaryStyle]}>SUMMARY</Text>
            </View>
        </View>
    )
}

export default PaymentProgress