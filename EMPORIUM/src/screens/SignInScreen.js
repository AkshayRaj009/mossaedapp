import { View, Text, Image, ImageBackground, SafeAreaView,Pressable } from 'react-native'
import React from 'react'
import { signInImage,backArrow } from "../assests/index"
import { HEIGHT } from '../constants/Dimensions'
import HeaderComponent from '../components/HeaderComponent'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const SignInScreen = ({navigation}) => {
  return (
<View style={{ flex: 1 }} >
            <ImageBackground style={{ height: HEIGHT * 0.55 }} resizeMode="cover" source={signInImage} >
                <SafeAreaView>
                    <HeaderComponent image={backArrow} drawernavigation={() => navigation.goBack()} />
                    <Text style={{ color: "#fff", fontSize: 55, marginTop: HEIGHT * 0.24, marginHorizontal: 30 }} >SIGN IN</Text>
                </SafeAreaView>
            </ImageBackground>
            <View style={{ marginTop: HEIGHT * 0.07 }} >
                <TextInputComponent text="USER NAME" />
                <View style={{ marginTop: 12 }} >
                    <TextInputComponent text="PASSWORD" />
                </View>
                <ButtonComponent navigation={()=>navigation.navigate("HomeScreen")} title="SIGN IN" />
                <Pressable onPress={()=>navigation.navigate("HomeScreen")} style={{ alignItems: "center", marginTop: HEIGHT*0.03 }} >
                    <Text style={{ color: "#B89962", fontSize: 21 }} >Continue as Guest</Text>
                </Pressable>
            </View>

        </View>
  )
}

export default SignInScreen