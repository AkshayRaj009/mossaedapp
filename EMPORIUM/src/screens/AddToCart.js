import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, FlatList, Pressable, Platform } from 'react-native'
import { drawerIcon, bellIcon, ahmed, plus, minus, whiteHeart } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { cartDetails, cartDetails2 } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import ButtonComponent from '../components/ButtonComponent'

const AddToCart = ({ navigation }) => {
  const [color, setColor] = useState(0)
  const [hide, setHide] = useState([])
  const [count, setCount] = useState(0)
  const [count1, setCount2] = useState(0)
  const [showcolor, setShowColor] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    setCount(count - 1)
  }
  const incrementCount1 = () => {
    setCount2(count1 + 1)
  }
  const decrementCount2 = () => {
    setCount2(count1 - 1)
  }
  const handClick = (item, index) => {
    setHide(index)

    if (hide.includes(item.id)) {
      setHide(hide.filter((text) => text != item.id))
    } else {
      hide.push(item.id)
      setHide([...hide])
    }
  }
  return (
    <View style={{ backgroundColor: "#FFFFFF30", height: HEIGHT }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="CART" image={drawerIcon} />
        <ScrollView style={{ height: HEIGHT * 0.845 }} >
          <View style={{ marginHorizontal: 20, marginTop: HEIGHT * 0.03 }} >
            <View style={{ flexDirection: "row" }} >
              <Image source={ahmed} />
              <Text style={{ color: "black", fontSize: 13, marginHorizontal: 10, marginTop: 4, fontWeight: "600" }} >Sara Ahmed</Text>
            </View>
            <View style={{ marginTop: HEIGHT * 0.02, width: WIDTH, marginHorizontal: 0 }} >
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={cartDetails}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                  <View style={{ backgroundColor: "#fff", height: Platform.OS === 'ios' ? 210 : 220, marginHorizontal: 2, width: WIDTH * 0.297, marginHorizontal: HEIGHT * 0.01 }}  >
                    <Image style={{ alignSelf: "center", marginTop: 3 }} source={item.image} />
                    <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, borderColor: "#B89962", backgroundColor: "#B89962", position: "absolute", top: HEIGHT * 0.15, right: HEIGHT * 0.02 }} >
                      <Pressable onPress={() => setShowColor(index)} >
                        {showcolor === index ? <Image source={whiteHeart} /> : <Image style={{}} source={item.like} />}
                      </Pressable>
                    </View>
                    <View style={{ marginLeft: 10, marginTop: HEIGHT * 0.01 }} >
                      <Text style={{ fontWeight: "600" }} >{item.text}</Text>
                      <View style={{ flexDirection: "row" }} >
                        <Text style={{ paddingTop: 2, color: "#B89962", fontSize: 13 }} >{item.num}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10 }} >
                          <View style={{ backgroundColor: item.pinkolor, padding: 6, height: HEIGHT * 0.01, marginHorizontal: 6 }} />
                          <View style={{ backgroundColor: item.brown, padding: 6, height: HEIGHT * 0.01 }} />
                        </View>
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: HEIGHT * 0.01, marginLeft: 10 }} >
                        <Pressable style={{ width: WIDTH * 0.05, height: HEIGHT * 0.02, alignItems: "center" }} onPress={() => decrementCount2()}>
                          <Image source={minus} />
                        </Pressable>
                        <Text style={{}} >{count1}</Text>
                        <Pressable style={{ width: WIDTH * 0.05, height: HEIGHT * 0.02, alignItems: "center" }} onPress={() => incrementCount1()} >
                          <Image source={plus} />
                        </Pressable>
                      </View>
                    </View>
                  </View>
                }
              />
            </View>
          </View>
          <View style={{ marginHorizontal: 20, marginTop: Platform.OS === 'ios' ? 20 : 10, }} >
            <View style={{ flexDirection: "row" }} >
              <Image source={ahmed} />
              <Text style={{ color: "black", fontSize: 13, marginHorizontal: 10, marginTop: 4, fontWeight: "600" }} >Fahmi Khalid</Text>
            </View>
            <View style={{ height: HEIGHT * 0.3, marginTop: HEIGHT * 0.02, width: WIDTH, marginHorizontal: 0 }} >
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={cartDetails2}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                  <View>
                    <View style={{ backgroundColor: "#fff", height: Platform.OS === 'ios' ? 210 : 220, marginHorizontal: 2, width: WIDTH * 0.297, marginHorizontal: HEIGHT * 0.01 }}  >
                      <Image style={{ alignSelf: "center", marginTop: 3 }} source={item.image} />
                      <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, borderColor: "#B89962", backgroundColor: "#B89962", position: "absolute", top: HEIGHT * 0.15, right: HEIGHT * 0.02 }} >
                        <Pressable onPress={() => setColor(index)} >
                          {color === index ? <Image source={whiteHeart} /> : <Image style={{}} source={item.like} />}
                        </Pressable>
                      </View>
                      <View style={{ marginLeft: 10, marginTop: HEIGHT * 0.01 }} >
                        <Text style={{ fontWeight: "600" }} >{item.text}</Text>
                        <View style={{ flexDirection: "row" }} >
                          <Text style={{ paddingTop: 2, color: "#B89962", fontSize: 13 }} >{item.num}</Text>
                          <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10 }} >
                            <View style={{ backgroundColor: item.pinkolor, padding: 6, height: HEIGHT * 0.01, marginHorizontal: 6 }} />
                            <View style={{ backgroundColor: item.brown, padding: 6, height: HEIGHT * 0.01 }} />
                          </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop: HEIGHT * 0.01, marginLeft: 10 }} >
                          <Pressable style={{ width: WIDTH * 0.05, height: HEIGHT * 0.02, alignItems: "center" }} onPress={() => decrementCount()}>
                            <Image source={minus} />
                          </Pressable>
                          <Text>{count}</Text>
                          <Pressable style={{ width: WIDTH * 0.05, height: HEIGHT * 0.02, alignItems: "center" }} onPress={() => incrementCount()} >
                            <Image source={plus} />
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>
                }
              />
            </View>
          </View>
          <View style={{ backgroundColor: "#fff", height: HEIGHT * 0.13, marginTop: HEIGHT * 0.0 - 14 }} >
            <ButtonComponent navigation={() => navigation.navigate("CheckOutScreen")} title="CHECKOUT" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default AddToCart;