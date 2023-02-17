import React from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native'
import { LeftArrow, buttonRightArrow, buttonLeftArrow, cabanaSquare, customBathroom } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"

const CustomDataComponent = (props) => {
    const { title, text, style1, image, titleStyle, style2, style3 } = props
    return (
        <View style={[{ backgroundColor: "#0E1114", height: HEIGHT * 0.09, marginHorizontal: 20, borderRadius: 6 }, style1]} >
            <View style={[{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 13 }, style2]} >
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <Image source={image} />
                        <Text style={[{ color: "#ffff", fontSize: 21, paddingLeft: 20 }, titleStyle]} >{title}</Text>
                        <Text style={{ color: "#ffff", fontSize: 15, marginTop: 8, color: "#0FC1A1" }} >{text}</Text>
                </View>
                <View style={[{ marginTop: 15 }, style3]} >
                    <View style={{ borderWidth: 1, borderColor: "#0FC1A1", width: WIDTH * 0.06, height: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, marginHorizontal: 8, marginTop: 7, backgroundColor: "black", alignItems: "center", justifyContent: "center" }}>
                    </View>
                </View>

            </View>


        </View>
    )
}

export default CustomDataComponent