import React from 'react'
import { View, FlatList, Dimensions } from "react-native"
import HeaderComponent from './HeaderComponent';
import { rightbackarrow } from '../../mosaed/assets/Images/index';
import InputComponent from './InputComponent';
import ButtonScreen from './ButtonScreen';
import LinearGradient from 'react-native-linear-gradient';


const HEIGHT = Dimensions.get('window').width;
const WIDTH = Dimensions.get('window').height;

const ContactScreen = ({ navigation }) => {

  const DATA = [

    {
      id: "1",
      title: "Full Name"
    },
    {
      id: "2",
      title: "Email"
    },
    {
      id: "3",
      title: "Massage Title"
    },
    {
      id: "4",
      title: "Your Message"
    },
  ]

  return (
    <>
      <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={['#1373DF', "#319FBB", '#2ECBAA']} style={{ position: "absolute", bottom: 580, right: -225, left: -225, width: HEIGHT * 2.2, height: HEIGHT * 2.2, borderRadius: HEIGHT * 1.1 }}></LinearGradient>
      <View>
        <HeaderComponent navigation={() => navigation.goBack()} leftlogo={rightbackarrow} title="Contact Us" description="Please fill in the fields" style1={{ color: "#fff", marginTop: 40, fontSize: 20 }} text="below" style2={{ fontSize: 20 }} />
      </View>
      <View style={{ marginTop: 40 }}>
        <FlatList
          scrollEnabled={false}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <InputComponent textstyle={{ marginTop: 30 }} {...item} />
          }
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <ButtonScreen navigation={() => navigation.navigate("ServiceScreen")} title="Save" />
      </View>
    </>
  )
}

export default ContactScreen