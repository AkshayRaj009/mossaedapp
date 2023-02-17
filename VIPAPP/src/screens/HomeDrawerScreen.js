import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native';
import { drawerProfile, drawer, logout, drawerBottomMask, drawerTopMask } from '../assests';
import { drawerData } from "../constants/FlatlistArray"
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import ModalComponent from '../components/ModalComponent';

const HomeDrawerScreen = ({ navigation }) => {
  const [color, setColor] = useState(false)
  const[ModalVisible,setModalVisible]=useState(false)

  return (
    <>
      <Image style={{ position: "absolute", top: 0, right: 0 }} source={drawerTopMask} />
      <View style={{ flex: 1, backgroundColor: "#181D23" }}>
        <SafeAreaView>
          <View style={{ marginTop: 24, marginHorizontal: 21 }}>
            <Image source={drawerProfile} />
            <Text style={{ color: "#fff", fontSize: 19, fontWeight: "bold", marginTop: 11 }}>Hisham TourBaq</Text>
            <View style={{ flexDirection: "row", marginTop: 9 }}>
              <Image source={drawer} />
              <Text style={{ color: "#0FC1A1", fontSize: 15, fontWeight: "bold", marginHorizontal: 4 }}>Gold</Text>
              <Text style={{ color: "#fff", fontSize: 15 }}>(1038) Point</Text>
            </View>
            <Pressable onPress={() => setColor(!color)} style={{ flexDirection: "row", backgroundColor: color ? "#0E1114" : "#0FC1A1", marginTop: 40, height: HEIGHT * 0.04, width: WIDTH * 0.45, alignItems: "center", borderRadius: 10 }}>
              <Pressable onPress={() => setColor(!color)}>
                <Text style={{ color: color ? "#fff" : "black", marginHorizontal: 27 }}>Arabic</Text>
              </Pressable>
              <Pressable onPress={() => setColor(!color)} style={{ backgroundColor: color ? "#0FC1A1" : "#0E1114", height: HEIGHT * 0.04, width: WIDTH * 0.22, alignItems: "center", justifyContent: "center", borderBottomRightRadius: 7, borderTopRightRadius: 7 }}>
                <Pressable onPress={() => setColor(!color)}>
                  <Text style={{ color: color ? "black" : "#fff" }}>English</Text>
                </Pressable>
              </Pressable>
            </Pressable>
            <View style={{ marginTop: 15 }}>
              <FlatList
                data={drawerData}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                  <Pressable onPress={() => navigation.navigate(item.path)}>
                    <View style={{ flexDirection: "row", marginVertical: 20 }}>
                      <Image style={{ marginHorizontal: 20 }} source={item.image} />
                      <Text style={{ color: "#fff", fontSize: 18 }}>{item.title}</Text>
                    </View>
                  </Pressable>
                }
              />
              <View style={{ flexDirection: "row", marginTop: 54 }}>
                <Image style={{ marginHorizontal: 20 }} source={logout} />
                <Pressable onPress={()=> setModalVisible(true)} >
                   <Text style={{ color: "#fff", fontSize: 18 }}>Logout</Text>
                </Pressable>
                <ModalComponent
                // style1={{ height: HEIGHT * 0.50, width: WIDTH * 0.90, marginTop: 11, borderRadius: 13 }}
                style2={{backgroundColor:"grey",width:WIDTH*0.70,height:HEIGHT*0.25}}
                titleStyle={{color:"black"}}
                visible={ModalVisible}
                onPress={() => setModalVisible(false)}
                textstyle={{color:"black",fontSize: 21,marginTop:0}}
                path="HomeScreen"
                buttonTitile="MY BUILDS"
                title="DO YOU WANT TO"
                text="LOG OUT"
                yes="Yes"
                No="No"                
            >
            </ModalComponent>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <Image style={{ position: "absolute", bottom: 0, left: 0 }} source={drawerBottomMask} />
      </View>
    </>

  )
}

export default HomeDrawerScreen