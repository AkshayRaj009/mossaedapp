import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { backArrow } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { useNavigation } from '@react-navigation/native'


const HeaderComponent = (props) => {
    const navigation = useNavigation()
    const { drawernavigation, image, title, image2, color } = props

    return (
        <View style={{ marginHorizontal: WIDTH * 0.06, marginTop: HEIGHT * 0.02 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                <Pressable style={{ height: HEIGHT * 0.03, alignItems: "center", justifyContent: "center", width: WIDTH * 0.08 }} onPress={drawernavigation} >
                    <Image source={image} />
                </Pressable>
                <Text style={[{ fontSize: 18,color:"#313131" }, color]} >{title}</Text>
                <Pressable style={{ height: HEIGHT * 0.03, alignItems: "center", justifyContent: "center", width: WIDTH * 0.08 }} onPress={() => navigation.navigate("NotificationScreen")} >
                    <Image style={{ marginTop: -4 }} source={image2} />
                </Pressable>
            </View>
        </View>
    )
}

export default HeaderComponent