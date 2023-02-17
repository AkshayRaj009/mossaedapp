import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Modal, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { cleanUPS } from "../assests"
import TimeSlotComponent from './TimeSlotComponent';

const BadriComponent = (props) => {
    const{image,text,number,Qtext,Title}=props
    return (
        <View style={{ marginTop: 23 }}>
            <View style={{ flexDirection: "row",alignItems:"center" }}>
                <Image source={image} />
                <View style={{ marginHorizontal: 18, marginTop: 7 }}>
                    <Text style={{ color: "#fff", fontSize: 21, marginBottom: 3 }}>{Title}</Text>
                    <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                        <Text style={{ color: "#FF5F00"}}>{text}</Text>
                        <View style={{ flexDirection: "row",marginHorizontal:HEIGHT*0.12,alignItems:"center",marginTop:-6  }}>
                            <Text style={{ color: "#0FC1A1",fontSize:22,fontWeight:"bold" }}>{number}</Text>
                            <Text style={{ color: "#0FC1A1",marginTop:6,fontSize:10,marginHorizontal:7,fontWeight:"bold" }}>{Qtext}</Text>
                        </View>
                    </View>
                </View>
            </View>
   
        </View>
    )
}

export default BadriComponent