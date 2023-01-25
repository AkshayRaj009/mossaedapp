import React, { useState } from 'react'
import { View, Image, Text, FlatList, Pressable, Dimensions } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalComponent from './ModalComponent';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const DrawerScreen = ({ navigation }) => {
  const [ModalVisible, setModalVisible] = useState(false)

  const DATA = [
    {
      id: "1",
      image: require("../assets/Images/Homeimage.png"),
      title: "Home",
      color: "#3D989F",
      path: ""
    },
    {
      id: "2",
      image: require("../assets/Images/staffimage.png"),
      title: "MY Workers",
      path: "WorkersScreen"
    },
    {
      id: "3",
      image: require("../assets/Images/profileimage.png"),
      title: "Profile",
      path: "ProfileScreen"
    },
    {
      id: "9",
      image: require("../assets/Images/saveimage.png"),
      title: "Saved Workers",
      path: "SavedScreen"
    },
    {
      id: "4",
      image: require("../assets/Images/contactimage.png"),
      title: "Contact Us",
      path: "ContactScreen"
    },
    {
      id: "6",
      image: require("../assets/Images/termsconditionimage.png"),
      title: "Terms & Conditions",
    }
  ]

  return (
    <View style={{ marginTop: HEIGHT*0.13 }}>
      <View style={{ marginHorizontal: 30 }}>
        <Image
          source={require("../assets/Images/boyprofileimage.png")}
        />
        <Text style={{ marginVertical: 6, fontWeight: "bold", fontSize: 15 }}>Hisham Tourbaq</Text>
        <Text style={{ color: "grey", fontSize: 13 }}>+97444621428</Text>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <Pressable onPress={() => navigation.navigate(item.path)} style={{ marginTop: 40 }}>
            <View style={{ flexDirection: "row", marginHorizontal: 30, alignItems: "center" }}>
              <Image
                source={item.image}
              />
              <Text style={{ color: item.color, marginHorizontal: 20, fontSize: 13 }}>{item.title}</Text>
            </View>
          </Pressable>
        }
      />
      <Pressable style={{ marginHorizontal: 32, marginTop: 55, flexDirection: "row" }}  >
        <Image
          source={require("../assets/Images/logoutimage.png")}
        />
        <Text style={{ marginHorizontal: 26, fontSize: 13 }} onPress={() => setModalVisible(true)} >Log Out</Text>
        <ModalComponent
          style2={{ fontSize: 23, marginHorizontal: 60, textAlign: "center", color: "#ffff" }}
          style1={{ height: HEIGHT * 0.25, width: WIDTH * 0.75, backgroundColor: "#00000085" }}
          yes="Yes"
          title="Do you want to Log Out"
          titleNo="No"
          titleyes="Yes"
          visible={ModalVisible}
          onPress={() => setModalVisible(!ModalVisible)}
          navigation={() => {
            navigation.navigate("WelcomeScreen")
            AsyncStorage.removeItem('Interslidestatus2')
          }}
        />
      </Pressable>
      <Image style={{ position: "absolute", top: HEIGHT * 0.70, left: -9 }}
        source={require("../assets/Images/drawerbottomimage.png")}
      />
    </View>
  )
}

export default DrawerScreen;
