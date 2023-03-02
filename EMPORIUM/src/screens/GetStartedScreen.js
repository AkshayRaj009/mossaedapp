import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, Pressable } from 'react-native'
import { getStartedImage, emporiumImage } from "../assests/index"
import { HEIGHT, WIDTH } from "../constants/Dimensions"

const GetStartedScreen = ({ navigation }) => {
    const [color, setColor] = useState({ SignIn: false, SignUp: false })
    console.log(color);
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground style={{ height: HEIGHT * 0.68 }} resizeMode='cover' source={getStartedImage} >
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.47 }} >
                    <Image source={emporiumImage} />
                </View>
            </ImageBackground>
            <View>
                <Pressable onPress={() => {
                    setColor({ ...color, SignUp: true, SignIn: false })
                    navigation.navigate("SignUpScreen")
                }}  >
                    <View style={{ backgroundColor: color.SignUp ? "#B89962" : "#FFFFFF30", padding: HEIGHT * 0.0150, marginHorizontal: WIDTH * 0.07, marginTop: HEIGHT * 0.07, borderColor: "#B89962", borderWidth: 1 }} >
                        <Text style={{ color: color.SignUp ? "#fff" : "#B89962", textAlign: "center", fontSize: 21 }}>SIGN UP</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    setColor({ ...color, SignIn: true, SignUp: false })
                    navigation.navigate("SignInScreen")
                }}  >
                    <View style={{ backgroundColor: color.SignIn ? "#B89962" : "#FFFFFF30", padding: HEIGHT * 0.0150, marginHorizontal: WIDTH * 0.07, marginTop: HEIGHT * 0.02, borderColor: "#B89962", borderWidth: 1 }} >
                        <Text style={{ color: color.SignIn ? "#fff" : "#B89962", textAlign: "center", fontSize: 21 }}>SIGN IN</Text>
                    </View>
                </Pressable>
            </View>

            <View style={{ alignItems: "center", marginTop: 15 }} >
                <Text style={{ color: "#B89962", fontSize: 21 }} >Continue as Guest</Text>
            </View>
        </View>
    )
}

export default GetStartedScreen