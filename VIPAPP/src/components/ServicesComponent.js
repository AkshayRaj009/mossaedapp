import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { akshay, rentmask, rentvip } from '../assests';


const ServicesComponent = (props) => {
    const { images, titles, onPressFn, bordercolor, icon, color, margintop } = props
    return (

        <View style={{width:WIDTH*0.45,marginHorizontal:10}} >

            <Pressable onPress={() => {
                onPressFn()
            }}>

                <View style={{ borderColor: bordercolor, backgroundColor: "#181D23", height: HEIGHT * 0.28, width: WIDTH * 0.44, borderWidth: 3, borderRadius: 8 }}>
                    <View style={{ borderWidth: 1, borderColor: "#0FC1A1", width: WIDTH * 0.06, height: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, marginHorizontal: 8, marginTop: 7, backgroundColor: bordercolor, alignItems: "center", justifyContent: "center", }} >
                        {icon}
                    </View>
                    <Image style={{ position: "absolute", right: 0 }} source={rentvip} />
                    <View style={{ alignItems: "center", marginTop: margintop }}>
                        <Image source={images} />
                    </View>
                    <Text style={{ color: color, marginTop: 55, fontSize: 24, textAlign: "center" }}>{titles}</Text>
                </View>
                <Image style={{ position: "absolute", bottom: 0, left: 0 }} source={rentmask} />
            </Pressable>
        </View>


    )
}

export default ServicesComponent