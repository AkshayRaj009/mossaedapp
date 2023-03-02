import React, { useRef } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, KeyboardAvoidingView } from 'react-native'
import { bellIcon, drawerIcon, profileImage, editIcon } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import HeaderComponent from '../components/HeaderComponent'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const ProfileScreen = ({ navigation }) => {
  const ref =useRef()
  const ref2 =useRef()
  const ref3 =useRef()


  return (
    <View style={{ backgroundColor: "#ffff", flex: 1 }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="PROFILE" image={drawerIcon} />
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
            <Image source={profileImage} />
            <View style={[{ justifyContent: "center", borderColor: "#fff", alignItems: "center", height: WIDTH * 0.08, width: WIDTH * 0.08, borderRadius: WIDTH * 0.8 / 2, borderWidth: 2, backgroundColor: "#fff", position: "absolute", bottom: HEIGHT * 0.077, right: HEIGHT * 0.16 }]} >
              <Image style={{}} source={editIcon} />
            </View>
            <Text style={{ fontSize: 14, fontWeight: "600", fontSize: 18, marginTop: -30 }} >Lana Ahmed</Text>
            <Text>+956707534</Text>
          </View>
          <View style={{ marginTop: HEIGHT * 0.06 }} >
            <View style={{ marginTop: HEIGHT * 0.01 }}  >
              <TextInputComponent text="USERNAME" />
            </View>
            <View style={{ marginTop: HEIGHT * 0.01 }}   >
              <TextInputComponent text="EMAIL" />
            </View>
            <View style={{ marginTop: HEIGHT * 0.01 }}  >
              <TextInputComponent text="PHONENUMBER" />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View>
          <ButtonComponent title="SAVE" />
          <Text style={{ color: "#B89962", textAlign: "center", marginTop: 20, fontSize: 21 }}  >Change Password</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ProfileScreen