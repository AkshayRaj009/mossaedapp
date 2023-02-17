import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { headerRightLogo, homeScreenLogo, homeTopMask, homeMaskBottom, homeDrawerIcon, drawerTopMask } from '../assests';
import { homeData } from "../constants/FlatlistArray"
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle, FadeInLeft } from 'react-native-reanimated';
import HeaderComponent from '../components/HeaderComponent';

const HomeScreen = ({ navigation, props }) => {
    const drawerProgress = useDrawerProgress()
    const animationstyles = useAnimatedStyle(() => {
        const scaleX = interpolate(
            drawerProgress.value,
            [0, 1.5],
            [1, 0.8]
        )
        const scaleY = interpolate(
            drawerProgress.value,
            [0, 0.4],
            [1, 0.9]
        )
        return {
            transform: [{ scaleX }, { scaleY }],
            borderRadius: drawerProgress.value * 30
        }
    }
    )
    return (
        <>
            <Image style={{ position: "absolute", top: 0 }} source={drawerTopMask} />
            <Animated.View style={[{ flex: 1, backgroundColor: "#0E1114", overflow: "hidden" }, animationstyles]}>
                <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.41, borderWidth: 1 }}>
                    <SafeAreaView>
                        <HeaderComponent drawerNavigation={() => navigation.toggleDrawer()} leftLogo={homeDrawerIcon} Title="VIP-974" rightLogo={headerRightLogo} />
                        <View style={{ alignItems: "center", marginTop: HEIGHT * 0.06 }}>
                            <Image source={homeScreenLogo} />
                        </View>
                        <View style={{ marginTop: 28 }}>
                            <Text style={{ textAlign: "center", color: "#fff", fontSize: 25 }}>Welcome To</Text>
                            <Text style={{ textAlign: "center", color: "#fff", fontSize: 25 }}>Vip-974</Text>
                        </View>
                        <View style={{ marginTop: HEIGHT * 0.05 }}>
                            <FlatList
                                data={homeData}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <>
                                        <Animated.View entering={FadeInLeft.delay(item.id * 310)}>
                                            <Pressable onPress={() => navigation.navigate(item.path)} style={{ backgroundColor: "#181D23", height: HEIGHT * 0.16, marginHorizontal: 22, marginVertical: 10, }}>
                                                <Image style={{ position: "absolute", right: 0, bottom: 0 }} source={homeMaskBottom} />
                                                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.04, marginHorizontal: 24 }}>
                                                    <View style={{ width: WIDTH * 0.16, width: item.width, height: item.height, borderColor: item.bordercolor, borderWidth: 1, justifyContent: "center", alignItems: "center", borderRadius: 11 }}>
                                                        <Image source={item.image} />
                                                    </View>
                                                    <View style={{ marginHorizontal: 30 }}>
                                                        <Text style={{ color: "#fff", fontSize: 27, fontWeight: "bold" }}>
                                                            {item.title}</Text>
                                                        <View style={{ flexWrap: "wrap", marginHorizontal: 10, marginTop: 2 }}>
                                                            <Text style={{ color: "#636B74", fontSize: 17 }}>{item.text}</Text>
                                                            <Text style={{ color: "#636B74", fontSize: 17 }}>{item.text1}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Pressable>
                                        </Animated.View>
                                    </>
                                }
                            />
                        </View>
                    </SafeAreaView>
                    <Image style={{ position: "absolute", left: 0, bottom: 0 }} source={homeTopMask} />
                </View>
            </Animated.View>
        </>

    )
}

export default HomeScreen