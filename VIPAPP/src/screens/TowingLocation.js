import React from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { rentmask, rentvip, LeftArrow, smallTowing,buttonLeftArrow,buttonRightArrow } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import TimeSlotComponent from '../components/TimeSlotComponent';
import BadriComponent from '../components/BadriComponent';
import PickupLocationComponent from '../components/PickupLocationComponent';
import ButtonComponent from '../components/ButtonComponent';

const TowingLocation = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#0FC1A1", flex: 1 }} >
      <View style={{ backgroundColor: "black", height: HEIGHT * 0.93, borderBottomRightRadius: 19, borderBottomLeftRadius: 19 }} >
        <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.31, borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }} >
          <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="LOCATIONS" />
          <View style={{ marginHorizontal: 20 }} >
            <BadriComponent text="3.5X6 M2" image={smallTowing} Title="TOWING SERVICE" />
          </View>
          <View style={{ marginTop: 12 }}>
            <TimeSlotComponent time="7:00 am to 12.00pm" timeStyle={{ color: "grey", marginHorizontal: HEIGHT * 0.07 }} />
          </View>
        </View>
        <View style={{ marginTop: 11, marginHorizontal: 20 }}>
          <Text style={{ color: "#fff", fontSize: 21 }} >ENTER LOCATION</Text>
          <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.31, marginTop: 20 }}>
            <PickupLocationComponent title="PICK UP" text1={{ color: "#0FC1A1" }} text2={{ color: "#0FC1A1" }} text3={{ color: "#0FC1A1" }} style2={{ marginTop: 18 }} text={{ marginTop: 12 }} arrowStyle={{ marginTop: 63 }} />
            <View style={{ marginTop: 20 }}>
              <PickupLocationComponent title="DROPOFF" text1={{ color: "#0FC1A1" }} text2={{ color: "#0FC1A1" }} text3={{ color: "#0FC1A1" }} style2={{ marginTop: 18 }} text={{ marginTop: 12 }} arrowStyle={{ marginTop: 63 }} />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 0 }}>
        <ButtonComponent LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} buttonStyle={{ marginHorizontal: 25 }} title="VIEW SERVICES" navigation={() => navigation.navigate("ServiceScreen")} />
      </View>
    </View>

  )
}

export default TowingLocation