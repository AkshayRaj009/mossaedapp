import React from 'react'
import { View, Text, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
const FamilyCabanaComponent = () => {
    return (
        <View>
            <Text style={{ color: "#fff", fontSize: 21 }}>FAMILY CABANA</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "#FF5F00" }} >AL-Rayyan Co</Text>
                <Text style={{ color: "#fff", fontSize: 18 }} >6X4 m2</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                <Text style={{ color: "#fff" }}>Starting Price</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ color: "#0FC1A1", fontWeight: "bold", fontSize: 20 }}>250</Text>
                    <Text style={{ color: "#0FC1A1", fontSize: 10, marginLeft: 10 }}>QAR</Text>
                </View>
            </View>
        </View>
    )
}

export default FamilyCabanaComponent