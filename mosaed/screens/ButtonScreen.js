import React from 'react'
import { View, Text } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';

const ButtonScreen = (props) => {
  const { title, navigation, style1, style2, onPress } = props
  console.log(props);
  return (

    <View>
      <Ripple rippleSize={2000} rippleDuration={1000} rippleColor="#f0f8ff" onPress={() => navigation()} >
        <LinearGradient start={{ x: 0.98, y: 0 }} end={{ x: 0, y: 0 }} colors={['#387FDA', "#33A5C2", '#2ECBAA']} style={[{ marginTop: 20, padding: 15, borderRadius: 25, marginHorizontal: 29 }, style1]}>
          <Text style={[{ textAlign: "center", color: "#fff", fontSize: 16 }, style2]}>{title}</Text>
        </LinearGradient>
      </Ripple>
    </View>

  )
}

export default ButtonScreen;