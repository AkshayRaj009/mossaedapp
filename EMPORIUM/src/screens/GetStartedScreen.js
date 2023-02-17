import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { getStartedImage, emporiumImage } from "../assests/index"
import { HEIGHT, WIDTH } from "../constants/Dimensions"

const GetStartedScreen = ({ navigation }) => {
    const [color, setColor] = useState(false)
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground style={{ height: HEIGHT * 0.68 }} resizeMode='cover' source={getStartedImage} >
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.47 }} >
                    <Image source={emporiumImage} />
                </View>
            </ImageBackground>
            <View style={{ margin: HEIGHT * 0.05 }} >
                <Pressable onPress={() => {
                    navigation.navigate("SignUpScreen")
                    setColor(!color)
                }} >
                    <View style={{ borderWidth: 1, borderColor: "#B89962", backgroundColor: color ? "#fff" : "#B89962", padding: 15, alignItems: "center" }}>
                        <Text style={{ color: color ? "#B89962" : "#fff", fontSize: 21 }} >SIGN UP</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    navigation.navigate("SignInScreen")
                    setColor(!color)
                }}>
                    <View style={{ borderWidth: 1, borderColor: "#B89962", padding: 15, marginTop: 20, alignItems: "center", backgroundColor: color ? "#B89962" : "#fff" }} >
                        <Text style={{ color: color ? "#fff" : "#B89962", fontSize: 21 }} >SIGN IN</Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 15 }} >
                        <Text style={{ color: "#B89962", fontSize: 21 }} >Continue as Guest</Text>
                    </View>
                </Pressable>

            </View>
        </View>
    )
}

export default GetStartedScreen