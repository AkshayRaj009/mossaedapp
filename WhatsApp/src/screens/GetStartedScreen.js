import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { colors } from '../constants/colors'

const GetStartedScreen = (props) => {
    const { navigation } = props
    return (
        <>
            <SafeAreaView style={{ backgroundColor: colors.darkWhite }} />
            <View style={{ backgroundColor: colors.darkWhite, flex: 1 }} >
                <View style={{ alignItems: "center", marginTop: HEIGHT * 0.035 }}>
                    <Text style={{ fontSize: 25, fontWeight: "500", color: colors.tealGreen }} >Welcome To WhatsApp</Text>
                </View>
                <View style={{ marginTop: HEIGHT * 0.60, alignItems: "center" }} >
                    <Text style={{ textAlign: "center", color: colors.grey, fontSize: 15 }} >Read your <Text style={{ color: colors.blue, fontSize: 15 }}>Privacy Policy</Text> Tap "Agree and continue" to accept the<Text style={{ color: colors.blue }}>Terms of Service</Text> </Text>
                </View>
                <View style={{ backgroundColor: colors.lightGreen, padding: HEIGHT * 0.014, borderRadius: 4, marginTop: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.07 }} >
                    <Pressable onPress={() => navigation.navigate("LoginScreen")} >
                        <Text style={{ textAlign: "center", color: colors.white, fontSize: 17, fontWeight: "500" }} >AGREE AND CONTINUE</Text>
                    </Pressable>
                </View>
                <View style={{ alignItems: "center", marginTop: HEIGHT * 0.06 }} >
                    <Text style={{ color: "grey" }}  >from</Text>
                    <Text style={{ fontSize: 16, color: "#25D366", fontWeight: "500", marginTop: HEIGHT * 0.004 }} >FACE BOOK</Text>
                </View>
            </View>
        </>



    )
}

export default GetStartedScreen