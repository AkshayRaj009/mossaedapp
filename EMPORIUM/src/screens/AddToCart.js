import React from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { drawerIcon, bellIcon, ahmed, plus, minus } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { cartDetails, cartDetails2, homeProduct, homeVendors } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import ButtonComponent from '../components/ButtonComponent'

const AddToCart = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "#FFFFFF30" ,height:HEIGHT}} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={()=>navigation.goBack()} image2={bellIcon} title="CART" image={drawerIcon} />
        <View>
          <View style={{ marginHorizontal: 20, marginTop: HEIGHT * 0.03 }} >
            <View style={{ flexDirection: "row" }} >
              <Image source={ahmed} />
              <Text style={{ color: "black", fontSize: 13, marginHorizontal: 10, marginTop: 4, fontWeight: "600" }} >Sara Ahmed</Text>
            </View>
            <View style={{ height: HEIGHT * 0.3, marginTop: HEIGHT * 0.02, width: WIDTH, marginHorizontal: 0 }} >
              <FlatList
                horizontal
                data={cartDetails}
                keyExtractor={item => item.id}
                renderItem={({ item, }) =>
                  <View>
                    <View style={{ backgroundColor: "#fff", padding: 0, height: HEIGHT * 0.240, marginHorizontal: 2 }}  >
                      <Image style={{ alignSelf: "center" }} source={item.image} />
                      <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, borderColor: "#B89962", backgroundColor: "#B89962", position: "absolute", top: HEIGHT * 0.15, right: HEIGHT * 0.05 }} >
                        <Image style={{}} source={item.like} />
                      </View>
                      <View style={{ marginLeft: 30, marginTop: HEIGHT * 0.01 }} >
                        <Text style={{ fontWeight: "600" }} >{item.text}</Text>
                        <View style={{ flexDirection: "row" }} >
                          <Text style={{ paddingTop: 2, color: "#B89962", fontSize: 13 }} >{item.num}</Text>
                          <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 20 }} >
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
        <View style={{ marginHorizontal: 20,marginTop:-29 }} >
          <View style={{ flexDirection: "row" }} >
            <Image source={ahmed} />
            <Text style={{ color: "black", fontSize: 13, marginHorizontal: 10, marginTop: 4, fontWeight: "600" }} >Fahmi Khalid</Text>
          </View>
          <View style={{ height: HEIGHT * 0.3, marginTop: HEIGHT * 0.02, width: WIDTH,marginHorizontal:0 }} >
              <FlatList
                horizontal
                data={cartDetails2}
                keyExtractor={item => item.id}
                renderItem={({ item, }) =>
                <View>
                  <View style={{ backgroundColor: "#fff", padding: 0, height: HEIGHT * 0.240, marginHorizontal: 2 }}  >
                    <Image style={{ alignSelf: "center" }} source={item.image} />
                    <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.06 / 2, borderColor: "#B89962", backgroundColor: "#B89962", position: "absolute", top: HEIGHT * 0.15, right: HEIGHT * 0.05 }} >
                      <Image style={{}} source={item.like} />
                    </View>
                    <View style={{ marginLeft: 30, marginTop: HEIGHT * 0.01 }} >
                      <Text style={{ fontWeight: "600" }} >{item.text}</Text>
                      <View style={{ flexDirection: "row" }} >
                        <Text style={{ paddingTop: 2, color: "#B89962", fontSize: 13 }} >{item.num}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 20 }} >
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
        <View style={{backgroundColor:"#fff",height:HEIGHT*0.17,marginTop:HEIGHT*0.-18}} >
          <ButtonComponent navigation={()=>navigation.navigate("CheckOutScreen")} title="CHECHOUT" />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AddToCart;