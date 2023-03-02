import { View, Text, Image } from 'react-native'
import React from 'react'

import { rightArrow } from "../assests/index"
import { WIDTH } from '../constants/Dimensions'

const HeaderComponent = (props) => {
    const { title, image,leftLogo,titleStyle } = props
    return (
        <View>
            <View style={{ flexDirection: "row",justifyContent:"space-between",alignItems:"center",marginHorizontal:WIDTH*0.04 }} >
                <Image source={leftLogo} />
                <Text style={[{textAlign:"center",fontSize:25},titleStyle]} >{title}</Text>
                <Image source={image} />
            </View>

        </View>
    )
}

export default HeaderComponent