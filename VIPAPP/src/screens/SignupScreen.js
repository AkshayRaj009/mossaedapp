import React from 'react'
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native';
import { loginLogo } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { SignupData } from "../constants/FlatlistArray"
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

const SignupScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#181D23" }}>
      <SafeAreaView style={{ marginHorizontal: 24 }} >
        <Image style={{ marginTop: HEIGHT * 0.06 }} source={loginLogo} />
        <Text style={{ color: "#0FC1A1", marginTop: HEIGHT * 0.04, fontSize: 53 }}>SIGN UP</Text>
        <View style={{ marginTop: 26 }}>
          <FlatList
            data={SignupData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <InputComponent inputstyle={{ backgroundColor: "#0E1216", height: HEIGHT * 0.07, borderRadius: 10, marginVertical: 9 }} colors="#0E1216" inputText={item.title} />
            }
          />
          <View style={{ flexDirection: "row", marginTop: 6 }}>
            <Text style={{ color: "#fff", fontSize: 12 }}>Do You Have An Account? </Text>
            <Text style={{ color: "#FF5F00", fontSize: 12 }}>SIGN IN</Text>
          </View>
          <View style={{ marginTop: HEIGHT * 0.05 }}>
            <ButtonComponent navigation={()=>navigation.navigate("HomeScreen")} title="SIGN UP" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default SignupScreen