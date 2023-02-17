import React from 'react'
import { View, Text, Image} from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, cabanaSize } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const WashingSizeScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ backgroundColor: "#181D23", flex: 1 }}>
        <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="SIZE" titleStyle={{ fontSize: 20 }} />
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: 55, }}>
          <Image source={cabanaSize} />
          <Text style={{ color: "#fff", fontSize: 27, marginTop: 33 }}>CABAN SIZE</Text>
          <Text style={{ color: "#fff", fontSize: 19, marginHorizontal: 40, textAlign: "center", marginVertical: 20 }}>Please Enter The Cubicle Area To Be Washed In Square Meters</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <InputComponent inputText="Length" inputstyle={{ backgroundColor: "#0E1216", height: HEIGHT * 0.07, borderRadius: 10, marginVertical: 9, borderWidth: 1, width: WIDTH * 0.43 }} colors="#0E1216" />
          <InputComponent inputText="Width" inputstyle={{ backgroundColor: "#0E1216", height: HEIGHT * 0.07, borderRadius: 10, marginVertical: 9, borderWidth: 1, width: WIDTH * 0.43 }} colors="#0E1216" />
        </View>
        <View style={{marginTop:20}}>
        <ButtonComponent buttonStyle={{marginHorizontal:22}} navigation={()=>navigation.navigate("BadriService")} title="NEXT" />

        </View>
      </View>
    </>

  )
}

export default WashingSizeScreen