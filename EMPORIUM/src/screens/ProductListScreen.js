import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable, ImageBackground } from 'react-native'
import { bellIcon, blackBackArrow, homeProductImage, plusImage, whiteLove, ahmed } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { colors } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'

const ProductListScreen = ({ navigation }) => {
    return (
        <View>
            <ImageBackground style={{ flex: 1, height: HEIGHT * 0.57 }} source={homeProductImage} >
                <SafeAreaView>
                    <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} image={blackBackArrow} />
                </SafeAreaView>
            </ImageBackground>
            <View style={{ marginTop: HEIGHT * 0.6 }} >
                <View style={{ flexDirection: "row", alignItems: "center", position: "absolute", right: HEIGHT * 0.06, top: -49 }} >
                    <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.11, width: WIDTH * 0.11, borderRadius: WIDTH * 0.11 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962", flexDirection: "row", marginHorizontal: 10 }} >
                        <Image style={{}} source={whiteLove} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.11, width: WIDTH * 0.11, borderRadius: WIDTH * 0.11 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962", flexDirection: "row" }} >
                        <Image style={{ backgroundColor: "#B89962", marginHorizontal: 15 }} source={plusImage} />
                    </View>
                </View>
                <View style={{ marginHorizontal: 20 }} >
                    <View style={{ flexDirection: "row" }} >
                        <Image source={ahmed} />
                        <Text style={{ color: "black", fontSize: 13, marginHorizontal: 10, marginTop: 3 }} >Sara Ahmed</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }} >
                        <Text style={{ fontSize: 28, fontWeight: "bold" }} >HANDMADE SUIT</Text>
                        <Text style={{ textTransform: "uppercase", color: "#A8A398", marginTop: HEIGHT * 0.02 }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Text>
                        <Text style={{ fontWeight: '600', fontSize: 14, marginTop: HEIGHT * 0.02 }} >CHOOSE COLOR</Text>
                        <View style={{ marginTop: HEIGHT * 0.01 }} >
                            <FlatList
                                horizontal
                                data={colors}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{}} >
                                        <View style={{ backgroundColor: item.color, padding: 10, marginHorizontal: 24 }} />
                                    </View>
                                }
                            />
                        </View>
                        <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.05, justifyContent: "space-between" }} >
                            <Text style={{ fontSize: 25, fontWeight: "700" }} >79.9  QAR</Text>
                            <Pressable onPress={() => navigation.navigate("AddToCart")}>
                                <Text style={{ backgroundColor: "#B89962", textAlign: "center", color: "#fff", padding: 10 }} >ADD TO CART </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>


        </View>
    )
}

export default ProductListScreen