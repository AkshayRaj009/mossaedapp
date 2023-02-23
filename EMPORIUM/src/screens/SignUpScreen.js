import { View, Text, Image, ImageBackground, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { signUpImage, backArrow } from "../assests/index"
import { HEIGHT } from '../constants/Dimensions'

import HeaderComponent from '../components/HeaderComponent'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignUpScreen = ({ navigation }) => {
    
        const setData = async () => {
         await  AsyncStorage.setItem('loggedIn',"true")


         }
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground style={{ height: HEIGHT * 0.36 }} resizeMode="cover" source={signUpImage}>
                <SafeAreaView>
                    <HeaderComponent image={backArrow} drawernavigation={() => navigation.goBack()} />
                    <Text style={{ color: "#fff", fontSize: 55, marginTop: HEIGHT * 0.10, marginHorizontal: 30 }} >SIGN UP</Text>
                </SafeAreaView>
            </ImageBackground>
            <View style={{ marginTop: HEIGHT * 0.10 }} >
                <TextInputComponent text="USERNAME" />
                <View style={{ marginTop: HEIGHT * 0.01 }} >
                    <TextInputComponent text="EMAIL" />
                </View>
                <View style={{ marginTop: HEIGHT * 0.01 }} >
                    <TextInputComponent text="PHONENUMBER" />
                </View>
                <View style={{ marginTop: HEIGHT * 0.01 }} >
                    <TextInputComponent text="PASSWORD" />
                </View>
            </View>
            <ButtonComponent navigation={() => {
                  setData()
                navigation.navigate("HomeScreen")}} title="SIGNUP" />
            <Pressable onPress={() =>{
              
                 navigation.navigate("HomeScreen")}} style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
                <Text style={{ color: "#B89962", fontSize: 21 }} >Continue as Guest</Text>
            </Pressable>
        </View >
    )
}
export default SignUpScreen