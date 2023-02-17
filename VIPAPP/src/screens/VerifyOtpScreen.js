import React from 'react'
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loginLogo } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';


const VerifyOtpScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#181D23" }}>
            <SafeAreaView style={{ marginHorizontal: 28 }}>
                <Image style={{ marginTop: HEIGHT * 0.13 }} source={loginLogo} />
                <Text style={{ color: "#0FC1A1", marginTop: HEIGHT * 0.04, fontSize: 50 }}>ENTER OTP</Text>
                <View style={{ marginTop: HEIGHT * 0.03 }}>
                    <Text style={{ color: "#fff", fontSize: 17 }}>Enter 5 Digit Verification Code Sent To</Text>
                    <Text style={{ color: "#fff", fontSize: 17 }}>Your Number</Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 29 }}>
                    <InputComponent inputstyle={{ backgroundColor: "#0E1216", height: HEIGHT * 0.07, marginHorizontal: 10, width: WIDTH * 0.14, borderWidth: 1, borderRadius: 10 }} colors="#0E1216" />
                    <InputComponent inputstyle={{ backgroundColor: "#0E1216", height: HEIGHT * 0.07, marginHorizontal: 10, width: WIDTH * 0.14, borderWidth: 1, borderRadius: 10 }} colors="#0E1216" />
                    <InputComponent inputstyle={{ backgroundColor: "#0E1216", height: HEIGHT * 0.07, marginHorizontal: 10, width: WIDTH * 0.14, borderWidth: 1, borderRadius: 10 }} colors="#0E1216" />
                    <InputComponent inputstyle={{ backgroundColor: "#0E1216", height: HEIGHT * 0.07, marginHorizontal: 10, width: WIDTH * 0.14, borderWidth: 1, borderRadius: 10 }} colors="#0E1216" />
                </View>
                <Text style={{ color: "#fff" }}>Change Phone Number?</Text>
                <View style={{ marginTop: 48 }}>
                    <ButtonComponent navigation={() => navigation.navigate("SignupScreen")} title="SUBMIT" />
                </View>
                <Text style={{ color: "#FF5F00", textAlign: "center", marginTop: 27 }}>Send Again?</Text>
            </SafeAreaView>
        </View>
    )
}

export default VerifyOtpScreen