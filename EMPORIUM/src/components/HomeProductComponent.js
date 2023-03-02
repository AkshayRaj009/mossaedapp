import React from 'react'
import { View, Text,  Pressable, Image } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import {  whiteHeart, } from "../assests/index"

const HomeProductComponent = (props) => {
    const { image, like, title, text, navigation } = props
    return (
        <Pressable onPress={navigation}>
            <View style={{ backgroundColor: "#fff", height: Platform.OS === 'ios' ? 183 : 189, marginHorizontal: 2, width: WIDTH * 0.295, marginHorizontal: WIDTH * 0.03 }} >
                <View style={{alignItems:"center",marginTop:HEIGHT*0.003}} >
                    <Image source={image} /> 
                </View>
                <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.6 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962", position: "absolute", right: HEIGHT * 0.0099, bottom: Platform.OS === 'ios' ? 38 : 41, }]} >
                        <Image source={whiteHeart} />
                </View>
                <Text style={{ paddingTop: HEIGHT * 0.01, paddingHorizontal: 8, fontWeight: '600' }} >{title}</Text>
                <Text style={{ paddingHorizontal: 8, paddingTop: HEIGHT * 0.00, color: "#B89962", fontSize: 12 }}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default HomeProductComponent