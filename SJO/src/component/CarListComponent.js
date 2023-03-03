import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, TextInput, ImageBackground } from 'react-native'

import { drawerIcon, rightBackArrow, BMWImage, sendIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'

const CarListComponent = (props) => {
    const { title, num, image, style1, color, color2 } = props
    return (

        <View style={{ flex: 1 }}>
            <View style={{ alignItems: "flex-end", marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02 }} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    {/* <Image source={send} /> */}
                    <View>
                        <Text style={[{ fontSize: 17, paddingRight: WIDTH * 0.06, color: color2 }, style1]}>{title}</Text>
                        <Text style={{ paddingLeft: WIDTH * 0.07, color: color, fontSize: 15 }}>{num}</Text>
                    </View>
                    <Image source={image} />
                </View>
            </View>
            <View style={{ borderWidth: 1, borderColor: colors.borderGrey }} />


        </View>

    )
}

export default CarListComponent