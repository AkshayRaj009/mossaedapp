import React from 'react'
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, fullScreen, Backgroundsuperjet, StarImage, buttonRightArrow,greenLocation, akshay,buttonLeftArrow } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import BechDetailsComponent from "../components/BechDetailsComponent"
import ButtonComponent from "../components/ButtonComponent"
import PickupLocationComponent from '../components/PickupLocationComponent';

const RentDetailsScreen = ({ navigation }) => {

  return (
    <>
      <View>
        <ImageBackground style={{ height: HEIGHT * 0.44 }} source={Backgroundsuperjet} resizeMode="cover" >
          <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} rightLogo={fullScreen} Title="RENT" />
        </ImageBackground>
        <View style={{ flex: 1, marginTop: -41 }}> 
          <View style={{ backgroundColor: "#0FC1A1", height: HEIGHT * 0.63 }}>
            <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.54, borderTopRightRadius: 16, borderTopLeftRadius: 16, borderBottomLeftRadius: 20, borderBottomRightRadius: 20   }}>
              <View style={{ backgroundColor: "#0E1114", height: HEIGHT * 0.17, borderTopRightRadius: 16, borderTopLeftRadius: 16, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <BechDetailsComponent style1={{ backgroundColor: "#0E1114", height: HEIGHT * 0.17, marginTop: 0, borderTopRightRadius: 12, borderTopLeftRadius: 12, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }} title="2021 FX SVHO" titlecolor={{ color: "#0FC1A1" }} starimage={StarImage} text="Yamaha" locationTitle="2021 Crusing, 2021 Yamaha Waverunners" number="50" Qar="QAR/hour" numberStyle={{ marginLeft: 0 }} numberstyle1={{ fontSize: 32 }} />
              </View>
              <View style={{ marginHorizontal: 20, marginTop: 16 }}>
                <PickupLocationComponent title="PICK UP LOCATION" />
                <Text style={{ color: "#fff",marginTop:11,fontSize:20 }}>DETAILS</Text>
                <Text style={{ color: "#fff",marginTop:10,fontSize:15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Text  style={{ color: "#fff",marginTop:15,fontSize:15 }}>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged  </Text>
              </View>
            </View>
            <ButtonComponent buttonStyle={{ borderLeftRadius: 20, borderWidth: 0,backgroundColor:0 }} title="RENT NOW" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} navigation={() => navigation.navigate("SummaryScreen")}/>
          </View>

        </View>
      </View>

    </>

  )
}

export default RentDetailsScreen