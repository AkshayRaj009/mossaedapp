import React from 'react'
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"

const HeaderComponent = (props) => {
    const { leftLogo, Title, rightLogo, drawerNavigation,filter,titleStyle } = props
    return (
        <>
            <SafeAreaView>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: HEIGHT * 0.03, justifyContent: "space-between", marginHorizontal: 17 }}>
                    <Pressable onPress={drawerNavigation}>
                        <Image source={leftLogo}
                        />
                    </Pressable>
                    <Text style={[{ color: "#fff", fontSize: 18, marginTop: 0,textAlign:"center" },titleStyle]}>{Title}</Text>
                    <View style={{flexDirection:"row"}}>
                    <Image style={{position:"absolute",right:46}} source={filter} />
                    <Image source={rightLogo}
                    />
                    </View>
                </View>
            </SafeAreaView>

        </>
    )
}

export default HeaderComponent