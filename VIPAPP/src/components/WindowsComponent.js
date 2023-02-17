import React from 'react'
import { View, Text } from 'react-native'
import { } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
const WindowsComponent = (props) => {
    const { text, title,stye1,titleStyle } = props
    return (

        <View style={[{ backgroundColor: "#0E1114", height: HEIGHT * 0.09, marginHorizontal: 20, borderRadius: 6 },stye1]} >
            <View style={{ flexDirection: "row", justifyContent: "space-between", }} >
                <View style={{ marginTop: 12, marginHorizontal: 5 }}>
                    <Text style={[{ color: "#ffff", fontSize: 21, paddingLeft: 10 },titleStyle]} >{title}</Text>
                    <Text style={{ color: "#ffff", fontSize: 15, marginTop: 8, color: "#0FC1A1", marginHorizontal: 10 }} >{text}</Text>
                </View>
                <View style={{ marginTop: 15 }} >
                    <View style={{ borderWidth: 1, borderColor: "#0FC1A1", width: WIDTH * 0.06, height: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, marginHorizontal: 8, marginTop: 7, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default WindowsComponent