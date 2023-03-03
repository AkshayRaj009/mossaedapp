import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import MainContainer from '../component/MainContainer'

const NotificatonScreen = ( ) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.White }} >
      <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
      <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 14 }} title="Notification's" color={{ backgroundColor: colors.Yellow, marginTop: 0 }} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
        <View style={{ marginTop: HEIGHT * 0.01, marginHorizontal: WIDTH * 0.03 }} >
          <View style={{ alignItems: "center",marginTop:HEIGHT*0.03 }} >
            <Text style={{ color: colors.grey, fontSize: 14 }} >Move the jewelry to the current location</Text>
          </View>
          <Text style={{ textAlign: "right", color: colors.grey }} >15/4/2020 | 9.000 am</Text>
          <Text style={{ color: colors.grey, marginHorizontal: WIDTH * 0.01 }}>Lorem Ipsum has been the and standard  text ever since the 1500s,</Text>
          <View style={{borderWidth:1,borderColor:colors.borderGrey,width:WIDTH}} />
          <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
            <Text style={{ color: colors.grey, fontSize: 14 }} >Move the jewelry to the current location</Text>
          </View>
          <Text style={{ textAlign: "right", color: colors.grey }} >15/4/2020 | 9.000 am</Text>
          <Text style={{ color: colors.grey, marginHorizontal: WIDTH * 0.01 }}>Lorem Ipsum has been the and standard  text ever since the 1500s,</Text>
          <View style={{borderWidth:1,borderColor:colors.borderGrey,width:WIDTH}} />
          <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
            <Text style={{ color: colors.grey, fontSize: 14 }} >Move the jewelry to the current location</Text>
          </View>
          <Text style={{ textAlign: "right", color: colors.grey }} >15/4/2020 | 9.000 am</Text>
          <Text style={{ color: colors.grey, marginHorizontal: WIDTH * 0.01 }}>Lorem Ipsum has been the and standard  text ever since the 1500s,</Text>
          <View style={{borderWidth:1,borderColor:colors.borderGrey,width:WIDTH}} />
          <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
            <Text style={{ color: colors.grey, fontSize: 14 }} >Move the jewelry to the current location</Text>
          </View>
          <Text style={{ textAlign: "right", color: colors.grey }} >15/4/2020 | 9.000 am</Text>
          <Text style={{ color: colors.grey, marginHorizontal: WIDTH * 0.01 }}>Lorem Ipsum has been the and standard  text ever since the 1500s,</Text>
          <View style={{borderWidth:1,borderColor:colors.borderGrey,width:WIDTH}} />
          <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
            <Text style={{ color: colors.grey, fontSize: 14 }} >Move the jewelry to the current location</Text>
          </View>
          <Text style={{ textAlign: "right", color: colors.grey }} >15/4/2020 | 9.000 am</Text>
          <Text style={{ color: colors.grey, marginHorizontal: WIDTH * 0.01 }}>Lorem Ipsum has been the and standard  text ever since the 1500s,</Text>
          <View style={{borderWidth:1,borderColor:colors.borderGrey,width:WIDTH}} />
          <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
            <Text style={{ color: colors.grey, fontSize: 14 }} >Move the jewelry to the current location</Text>
          </View>
          <Text style={{ textAlign: "right", color: colors.grey }} >15/4/2020 | 9.000 am</Text>
          <Text style={{ color: colors.grey, marginHorizontal: WIDTH * 0.01 }}>Lorem Ipsum has been the and standard  text ever since the 1500s,</Text>
          <View style={{borderWidth:1,borderColor:colors.borderGrey,width:WIDTH}} />
          <View style={{ alignItems: "center", marginTop: HEIGHT * 0.03 }} >
            <Text style={{ color: colors.grey, fontSize: 14 }} >Move the jewelry to the current location</Text>
          </View>
          <Text style={{ textAlign: "right", color: colors.grey }} >15/4/2020 | 9.000 am</Text>
          <Text style={{ color: colors.grey, marginHorizontal: WIDTH * 0.01 }}>Lorem Ipsum has been the and standard  text ever since the 1500s,</Text>
        </View>
      </MainContainer>
    </View>
  )
}

export default NotificatonScreen