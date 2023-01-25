import React from 'react'
import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import ButtonScreen from './ButtonScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const GetStartedScreen = ({ navigation }) => {

  const setData = async (value) => {
    await AsyncStorage.setItem('Interslidestatus', value)
  }

  const DATA = [
    {
      id: "1",
      title: "Home Services",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      backgroundColor: "#F93BC5",
      image: require("../assets/Images/houseimage.png"),
      startbtn: false
    },
    {
      id: "2",
      title: "Nursing",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      backgroundColor: "#387FDA",
      image: require("../assets/Images/nurseimage.png"),
      startbtn: false
    },
    {
      id: "3",
      title: "Guests Serving",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      backgroundColor: "#653DBC",
      image: require("../assets/Images/coffeeimage.png"),
      startbtn: false
    },
    {
      id: "4",
      title: "Sponsorship Transfer",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      backgroundColor: "#E88924",
      image: require("../assets/Images/transferimage.png"),
      startbtn: true,
    }
  ];
  return (
    <FlatList horizontal
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({ item }) =>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ backgroundColor: "#fff", height: HEIGHT * 0.50, marginHorizontal: 25, width: WIDTH * 0.80, borderRadius: 20 }}>
            <View style={{ backgroundColor: item.backgroundColor, height: HEIGHT * 0.30, borderRadius: 20 }}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ height: HEIGHT * 0.14, width: WIDTH * 0.31, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", borderRadius: 60, marginVertical: 40 }}>
                  <Image
                    source={item.image}
                  />
                </View>
              </View>
            </View>
            <Text style={{ marginVertical: 25, textAlign: "center", fontSize: 27, marginHorizontal: 34 }}>{item.title}</Text>
            <Text style={{ textAlign: "center", fontSize: 15 }}>{item.description}</Text>
            {item.startbtn && (
              <View style={{ marginTop: 30 }}>
                <ButtonScreen nav={navigation} title="Start" navigation={() => {
                  setData("value")
                  navigation.navigate('WelcomeScreen')
                }} />
              </View>
            )}
          </View>
        </View>
      }
    />
  )
}

export default GetStartedScreen;