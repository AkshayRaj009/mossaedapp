import { View, Text, Image } from 'react-native'
import React from 'react'
import { backArrow } from "../assests/index"
import { HEIGHT } from '../constants/Dimensions'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useNavigation } from '@react-navigation/native'


const HeaderComponent = (props) => {
    const navigation= useNavigation()
    const { drawernavigation, image,title,image2,color } = props

    return (
        <View style={{ marginHorizontal: 20, marginTop: HEIGHT * 0.02 }}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}} >
                <Pressable onPress={drawernavigation} >
                    <Image source={image} />
                </Pressable>
                <Text style={[{fontSize:18},color]} >{title}</Text>
                <Pressable onPress={()=>navigation.navigate("NotificationScreen")} >
                <Image source={image2} />

                </Pressable>
            </View>
        </View>
    )
}

export default HeaderComponent