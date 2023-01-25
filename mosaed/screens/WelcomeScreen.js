import React, { useState } from 'react'
import { View, Image, Text, TextInput, Modal, Dimensions, Pressable } from 'react-native';
import { coimage, mosaeedcontent } from '../../mosaed/assets/Images/index';
import ButtonScreen from './ButtonScreen';
import HeaderComponent from './HeaderComponent';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../Redux/actions/CreateActions';
import { verifydata } from '../Redux/actions/CreateActions';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const WelcomeScreen = ({ navigation }) => {
  const [ModalVisible, setModalVisible] = useState(false)
  const [details, setDetails] = useState("")
  const [otpverify, setOtpverify] = useState([])
  const [error, setError] = useState("")

  const RegisterScreen = (() => {
    navigation.navigate("RegisterScreen")
    setModalVisible(false);
  })

  const number = { phone_number: details }
  const sumbitotp = {
    "phone_number": details,
    "otp": otpverify.join("")
  }

  const dispatch = useDispatch();
  const Data = useSelector((store) => store.CommonReducers.logindata);
  console.log("Data", Data);

  const Data1 = useSelector((store) => store.CommonReducers.Verifydata);
  console.log("Data1", Data1);

  const getData = () => {
    dispatch(register(number))
  }

  const verifyotp = async () => {
    dispatch(verifydata(sumbitotp))
  }

  const validation = () => {
    // if (details === "") {
    //   setError("Userhave must 8 characters")
    // }
    if (details.length !== 8) {
      setError("Userhave must 8 characters")
    } else {
      getData()
      setModalVisible(true)
      setError("")
    }
  }

  return (
    <View>
      <Modal
        transparent
        visible={ModalVisible}
        animationType="slide"
      >
        <View style={{ justifyContent: 'center', alignItems: "center", backgroundColor: '#fff', marginHorizontal: 20, marginTop: HEIGHT * 0.25 }}>
          <Image style={{ marginVertical: 20 }}
            source={require("../assets/Images/verificationimage.png")}
          />
          <Text>otp Verification</Text>
          <View style={{ marginVertical: 10, alignItems: "center" }}>
            <Text style={{ fontSize: 12, color: "grey" }}>please enter the OTP to <Text style={{ color: "green" }}>65437</Text></Text>
            <Text style={{ fontSize: 11, color: "grey" }}>to confirm your mobile Number</Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 30, justifyContent: "center", alignItems: "center" }}>
            <View style={{ marginHorizontal: 10 }}>
              <TextInput maxLength={1} onChangeText={(text) => {
                otpverify.push(text)
                setOtpverify([...otpverify])
              }} style={{ borderWidth: 1, width: WIDTH * 0.09, height: HEIGHT * 0.04, borderColor: "grey", paddingLeft: 12 }}
              />
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <TextInput maxLength={1} onChangeText={(text) => {
                otpverify.push(text)
                setOtpverify([...otpverify])
              }} style={{ borderWidth: 1, width: WIDTH * 0.09, height: HEIGHT * 0.04, borderColor: "grey", paddingLeft: 12 }}
              />
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <TextInput maxLength={1} onChangeText={(text) => {
                otpverify.push(text)
                setOtpverify([...otpverify])
              }} style={{ borderWidth: 1, width: WIDTH * 0.09, height: HEIGHT * 0.04, borderColor: "grey", paddingLeft: 12 }}
              />
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <TextInput maxLength={1} onChangeText={(text) => {
                otpverify.push(text)
                setOtpverify([...otpverify])
              }} style={{ borderWidth: 1, width: WIDTH * 0.09, height: HEIGHT * 0.04, borderColor: "grey", paddingLeft: 12 }}
              />
            </View>
          </View>
          <View>
            <Text style={{ color: "#3D989F", textAlign: "center", fontSize: 12 }}>Resend?</Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Pressable>
              <ButtonScreen navigation={() => {
                RegisterScreen()
                verifyotp()
              }} title="Submit" style1={{ width: WIDTH * 0.45 }} />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{ overflow: "hidden" }}>
        <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={['#1373DF', "#319FBB", '#2ECBAA']} style={{ position: "absolute", bottom: 0, right: -865, width: HEIGHT * 2.5, height: HEIGHT * 2.5, borderRadius: HEIGHT * 2.5, }}></LinearGradient>
        <HeaderComponent style3={{ marginVertical: 20 }} middlelogo={coimage} mosaeedcontent={mosaeedcontent} mosaeedstyle={{ marginVertical: 20, alignItems: "center", justifyContent: "center" }} />
      </View>
      <View style={{ marginVertical: 35 }}>
        <Text style={{ marginHorizontal: 30, fontSize: 23, }}>Welcome</Text>
        <Text style={{ marginHorizontal: 25, marginVertical: 10, fontSize: 13 }}>Welcome,please enter your phone number to enter</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ borderWidth: 1, width: WIDTH * 0.80, height: HEIGHT * 0.06, borderRadius: 8 }}>
          <Text style={{ fontSize: 9, color: "green", marginHorizontal: 10, marginVertical: 5 }}>Phone Number</Text>
          <TextInput
            maxLength={8}
            onChangeText={(text) => {
              setDetails(text)
              // if(details.length!==8){
              //   setError("Userhave must 8 characters")
              // }else{
              //   setError("")
              // }
            }} style={{ borderRadius: 8, paddingLeft: 15 }}
            keyboardType="numeric"
          />
          <Text style={{ color: "red", marginTop: 20 }}>{error}</Text>
        </View>
      </View>
      <Pressable style={{ marginVertical: 20 }}>
        <ButtonScreen title="Send Code" style2={{ marginHorizontal: 30 }} navigation={() => {
          validation()
        }} />
      </Pressable>
      <View>
        <Image style={{ position: "absolute", right: -9, top:HEIGHT*0.13 }}
          source={require("../assets/Images/welcomebottomimage.png")}
        />
      </View>
    </View>
  )
}

export default WelcomeScreen; 