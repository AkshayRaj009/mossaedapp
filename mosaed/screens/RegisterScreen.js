import React from 'react'
import { View, Text, Image, TextInput, Dimensions } from 'react-native'
import { coimage, mosaeedcontent } from '../../mosaed/assets/Images/index';
import HeaderComponent from './HeaderComponent';
import ButtonScreen from './ButtonScreen';
import LinearGradient from 'react-native-linear-gradient';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const RegisterScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={['#1373DF', "#319FBB", '#2ECBAA']} style={{ position: "absolute", bottom: 510, right: -855, width: HEIGHT * 2.5, height: HEIGHT * 2.5, borderRadius: HEIGHT * 2.5, }}></LinearGradient>
      <HeaderComponent style3={{ marginVertical: 20 }} middlelogo={coimage} mosaeedcontent={mosaeedcontent} mosaeedstyle={{ alignItems: "center", marginVertical: 25 }} />
      <View style={{ marginVertical: 35 }}>
        <Text style={{ marginHorizontal: 30, fontSize: 23, }}>Great,</Text>
        <Text style={{ marginHorizontal: 25, marginVertical: 10, fontSize: 13 }}>Welcome,please enter your Full name</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ borderWidth: 1, width: WIDTH * 0.80, height: HEIGHT * 0.06, borderRadius: 8 }}>
          <Text style={{ fontSize: 9, color: "green", marginHorizontal: 10, marginVertical: 5 }}>Full name</Text>
          <TextInput style={{ borderRadius: 8, paddingLeft: 15 }}
          />
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ButtonScreen title="Done" style1={{ width: WIDTH * 0.75 }} navigation={() => navigation.navigate("TermsAndCondition")} />
      </View>
      <View>
        <Image style={{ position: "absolute", right: -9, top: HEIGHT*0.17 }}
          source={require("../assets/Images/secondbottomimage.png")}
        />
      </View>
    </View>
  )
}

export default RegisterScreen;