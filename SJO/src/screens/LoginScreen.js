import React from 'react'
import { View, Text, Image, TextInput, FlatList } from 'react-native'

import { loginLogo, spalshLeftImage, loginHorse } from "../assests/index"
import { colors } from "../constants/colors"
import { loginData } from "../constants/FlatListArray"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import ButtonComponent from '../component/ButtonComponent'

const LoginScreen = (props) => {
    const { navigation } = props
    return (
        <View style={{ backgroundColor: colors.White, flex: 1 }} >
            <View>
                <Image style={{ position: "absolute", left: 0 }} source={spalshLeftImage} />
                <View style={{ alignItems: "center", justifyContent: "center", height: HEIGHT * 0.325 }} >
                    <Image style={{ marginTop: HEIGHT * 0.024 }} source={loginLogo} />
                </View>
                <View style={{ marginHorizontal: WIDTH * 0.12 }} >
                    <Text style={{ color: colors.Yellow, fontSize: 25, fontWeight: "700" }} >Sign in</Text>
                    <Text style={{ color: "#919191", fontSize: 17, marginTop: HEIGHT * 0.03 }} >Please enter information to complete the login process</Text>
                    <FlatList
                        style={{ marginTop: HEIGHT * 0.039 }}
                        data={loginData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ backgroundColor: colors.lightYellow, height: HEIGHT * 0.081, borderWidth: 1, borderColor: colors.lightGrey, marginTop: HEIGHT * 0.02, }} >
                                <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: WIDTH * 0.03, }} >
                                    <Image style={{ marginTop: HEIGHT * 0.01 }} source={item.image} />
                                    <View>
                                        <Text style={{ color: colors.grey, paddingLeft: WIDTH * 0.04, fontSize: 17, marginTop: HEIGHT * 0.01 }} >{item.title}</Text>
                                        <TextInput placeholderTextColor={"#919191"} style={{ paddingLeft: WIDTH * 0.04, marginTop: HEIGHT * 0.01, fontSize: 16 }} placeholder={item.text} />
                                    </View>
                                </View>
                            </View>
                        } />
                    <Text style={{ color: colors.Yellow, fontSize: 11, marginTop: HEIGHT * 0.01 }} >Forgot your password</Text>
                    <View style={{ marginTop: HEIGHT * 0.04 }} >
                        <ButtonComponent onPress={() => navigation.navigate("HomeScreen")} />
                    </View>
                    {/* <Image style={{position:"absolute",right:0,bottom:0}} source={loginHorse} /> */}

                </View>
            </View>

        </View>

    )
}

export default LoginScreen