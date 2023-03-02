import { View, Text, Image } from 'react-native'
import React from 'react'

import { rightArrow } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const ButtonComponent = (props) => {
  const { onPress, style, title, navigation,titleStyle } = props
  return (
    <Pressable onPress={onPress} style={[{ backgroundColor: colors.Yellow, height: HEIGHT * 0.07, justifyContent: "center" }, style]} >
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.08, alignItems: "center" }} >
        <Image source={rightArrow} />
        <Pressable onPress={navigation} >
          <Text style={[{ color: colors.darkWhite, fontSize: 18 },titleStyle]} >{title}</Text>
        </Pressable>
      </View>
    </Pressable>
  )
}

export default ButtonComponent