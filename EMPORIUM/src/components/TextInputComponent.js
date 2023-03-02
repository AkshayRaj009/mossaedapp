import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { HEIGHT } from '../constants/Dimensions'

const TextInputComponent = (props) => {
  const [input, setInput] = useState("")
  const { text, colors, secure } = props
  console.log("input",input)
  return (

    <View style={{ borderWidth: 1, borderColor: "#B89962", borderRadius: 2, height: HEIGHT * 0.076, marginHorizontal: 30 }}>
      <Text style={{ color: "#B89962", fontSize: 12, paddingTop: 10, paddingLeft: 10 }}>{text}</Text>
      <TextInput
      onChangeText={(text)=>setInput(text)}
        secureTextEntry={secure}
        autoFocus={true}
        style={{ paddingLeft: 22, paddingTop: HEIGHT * 0.0 - 1, color: "black" }} placeholderTextColor={"#0E1216"} />
    </View>
  )
}

export default TextInputComponent