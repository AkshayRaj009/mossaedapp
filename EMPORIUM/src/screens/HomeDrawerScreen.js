import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { drawerImage ,logOutIcon} from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { drawerData } from '../constants/FlatlistArray'

const HomeDrawerScreen = ({ navigation }) => {
    const [color, setColor] = useState(0)

    return (
        <View style={{ backgroundColor: "" }} >
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
                                    <Text style={{ paddingLeft: HEIGHT*0.04, fontSize: 17, color: color === index ? "#B89962" : "black" }} >{item.text}</Text>
                                </View>
                            </Pressable>
                        } />
                </View>
                <View style={{ borderWidth: 1, marginHorizontal: HEIGHT*0.05, borderColor: "#70707015", marginTop: HEIGHT * 0.0450 }} />
                <View style={{flexDirection:"row",marginHorizontal: 40, marginTop: HEIGHT * 0.05,alignItems:"center"}} >
                    <Image source={logOutIcon} />
                    <Pressable onPress={()=>{
                         AsyncStorage.removeItem("loggedIn")
                        // alert("hi")
                       setTimeout(()=>{navigation.navigate("GetStartedScreen")},1000) }} >
                    <Text style={{color:"#A8A398",paddingLeft: HEIGHT*0.04,fontSize:19}} >Log Out</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeDrawerScreen