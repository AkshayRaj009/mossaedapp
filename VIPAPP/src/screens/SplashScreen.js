import React, { useEffect, useRef } from 'react'
import { Text, View, Dimensions, Image, StatusBar, Pressable } from 'react-native';
import { maskRight, logo, maskLeft, vipBackground, splashmask } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, Easing, useAnimatedGestureHandler } from 'react-native-reanimated';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        transform.value = 4
        setTimeout(() => {
            navigation.navigate("LoginScreen")
        }, 2000)
    }, [])

    const transform = useSharedValue(0);
    const style = useAnimatedStyle(() => {
        return {
            height: withTiming(transform.value * 400, {
                duration: 3000,

            }),
            width: withTiming(transform.value * 400, {
                duration: 3000,

            }),
            borderRadius: withTiming(transform.value * 400, {
                duration: 2000,

            }),
            transform: [{ scale: withTiming(transform.value * 200, { duration: 3000 }) }]
        };
    });
    // const x = useSharedValue(0);

    // const gestureHandler = useAnimatedGestureHandler({
    //   onStart: (_, ctx) => {
    //     ctx.startX = x.value;
    //   },
    //   onActive: (event, ctx) => {
    //     x.value = ctx.startX + event.translationX;
    //   },
    //   onEnd: (_) => {
    //     x.value = withSpring(0);
    //   },
    // });

    // const animatedStyle = useAnimatedStyle(() => {
    //   return {
    //     transform: [
    //       {
    //         translateX: x.value,
    //       },
    //     ],
    //   };
    // });

    return (

        <View style={{ flex: 1, /* backgroundColor: "#181D23" */ }}>
            <Animated.View style={[style, { backgroundColor: "#181D23", position: 'absolute', top: 400, left: 150 }]} ></Animated.View>
            <Pressable onPress={() => transform.value = 4}><Text>press</Text></Pressable>
            <StatusBar hidden={true} />
            <Image style={{ position: "absolute", right: 0, zIndex: 1 }} source={maskRight} />
            <View style={[{ justifyContent: "center", alignItems: "center", marginTop: HEIGHT * 0.43 }]}>
                <Image source={logo} resizeMode="contain" />
            </View>
            <Image style={{ position: "absolute", bottom: 0 }} source={maskLeft} />
            <View style={{ position: "absolute", top: 0, right: 0 }}>
                <Image source={vipBackground} />
            </View>


        </View>
    )
}

export default SplashScreen;