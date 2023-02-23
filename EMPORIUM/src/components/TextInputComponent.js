import React, { useState } from 'react'
import { View, Text ,TextInput} from 'react-native'
import { HEIGHT } from '../constants/Dimensions'


const TextInputComponent = (props) => {
  const { text,colors } = props
  return (
    
    <View>
     <View style={{ borderWidth: 1, borderColor:"#B89962", borderRadius: 2, height: HEIGHT * 0.076, marginHorizontal: 30 }}>
      <Text style={{ color: "#B89962", fontSize: 12, paddingTop: 10, paddingLeft: 10 }}>{text}</Text>
      <TextInput
        autoFocus={true}
        style={{ paddingLeft: 22,paddingTop:HEIGHT*0.0-1, color: "black"}} placeholderTextColor={"#0E1216"} />
    </View>
    </View>
  )
}

export default TextInputComponent