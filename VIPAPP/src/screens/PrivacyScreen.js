import React from 'react'
import { View, Text } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, profilePicture, camera } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import { ScrollView } from 'react-native-gesture-handler';

const PrivacyScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#181D23" }}   >
      <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="PRIVACY POLICY" />
      <ScrollView style={{ marginTop: 50, marginHorizontal: 20 }} >
        <Text style={{ color: "#fff", fontSize: 19, fontWeight: "bold" }} >LOREM IPSUM DOLOR SIT AMET,</Text>
        <Text style={{ color: "#fff", fontSize: 16 }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the  release of Letra </Text>
        <View style={{ marginTop: 22 }} >
          <Text style={{ color: "#fff", fontSize: 19, fontWeight: "bold" }} >DOLORE MAGNA ALIQUYAM ERAT,</Text>
          <Text style={{ color: "#fff", fontSize: 16 }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the  release of Letra </Text>
        </View>
        <View style={{ marginTop: 22 }} >
          <Text style={{ color: "#fff", fontSize: 19, fontWeight: "bold" }} >SED DIAM VOLUPTUA</Text>
          <Text style={{ color: "#fff", fontSize: 16 }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the  release of Letra </Text>
        </View>
        <Text style={{ color: "#fff", fontSize: 18, marginTop: 20 }} >Lorem ipsum dolor sit amet,</Text>
      </ScrollView>
    </View>
  )
}

export default PrivacyScreen