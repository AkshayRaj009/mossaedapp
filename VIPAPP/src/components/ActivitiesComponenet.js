import React from 'react'
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { } from '../assests';
import TimeSlotComponent from './TimeSlotComponent';

const ActivitiesComponenet = (props) => {

    const { image, title, text, ConformText, numb,confirmStyle,color,textColor } = props
    return (
        <View>
            <View style={{ flexDirection: "row", }} >
                <Image source={image} />
                <View style={{ marginHorizontal: 17 }} >
                    <Text style={{ color: "#fff", fontSize: 18 }} >{title}</Text>
                    <Text style={{ color: "#FF5F00" }} >{text}</Text>
                </View>
            </View>
            <View style={{ paddingLeft: 60 }} >
                <TimeSlotComponent style1={{ marginTop: 0}} timeStyle={{ color: "grey", paddingLeft: 7 }} time="09:00 am | 10.00 am | 11:00 am" style2={{ borderWidth: 0, backgroundColor: 0 }} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30, marginHorizontal: 20 }} >
                <View style={[{ backgroundColor: color, width: WIDTH * 0.18, height: HEIGHT * 0.03, alignItems: "center", justifyContent: "center", borderRadius: 4 },confirmStyle]} >
                    <Text style={[{ color: textColor, fontSize: 12 },]} >{ConformText}</Text>
                </View>
                <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold",paddingRight:40 }} >{numb}</Text>
            </View>
        </View>

    )
}

export default ActivitiesComponenet






// if(scroll===0||scroll>0){
//     ScrollView(scroll)
// }else if(scroll===2||scroll<2){
//   backToScrollView(scroll)
// }