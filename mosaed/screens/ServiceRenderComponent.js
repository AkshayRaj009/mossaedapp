import React from 'react'
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
// images
import housewhite from "../assets/Images/housewhiteimage.png";
import nurseimage from "../assets/Images/nurseimage23.png";
import coffeewhite from "../assets/Images/coffeewhiteimage.png";
import transferwhite from "../assets/Images/transferwhiteimage.png";


const HEIGHT = Dimensions.get('window').width;
const WIDTH = Dimensions.get('window').height;

const ServiceRenderComponent = (props) => {
  const { text, colors } = props
  const navigation = useNavigation()

  const img =
  {
    "Home Services": housewhite,
    "Nursing": nurseimage,
    "Guests Serving": coffeewhite,
    "Sponsership Transfer": transferwhite

  }
  const path =
  {
    "Home Services": "WorkersScreen",
    "Nursing": "CompaniesScreen",
    "Guests Serving": "WorkersScreen",
    "Sponsership Transfer": "WorkersScreen"
  }

  return (
    <>
        <Pressable style={{ marginVertical:10,marginTop:10,shadowColor: 'black', shadowOpacity: 0.1, marginHorizontal: 20 }} onPress={() => navigation.navigate(path[text])}>
          {({ pressed }) => (
            <Animated.View entering={FadeInLeft.delay(props.id * 390)} style={{ borderWidth: 2, backgroundColor: '#FDFCFF', shadowColor: 'black', flexDirection: "row", justifyContent: 'center', height: HEIGHT * 0.23, borderTopRightRadius: 6,  borderTopLeftRadius: 10, borderBottomLeftRadius: 10, overflow: 'hidden', borderColor: pressed ? 'green' : "", borderWidth: pressed ? 1 : 0 }}>
                <LinearGradient start={{ x: 0.95, y: 0 }} end={{ x: 0.45, y: 0 }} colors={[colors[1], colors[0]]} style={{
                  width: WIDTH * 0.2, height: HEIGHT * 0.5, borderTopLeftRadius: 1, borderRadius: HEIGHT*0.28, borderBottomLeftRadius: 12, position: 'absolute', top: -50, left: -75,
                }}></LinearGradient>
              <View style={{ justifyContent: "center", alignItems: "center", width: WIDTH * 0.1 }}>
                <Image
                  source={img[text]}
                />
              </View>
              <View style={{ justifyContent: "center", flex: 1 }}>
                <Text style={{ fontSize: 18, marginHorizontal: 30, color: pressed ? "green" : "black" }}>{text}</Text>
              </View>
            </Animated.View>
          )}
        </Pressable>
    </>
  )
}

export default ServiceRenderComponent