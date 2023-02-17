import React, { useState } from 'react'
import { Text, View, Image, StatusBar, SafeAreaView } from 'react-native';
import { loginLogo, loginBackground } from '../assests';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import { HEIGHT, WIDTH } from "../constants/Dimensions"


const LoginScreen = ({ navigation,colors }) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#181D23" }}>
            <StatusBar hidden={false} />
            <SafeAreaView style={{ marginHorizontal: 24 }} >
                <Image style={{ marginTop: HEIGHT * 0.12 }} source={loginLogo} />
                <Image style={{ position: "absolute", top: 0, right: 0 }} source={loginBackground} />
                <Text style={{ color: "#0FC1A1", marginTop: HEIGHT * 0.04, fontSize: 50 }}>LOGIN</Text>
                <View style={{ marginTop: HEIGHT * 0.03 }}>
                    <Text style={{ color: "#fff", fontSize: 16 }}>We Will Send You A Verification Code </Text>
                    <Text style={{ color: "#fff", fontSize: 16 }}>On This Mobile Number</Text>
                </View>
                <View style={{ marginTop: 37 }}>
                    <InputComponent colors="#fff" inputText="Phone Number" />
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                    <Text style={{ color: "#ffff", fontSize: 12, marginHorizontal: 3 }}>Don't Have An Account?</Text>
                    <Text style={{ color: "#FF5F00", fontSize: 13 }}>SIGN UP</Text>
                </View>
                <View style={{ marginVertical: 32 }}>
                    <ButtonComponent  navigation={() => navigation.navigate("VerifyOtpScreen")} title="SEND" />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default LoginScreen