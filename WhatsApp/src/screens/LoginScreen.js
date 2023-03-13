import { View, Text, TextInput,Pressable } from 'react-native'
import React from 'react'

import { colors } from '../constants/colors'
import { HEIGHT, WIDTH } from '../constants/Dimensions'

const LoginScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: colors.darkWhite, height: HEIGHT }} >
      <View style={{ marginTop: HEIGHT * 0.10, marginHorizontal: WIDTH * 0.04, }} >
        <Text style={{ textAlign: "center", fontSize: 19, fontWeight: "500", marginBottom: HEIGHT * 0.02 }} >Enter Your phone number</Text>
        <Text style={{ textAlign: "center" }} >WhatsApp will need to verify your phone number,<Text style={{ color: colors.blue }}>what's my number?</Text></Text>
      </View>
      <View style={{ marginTop: HEIGHT * 0.05 }} >
        <Text style={{ textAlign: "center" }} >India</Text>
        <View style={{ marginHorizontal: WIDTH * 0.16, borderWidth: 0.6, marginTop: HEIGHT * 0.011, borderColor: colors.lightGreen2 }} />

      </View>
      <View style={{ flexDirection: "row" }} >
        <View style={{ borderWidth: 0.9, borderColor: colors.lightGreen2, marginLeft: WIDTH * 0.13, width: WIDTH * 0.15, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0 }} >
          <Text style={{ marginTop: HEIGHT * 0.02, width: WIDTH * 0.16 }} > + 91</Text>
        </View>
        <View style={{ borderWidth: 1, borderTopWidth: 0, borderEndWidth: 0, borderLeftWidth: 0, width: WIDTH * 0.51, marginLeft: WIDTH * 0.05, borderColor: colors.lightGreen2 }} >
          <TextInput style={{ paddingTop: HEIGHT * 0.019 }} />
        </View>
      </View>
      <Text style={{ textAlign: "center", marginTop: HEIGHT * 0.015, fontSize: 12 }} >Carrier charges may apply</Text>
      <Pressable onPress={()=>navigation.navigate("EnterOtpScreen")} style={{ backgroundColor: colors.lightGreen, marginHorizontal: WIDTH * 0.42, marginTop: HEIGHT * 0.19, padding: HEIGHT * 0.007, borderRadius: 5 }} >
        <Text style={{ textAlign: "center",color:colors.white,fontSize: 15, fontWeight: "500"  }} >Next</Text>

      </Pressable>
    </View>
  )
}

export default LoginScreen