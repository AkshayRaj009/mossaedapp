import React from 'react'
import { View, Text, TextInput, Image, Dimensions } from "react-native"

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const InputComponent = (props) => {
  const { title, image, qar, name, textstyle, setvalidation,style2,placeholder,style1 } = props
  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={[{ borderWidth: 1, width: WIDTH * 0.85, height: HEIGHT * 0.07, borderRadius: 10, borderColor: "grey" }, textstyle]}>
          <Text style={[{ marginHorizontal: 13, paddingTop: 3, color: "grey", },style1]}>{title}</Text>
          <TextInput style={[{ paddingLeft: 30, width: WIDTH * 0.70 },style2]} onChangeText={(text) => { setvalidation(text) }}
          placeholder={placeholder}
          />
          <Text style={{ textAlign: "center", color: "green" }}>{name}</Text>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ marginHorizontal: 10, marginVertical: -30 }} >{qar}</Text>
          </View>
          <Image style={{ position: "absolute", right: 10, bottom: 20 }} source={image} />
        </View>
      </View>
    </View>

  )
}

export default InputComponent