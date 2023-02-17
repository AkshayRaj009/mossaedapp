import { View, Text, TextInput, SafeAreaView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { greenSearch, buttonLeftArrow, buttonRightArrow } from '../assests';
import { Chooselocation } from "../constants/FlatlistArray"
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ButtonComponent from '../components/ButtonComponent';



const ChooseLoactionScreen = ({ navigation }) => {
  const [input, setInput] = useState("")
  const [color, setColor] = useState(false)

  const Datafilter = Chooselocation.filter(item => input === "" ? item : item.title.includes(input))
  return (
    <View style={{ backgroundColor: "#0FC1A1", flex: 1 }}>

      <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.88, borderBottomRightRadius: 15, borderBottomLeftRadius: 15,overflow:"hidden" }} >
        <SafeAreaView>
          <View style={{ marginTop: 23 }}>
            <View style={{
              height: HEIGHT * 0.08, marginHorizontal: 30, backgroundColor: "#0E1114"
              , borderRadius: 8
            }}>
              <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 24, paddingHorizontal: 20 }}>
                <Image style={{ resizeMode: "contain" }} source={greenSearch} />
                <TextInput value={input} onChangeText={(text) => setInput(text)}
                  style={{ paddingHorizontal: 13, fontSize: 18, color: "#fff" }}
                  placeholder='Search'
                  placeholderTextColor={"#fff"}
                />
              </View>
            </View>
            <View style={{ marginTop: 19, marginHorizontal: 22 }}>
              <Text style={{ color: "#fff", fontSize: 20 }} >CHOOSE LOCATION</Text>
            </View>

              <View style={{ marginTop: 35,marginHorizontal:20 }}>
                <FlatList
                  data={Datafilter}
                  keyExtractor={item => item.id}
                  renderItem={({ item, index }) =>
                      <Animated.View entering={FadeInDown.delay(item.id * 380)} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#fff", marginBottom: 33, fontSize: 18 }}>{item.title}</Text>
                        <Pressable onPress={() => setColor(index)}>
                          <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.07, width: WIDTH * 0.07, borderRadius: WIDTH * 0.7 / 2, backgroundColor: color === index ? "#0FC1A1" : "#0E1114", borderColor: "#0FC1A1", borderWidth: 1 }} >
                            {color === index ? <Feather name='check' size={20} color="#FFF" /> : ""}
                          </View>
                        </Pressable>
                      </Animated.View>
                  }
                />
              </View>
          </View>

        </SafeAreaView>
      </View>
      <View style={{ marginTop: HEIGHT * 0.01 }} >
        <ButtonComponent buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="DONE" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow} navigation={() => navigation.navigate("WashingScreen")} />
      </View>
    </View>

  )
}

export default ChooseLoactionScreen