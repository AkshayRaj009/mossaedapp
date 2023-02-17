import React from 'react'
import { View, Text, Image } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, homeScreenLogo, drawerBottomMask } from '../assests';
import HeaderComponent from '../components/HeaderComponent'

const AboutUS = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.31 }}>
        <View style={{ marginTop: 55 }}>
          <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="ABOUT US" />
        </View>
        <View style={{ alignItems: "center", marginTop: 31 }}>
          <Image source={homeScreenLogo} />
        </View>
        {/* <Image source={drawerBottomMask} /> */}
      </View>
        <View style={{marginVertical:26}} >
          <Text style={{ color: "#fff", fontSize: 19,textAlign:"center" }} >Vip_974</Text>
        </View>
        <Text style={{color:"#DBDBDB",marginHorizontal:20,fontSize:18}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latinprofessor at Hampden-Sydney College in Virginia</Text>
      </View>

  )
}

export default AboutUS