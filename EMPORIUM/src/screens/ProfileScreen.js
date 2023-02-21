import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { drawerImage, bellIcon, drawerIcon, profileImage } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { drawerData, homeProduct, homeVendors } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'

const ProfileScreen = () => {
  return (
    <View style={{ backgroundColor: "#ffff",flex:1 }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="PROFILE" image={drawerIcon} />
        <View style={{ alignItems: "center",marginTop:HEIGHT*0.03 }} >
          <Image source={profileImage} />
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

<View>
  <ButtonComponent title="SAVE" />
  <Text style={{color:"#B89962",textAlign:"center",marginTop:20,fontSize:21}}  >Change Password</Text>
</View>
      </SafeAreaView>
    </View>
  )
}

export default ProfileScreen