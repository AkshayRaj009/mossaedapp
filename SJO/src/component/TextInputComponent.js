import React from 'react'
import { View, Text, Image, TextInput, FlatList } from 'react-native'

import { loginLogo, spalshLeftImage, loginHorse } from "../assests/index"
import { colors } from "../constants/colors"
import { loginData } from "../constants/FlatListArray"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import ButtonComponent from '../component/ButtonComponent'

const TextInputComponent = (props) => {
    const { title, text, placeholder,placeholderStyle } = props
    return (
        <View  >
            <View style={{ alignItems: "flex-end", marginHorizontal: WIDTH * 0.17, marginTop: WIDTH * 0.04 }} >
                <Text>{text}</Text>
            </View>
            <View style={{ backgroundColor: colors.lightYellow, height: HEIGHT * 0.049, borderWidth: 1, borderColor: colors.lightGrey, marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.10, marginBottom: WIDTH * 0.01 }} >
                <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: WIDTH * 0.03, }} >
                    <View  >
                        <TextInput placeholderTextColor={"#919191"} style={[{ paddingLeft: WIDTH * 0.45,  fontSize: 16,marginTop:HEIGHT*0.01 },placeholderStyle]} placeholder={placeholder} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TextInputComponent