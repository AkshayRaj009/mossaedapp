import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"

const InputComponent = (props) => {
  const { inputText, inputstyle, colors, placeholder,style2 } = props
  const [color, setColor] = useState(colors)
  const greencolor = () => {
    setColor("#0FC1A1")
  }
  const whitecolor = () => {
    setColor(colors)
  }

  return (
    <View style={[{ borderWidth: 1, borderColor: color, borderRadius: 6, height: HEIGHT * 0.07, marginHorizontal: 10 }, inputstyle]}>
      <Text style={{ color: "#0FC1A1", fontSize: 12, paddingTop: 10, paddingLeft: 15 }}>{inputText}</Text>
      <TextInput
        autoFocus={true}
        returnKeyType="next"
        placeholder={placeholder}
        onFocus={greencolor}
        onBlur={whitecolor}
        style={[{ paddingLeft: 22, color: "#fff",paddingTop:-20 },style2]} placeholderTextColor={"#0E1216"} />
    </View>
  )
}

export default InputComponent