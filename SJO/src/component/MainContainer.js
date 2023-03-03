import { View, Text, Image, Platform, StatusBar, SafeAreaView, Pressable } from 'react-native'
import React, { Children } from 'react'

import { colors } from "../constants/colors"
import { homeLeftIcon, spalshLeftImage, homeScreenLogo } from "../assests/index"

import { HEIGHT, WIDTH } from '../constants/Dimensions'


const MainContainer = (props) => {
    const { title, image, leftLogo, titleStyle, children, leftImage, color, statusbarStyle, style2, backStyle, navigation,text } = props

    return (
        <>
        <Image style={{ position: "absolute", left: 0, top: 0 ,tintColor:colors.Yellow,zIndex:2}} source={leftImage} />
        <View style={[{ flex: 1, backgroundColor: colors.darkWhite }, statusbarStyle]} >
            <View style={[{ height: HEIGHT * 0.05, width: WIDTH, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : HEIGHT * 0.05, backgroundColor: colors.offWhite }, color]}>
                <View style={[{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: WIDTH * 0.04, marginTop: HEIGHT * 0.001 }, style2]} >
                    <Pressable onPress={navigation} >
                        <Image source={leftLogo} />
                    </Pressable>
                    {/* <View style={{}} >
                        <Text style={{marginBottom:HEIGHT*0.06,marginLeft:WIDTH*0.09}} >{text}</Text>
                    </View> */}
                    
                    <View>
                        <Text style={[{ textAlign: "center", fontSize: 25 }, titleStyle]} >{title}</Text>
                    </View>
                    <View  >
                        <Image style={[{}, backStyle]} source={image} />
                    </View>
                </View>
            </View>
            <SafeAreaView style={{ backgroundColor: colors.offWhite, flex: 1 }} >{children}</SafeAreaView>
        </View>
        </>



    )
}

export default MainContainer