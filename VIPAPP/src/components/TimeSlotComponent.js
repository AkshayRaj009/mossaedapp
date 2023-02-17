import React from 'react'
import { View, Text, Pressable, FlatList, SafeAreaView, Image } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { headerRightLogo, LeftArrow, filterImage, Calender } from '../assests';

const TimeSlotComponent = (props) => {
    const{style1,time,timeStyle,style2}=props
    return (
        <View>
            <View style={[{ marginTop: 26, marginHorizontal: 15, flexDirection: "row" },style1]}>
                <View style={[{ position: "absolute", top: 5, borderWidth: 1, padding: 8, backgroundColor: "#0E1114",borderColor:"#0FC1A1",borderRadius:4 },style2]}>
                    <Image  source={Calender} />
                </View>
                <Text style={{ color: "#0FC1A1", marginHorizontal: HEIGHT * 0.06, marginVertical: 3, fontSize: 13 }}>23, DECEMBER,2020</Text>
            </View>
            <Text style={[{ color: "#fff", marginHorizontal: HEIGHT * 0.06, fontSize: 12, marginTop: 0 },timeStyle]}>{time}</Text>
        </View>
    )
}

export default TimeSlotComponent;