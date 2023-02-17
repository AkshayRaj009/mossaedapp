import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { drawerIcon, bellIcon, searchIcon, homeMainImage, whiteHeart } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { homeProduct, homeVendors } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'

const HomeScreen = () => {
    const [color, setColor] = useState(false)
    return (
        <View>
            <SafeAreaView>
                <HeaderComponent image2={bellIcon} title="HOME" image={drawerIcon} />
                <View style={{ marginTop: 15, borderWidth: 1, borderColor: "#B89962", borderRadius: 2, height: HEIGHT * 0.050, marginHorizontal: 20, justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }} >
                        <Image source={searchIcon} />
                        <TextInput
                            autoFocus={true}
                            placeholder="Find Vendors"
                            style={{ paddingLeft: HEIGHT * 0.04, color: "black" }} placeholderTextColor={"#A8A398"} />
                    </View>
                </View>
                <View style={{ marginTop: 3 }} >
                    <Image source={homeMainImage} />
                </View>
                <View style={{ marginLeft: 30 }} >
                    <Text style={{ fontSize: 15, fontWeight: '500' }} >FEATURED PRODUCT</Text>
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList
                            horizontal
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                                <View style={{ backgroundColor: "#FFFFFF", paddingLeft: 4, paddingTop: 3, marginHorizontal: 9 }} >
                                    <Image source={item.image} />
                                    <View style={{ position: "absolute", right: 9, bottom: 34, backgroundColor: "#B89962", padding: 6, borderRadius: 15 }}>
                                        <Pressable onPress={() => setColor(index)} >
                                            {color === index ? <Image source={whiteHeart} /> : <Image source={item.like} />}
                                        </Pressable>
                                    </View>
                                    <Text style={{ paddingTop: 7, paddingHorizontal: 8, fontWeight: '500' }} >{item.title}</Text>
                                    <Text style={{ paddingHorizontal: 8, paddingTop: 2, color: "#B89962", fontSize: 12 }}>{item.text}</Text>
                                </View>
                            } />
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.03 }} >
                        <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }} >VENDORS</Text>
                        <View style={{ marginTop: HEIGHT * 0.02 }} >
                            <FlatList
                                horizontal
                                data={homeVendors}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>

                                    <View style={{ backgroundColor: "#FFFFFF60", padding: 3, marginHorizontal: 5, alignItems: "center", height: HEIGHT * 0.11, borderRadius: 3 }} >
                                        <Image source={item.image} />
                                        <Text style={{ paddingTop: 7, paddingHorizontal: 8, fontSize: 12, fontWeight: '500' }} >{item.title}</Text>
                                    </View>
                                } />
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}
export default HomeScreen