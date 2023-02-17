import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, vaccum, Towing } from '../assests';
import Animated, { BounceInDown } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { service } from '../Redux/actions/CommonActions';
import Feather from 'react-native-vector-icons/Feather';
import HeaderComponent from '../components/HeaderComponent';
import ServicesComponent from '../components/ServicesComponent';
import ButtonComponent from '../components/ButtonComponent';

const ServiceScreen = ({ navigation }) => {

  const [servicedetails, setServicedetails] = useState(
    {
      washing: false,
      towing: false
    }
  )
  const ServiceData = [
    {
      id: 1,
      title: "WASHING",
      image: vaccum,
      servicedata: () => washingfun(),
      bordercolor: servicedetails.washing ? "#0FC1A1" : "#0E1114",
      icon: servicedetails.washing ? <Feather name='check' size={20} color="#FFF" /> : "",
      color: servicedetails.washing ? "#0FC1A1" : "#fff",
      margintop: HEIGHT * 0
    },
    {
      id: 2,
      title: "TOWING",
      image: Towing,
      servicedata: () => towingfun(),
      bordercolor: servicedetails.towing ? "#0FC1A1" : "#0E1114",
      icon: servicedetails.towing ? <Feather name='check' size={20} color="#FFF" /> : "",
      color: servicedetails.towing ? "#0FC1A1" : "#fff",
      margintop: HEIGHT * 0.02
    }
  ]

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(service(servicedetails))
  })

  const washingfun = () => {
    setServicedetails({
      ...servicedetails,
      washing: true,
      towing: false

    })
  }
  const towingfun = () => {
    setServicedetails({
      ...servicedetails,
      washing: false,
      towing: true
    })
  }
  console.log("servicedetails", servicedetails);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.38, borderBottomRightRadius: 9, borderBottomLeftRadius: 9 }}>
        <SafeAreaView>
          <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="SERVICES" />
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.09, }}>
            <Text style={{ color: "#fff", fontSize: 26, marginTop: 20 }}>CHOOSE SERVICE</Text>
            <Text style={{ color: "#fff", fontSize: 17, marginHorizontal: 40, textAlign: "center", marginVertical: 20 }}>Please Choose The Type You Of Service You Want</Text>
          </View>
          <View style={{ marginTop: HEIGHT * 0.14 }}>
            <FlatList
              horizontal
              data={ServiceData}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <Animated.View entering={BounceInDown.delay(item.id * 450)} >
                  <ServicesComponent color={item.color} bordercolor={item.bordercolor} onPressFn={() => item.servicedata()} images={item.image} titles={item.title} icon={item.icon} margintop={item.margintop} />
                </Animated.View>
              }
            />
          </View>
          <View style={{ marginTop: HEIGHT * 0.10 }}>
            <ButtonComponent buttonStyle={{ marginHorizontal: 25 }} title="NEXT" navigation={() => {
              servicedetails.washing && navigation.navigate("ChooseLoactionScreen")
            }
            } />
          </View>
        </SafeAreaView>
      </View>
    </View>
  )
}
export default ServiceScreen