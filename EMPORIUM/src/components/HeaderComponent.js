import { View, Text, Image } from 'react-native'
import React from 'react'
import { backArrow } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useNavigation } from '@react-navigation/native'


const HeaderComponent = (props) => {
    const navigation= useNavigation()
    const { drawernavigation, image,title,image2,color } = props

    return (
        <View style={{ marginHorizontal: WIDTH*0.06, marginTop: HEIGHT * 0.02 }}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}} >
                <Pressable onPress={drawernavigation} >
                    <Image source={image} />
                </Pressable>
                <Text style={[{fontSize:18,marginTop:-5},color]} >{title}</Text>
                <Pressable onPress={()=>navigation.navigate("NotificationScreen")} >
                <Image style={{marginTop:-4}} source={image2} />
                </Pressable>
            </View>
        </View>
    )
}

export default HeaderComponent