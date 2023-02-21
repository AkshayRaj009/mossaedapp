import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { drawerImage } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { drawerData, homeProduct, homeVendors } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
const HomeDrawerScreen = ({ navigation }) => {
    const [color, setColor] = useState(false)

    return (
        <View>
            <Image source={drawerImage} />
            <SafeAreaView>
                <View style={{ marginTop: HEIGHT * 0.0 }} >
                    <FlatList
                        data={drawerData}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <Pressable onPress={() => {
                                setColor(index)
                                navigation.navigate(item.path)
                            }} style={{ marginHorizontal: 40, marginTop: HEIGHT * 0.05 }} >
                                <View style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Image style={{ tintColor: color === index ? "#B89962" : "black" }} source={item.image} />
                                    <Text style={{ marginLeft: 40, fontSize: 17, color: color === index ? "#B89962" : "black" }} >{item.text}</Text>
                                </View>
                            </Pressable>
                        } />
                </View>

            </SafeAreaView>
        </View>
    )
}

export default HomeDrawerScreen