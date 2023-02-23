import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable, Platform } from 'react-native'
import { drawerIcon, bellIcon, ahmed, plus, minus, whiteHeart, rightArrow, likeIcon } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { cartDetails, cartDetails2 } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import ButtonComponent from '../components/ButtonComponent'


const AddToCart = ({ navigation }) => {
  // const [color, setColor] = useState(0)
  const [hide, setHide] = useState([])
  const [showcolor, setShowColor] = useState(0)

  const handClick = (item, index) => {
    setHide(index)

    if (hide.includes(item.id)) {
      setHide(hide.filter((t) => t != item.id))
    } else {
      hide.push(item.id)
      setHide([...hide])
    }
  }

  return (
    <View style={{ backgroundColor: "#FFFFFF30", height: HEIGHT }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="CART" image={drawerIcon} />
        <View>
          <View style={{ marginHorizontal: 20, marginTop: HEIGHT * 0.03 }} >
            <View style={{ flexDirection: "row" }} >
              <Image source={ahmed} />
              <Text style={{ color: "black", fontSize: 13, marginHorizontal: 10, marginTop: 4, fontWeight: "600" }} >Sara Ahmed</Text>
            </View>
            <View style={{ height: HEIGHT * 0.3, marginTop: HEIGHT * 0.02, width: WIDTH, marginHorizontal: 0 }} >
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={cartDetails}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                  <View>
                    <View style={{ borderWidth: 2, backgroundColor: "#fff", width: WIDTH * 0.306, marginHorizontal: HEIGHT * 0.01, }}  >
                      <Image style={{ alignSelf: "center", marginTop: 3 }} source={item.image} />
                      <Pressable onPress={() => handClick(index)} style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, borderColor: "#B89962", backgroundColor: "#B89962", position: "absolute", top: HEIGHT * 0.15, right: HEIGHT * 0.02 }} >
                        {item.includes === index ? <Image source={whiteHeart} /> : <Image style={{}} source={likeIcon} />}
                      </Pressable>
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
                          <Image source={minus} />
                          <Text style={{}} >1</Text>
                          <Image source={plus} />
                        </View>
                      </View>
                    </View>
                  </View>
                }
              />
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: -29 }} >
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
                  <View style={{ backgroundColor: "#fff", height: HEIGHT * 0.246, marginHorizontal: 2, width: WIDTH * 0.309, marginHorizontal: HEIGHT * 0.01 }}  >
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
                        <Image source={minus} />
                        <Text style={{}} >1</Text>
                        <Image source={plus} />
                      </View>
                    </View>
                  </View>
                </View>
              }
            />
          </View>
        </View>
        <View style={{ backgroundColor: "#fff", height: HEIGHT }} >
          <ButtonComponent /* image={rightArrow} */ navigation={() => navigation.navigate("CheckOutScreen")} title="CHECKOUT" />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AddToCart;