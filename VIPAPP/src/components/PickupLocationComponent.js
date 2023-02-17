import React from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, fullScreen, Backgroundsuperjet, StarImage, buttonRightArrow, greenLocation, akshay, buttonLeftArrow } from '../assests';

const PickupLocationComponent = (props) => {
    const { title, style1, text1, text2, text3, Title,height, style2, text,arrowStyle,style3 } = props
    return (
        <View>
            <View style={[{ flexDirection: "row", marginTop: 16 },style3]}>
                <View style={[{ padding: 5, justifyContent: "center", height: HEIGHT * 0.04, backgroundColor: "#0E1114", borderRadius: 4 },height]}>
                    <Image source={akshay} />
                </View>
                <View style={[{ marginHorizontal: 15, marginTop: -7 }, style1]}>
                    <Text style={[{ color: "#fff", fontSize: 20 }, text]}>{title}</Text>
                    <View style={[{}, style2]}>
                        <Text style={[{ color: "#fff", fontSize: 16 }, text1]}>Mirqab Mall</Text>
                        <Text style={[{ color: "#fff", fontSize: 16 }, text2]}>Al Mirqab Al Jadeed St,Doha</Text>
                        <Text style={[{ color: "#fff", fontSize: 16 }, text3]}>Qatar</Text>
                    </View>
                </View>
                <View style={[{ borderWidth: 1, borderColor: "#0FC1A1", padding: 5, justifyContent: "center", marginLeft: 45, height: HEIGHT * 0.03, backgroundColor: "#0E1114", borderRadius: 4 },arrowStyle]}>
                    <Image source={greenLocation} />
                </View>
            </View>
        </View>
    )
}

export default PickupLocationComponent