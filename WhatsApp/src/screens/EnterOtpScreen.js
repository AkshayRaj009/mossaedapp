import { View, Text, FlatList,TextInput ,Pressable} from 'react-native'
import React from 'react'

import { colors } from '../constants/colors'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign'

const EnterOtpScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: colors.darkWhite, flex: 1 }} >
            <View style={{ marginHorizontal: WIDTH * 0.05 }} >

                <View style={{ marginTop: HEIGHT * 0.08, flexDirection: "row" }} >
                    <Pressable onPress={() => navigation.goBack()} >
                        <AntDesign name='arrowleft' size={20} />
                    </Pressable>
                    <Text style={{ fontWeight: "500", fontSize: 19, paddingLeft: WIDTH * 0.03 }} >ENTER OTP CODE</Text>
                </View>
                <View style={{ alignItems: "center", marginTop: HEIGHT * 0.28 }} >
                    <Text>Code has been send to +91 95******16</Text>
                </View>
                <View>
                </View>
                <View style={{ marginTop: HEIGHT * 0.05, flexDirection: "row", justifyContent: "center" }} >
                    <View style={{ borderWidth: 1, height: HEIGHT * 0.07, width: WIDTH * 0.16, borderRadius: 13 }} >
                        <TextInput style={{ textAlign: "center", paddingTop: HEIGHT * 0.022 }} />
                    </View>
                    <View style={{ borderWidth: 1, height: HEIGHT * 0.07, width: WIDTH * 0.16, borderRadius: 13, marginLeft: WIDTH * 0.05 }} >
                        <TextInput style={{ textAlign: "center", paddingTop: HEIGHT * 0.022 }} />
                    </View>
                    <View style={{ borderWidth: 1, height: HEIGHT * 0.07, width: WIDTH * 0.16, borderRadius: 13, marginLeft: WIDTH * 0.05 }} >
                        <TextInput style={{ textAlign: "center", paddingTop: HEIGHT * 0.022 }} />
                    </View>
                    <View style={{ borderWidth: 1, height: HEIGHT * 0.07, width: WIDTH * 0.16, borderRadius: 13, marginLeft: WIDTH * 0.05 }} >
                        <TextInput style={{ textAlign: "center", paddingTop: HEIGHT * 0.022 }} />
                    </View>
                </View>
                <Text style={{ marginTop: HEIGHT * 0.04, textAlign: "center" }} >Resend Code in <Text style={{ color: colors.lightGreen }}> 56 </Text>s</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate("HomeScreen")} style={{ backgroundColor: colors.lightGreen, marginHorizontal: WIDTH * 0.08, padding: HEIGHT * 0.018, borderRadius: 30, marginTop: HEIGHT * 0.30 }} >
                <Text style={{ textAlign: "center", color: colors.white, fontSize: 16, fontWeight: "500" }} >Verify</Text>
            </Pressable>
        </View>
    )
}

export default EnterOtpScreen