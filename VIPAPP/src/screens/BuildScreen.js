import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { HEIGHT } from "../constants/Dimensions"
import { LeftArrow, StandardImage, customImage } from '../assests';
import Animated, { BounceInDown } from 'react-native-reanimated';
import HeaderComponent from '../components/HeaderComponent'
import ServicesComponent from '../components/ServicesComponent';
import ButtonComponent from '../components/ButtonComponent';
import Feather from 'react-native-vector-icons/Feather';

const BuildScreen = ({ navigation }) => {
  const [build, setBuild] = useState({
    standard: false,
    custom: false
  })

  const BuildData = [

    {
      id: 1,
      image: StandardImage,
      title: "STANDARD",
      BuildData: () => standardfun(),
      bordercolor: build.standard ? "#0FC1A1" : "#0E1114",
      icon: build.standard ? <Feather name='check' size={20} color="#FFF" /> : "",
      color: build.standard ? "#0FC1A1" : "#fff",
      margintop: HEIGHT * 0

    },
    {
      id: 2,
      image: customImage,
      title: "CUSTOM",
      BuildData: () => customfun(),
      bordercolor: build.custom ? "#0FC1A1" : "#0E1114",
      icon: build.custom ? <Feather name='check' size={20} color="#FFF" /> : "",
      color: build.custom ? "#0FC1A1" : "#fff",
      margintop: HEIGHT * 0

    },
  ]

  const standardfun = () => {
    setBuild({
      ...build,
      standard: true,
      custom: false
    })
  }

  const customfun = () => {
    setBuild({
      ...build,
      standard: false,
      custom: true
    })
  }

  console.log("buld", build);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.40 }}>
        <SafeAreaView>
          <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="BUILD" />
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.09, }}>
            <Text style={{ color: "#fff", fontSize: 26, marginTop: 20 }}>CHOOSE TYPE</Text>
            <Text style={{ color: "#fff", fontSize: 17, textAlign: "center", marginTop: 20 }}>Please Choose The Build Type,</Text>
            <Text style={{ color: "#fff", fontSize: 17, textAlign: "center", }}>Standard Or Custom</Text>
          </View>
        </SafeAreaView>
      </View>
      <View style={{ marginTop: HEIGHT * 0.10 }}>
        <FlatList
          horizontal
          data={BuildData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Animated.View entering={BounceInDown.delay(item.id * 450)} >
              <ServicesComponent color={item.color} icon={item.icon} bordercolor={item.bordercolor} onPressFn={() => item.BuildData()} images={item.image} titles={item.title} margintop={item.margintop} />
            </Animated.View>
          }
        />
      </View>
      <View style={{ marginTop: HEIGHT * 0.10 }}>
        <ButtonComponent buttonStyle={{ marginHorizontal: 25 }} title="VIEW CABANAS" navigation={() => {
          build.standard && navigation.navigate("CabanaScreen")
          build.custom && navigation.navigate("CustomScreen")
        }} />
      </View>
    </View>
  )
}

export default BuildScreen