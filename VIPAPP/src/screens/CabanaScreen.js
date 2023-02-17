import React from 'react'
import { View, Text, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { headerRightLogo, LeftArrow } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import { CabanaData } from "../constants/FlatlistArray"

const CabanaScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <HeaderComponent leftLogo={LeftArrow} rightLogo={headerRightLogo} titleStyle={{ fontSize: 19 }} Title="CABANAS" drawerNavigation={() => navigation.goBack()} />
      <View style={{ height: HEIGHT, marginHorizontal: 12, marginTop: 10 }} >
        <FlatList
          data={CabanaData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Pressable onPress={() => navigation.navigate("CabanaDetails")} style={{ backgroundColor: "#181D23", marginTop: 15, borderRadius: 8 }}>
              <Image style={{ height: HEIGHT * 0.21, width: WIDTH * 0.94, borderRadius: 10 }} source={item.image} />
              <View style={{ marginHorizontal: 20, paddingTop: 8 }} >
                <Text style={{ color: "#fff", fontSize: 21 }} >{item.title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ color: "#FF5F00" }} >{item.text}</Text>
                  <Text style={{ color: "#fff", fontSize: 18 }} >{item.numb}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                  <Text style={{ color: "#fff" }}>{item.start}</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                    <Text style={{ color: "#0FC1A1", fontWeight: "bold", fontSize: 20 }}>{item.number}</Text>
                    <Text style={{ color: "#0FC1A1", fontSize: 10, marginLeft: 10 }}>{item.qar}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          }
        />
      </View>
    </View>
  )
}

export default CabanaScreen