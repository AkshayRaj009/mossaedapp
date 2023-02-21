import React, { useRef } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable,Image } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow, whiteHeart } from "../assests/index"
import { makeupData, makeupDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import SaraDetailsComponent from '../components/SaraDetailsComponent'
import GeneralDetailsComponent from '../components/GeneralDetailsComponent'

const HomeProductComponent = (props) => {
    const{image,like,title,text,navigation}=props
    return (
        <Pressable onPress={navigation}>
            <View style={{ backgroundColor: "#FFFFFF", paddingLeft: 4, paddingTop: 3, marginHorizontal: 9,height:HEIGHT*0.23 }} >
                <Image source={image} />
                <View style={{ position: "absolute", right: 9, bottom: 46, backgroundColor: "#B89962", padding: 5, borderRadius: 15 }}>
                    <Pressable >
                <Image source={like} />
                    </Pressable>
                </View>
                <Text style={{ paddingTop: HEIGHT*0.01, paddingHorizontal: 8, fontWeight: '600' }} >{title}</Text>
                <Text style={{ paddingHorizontal: 8, paddingTop: HEIGHT*0.00, color: "#B89962", fontSize: 12 }}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default HomeProductComponent