import React, { useCallback, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable, ScrollView, RefreshControl, Platform } from 'react-native';
import { drawerIcon, bellIcon, searchIcon, whiteHeart, homeOfferImage, } from "../assests/index";
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { HEIGHT, WIDTH } from '../constants/Dimensions';
import { homeProduct, homeVendors, sliderData } from '../constants/FlatlistArray';
import { useDrawerProgress } from '@react-navigation/drawer';
import HeaderComponent from '../components/HeaderComponent';
import DropdownComponent from '../components/DropDownComponent';

const HomeScreen = ({ navigation }) => {
    const [color, setColor] = useState(false)
    const [scoll, setScroll] = useState(0)
    const [input, setInput] = useState("")
    const [refreshing, setRefreshing] = useState(false)
    console.log("input=============>>>>", input)

    const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems)
        console.log("Changed in this iteration", changed)
        setScroll(viewableItems[0]?.index)
    }, [])
    const _viewabilityConfig = { itemVisiblePercentThreshold: 50 }

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 3500)
    },)
    const drawerProgress = useDrawerProgress()
    const animationstyles = useAnimatedStyle(() => {
        const scaleX = interpolate(drawerProgress.value, [0, 1], [1, 0.8])
        const scaleY = interpolate(drawerProgress.value, [0, 0.6], [1, 0.9])
        return {
            transform: [{ scaleX }, { scaleY }],
            borderRadius: drawerProgress.value * 30
        }
    })
    return (
        <Animated.View style={[{ backgroundColor: "#FFFFF30", flex: 1 }, animationstyles]} >
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="HOME" image={drawerIcon} />
                <View style={{ borderWidth: 1, borderColor: "#B89962", borderRadius: 2, height: HEIGHT * 0.050, marginHorizontal: WIDTH * 0.071, justifyContent: "center", marginTop: HEIGHT * 0.022 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: WIDTH * 0.03 }} >
                        <Image source={searchIcon} />
                        {/* <DropdownComponent /> */}
                        <TextInput
                            onChangeText={(text) => setInput(text)}
                            autoFocus={true}
                            placeholder="Find Vendors"

                            style={{ paddingLeft: WIDTH * 0.07, color: "black" }} placeholderTextColor={"#A8A398"} />
                    </View>
                </View>
                <ScrollView refreshControl={<RefreshControl size="default" refreshing={refreshing} onRefresh={onRefresh} />}>
                    <View style={{ marginTop: HEIGHT * 0.004 }} >
                        <FlatList
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            onViewableItemsChanged={_onViewableItemsChanged}
                            viewabilityConfig={_viewabilityConfig}
                            data={sliderData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <View style={{ width: WIDTH }} >
                                    <Image style={{ resizeMode: "cover", width: WIDTH * 0.999 }} source={item.image} />
                                </View>
                            } />
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", marginBottom: HEIGHT * 0.03, marginTop: -20 }} >
                        <View style={{ height: scoll === 0 ? 5 : 4, width: scoll === 0 ? 5 : 4, backgroundColor: scoll === 0 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                        <View style={{ height: scoll === 1 ? 5 : 4, width: scoll === 1 ? 5 : 4, backgroundColor: scoll === 1 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                        <View style={{ height: scoll === 2 ? 5 : 4, width: scoll === 2 ? 5 : 4, backgroundColor: scoll === 2 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                        <View style={{ height: scoll === 3 ? 5 : 4, width: scoll === 3 ? 5 : 4, backgroundColor: scoll === 3 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                        <View style={{ height: scoll === 4 ? 5 : 4, width: scoll === 4 ? 5 : 4, backgroundColor: scoll === 4 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                    </View>
                    <ScrollView style={{ height: Platform.OS === 'ios' ? 360 : 420 }}>
                        <View style={{ marginHorizontal: WIDTH * 0.07 }} >
                            <Text style={{ fontSize: 14, fontWeight: '600' }} >FEATURED PRODUCT</Text>
                            <View style={{ marginTop: HEIGHT * 0.02, marginLeft: -10 }} >
                                <FlatList style={{ width: WIDTH }}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    data={homeProduct}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item, index }) =>
                                        <Pressable onPress={() => navigation.navigate(item.path)} style={{ backgroundColor: "#fff", height: Platform.OS === 'ios' ? 183 : 189, marginHorizontal: 2, width: WIDTH * 0.295, marginHorizontal: WIDTH * 0.03 }} >
                                            <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.003 }} >
                                                <Image source={item.image} />
                                            </View>
                                            <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.6 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962", position: "absolute", right: WIDTH * 0.02, bottom: Platform.OS === 'ios' ? 35 : 41 }]} >
                                                <Pressable style={{ width: WIDTH * 0.07, height: HEIGHT * 0.03, alignItems: "center", justifyContent: "center" }} onPress={() => setColor(index)} >
                                                    {color === index ? <Image source={whiteHeart} /> : <Image source={item.like} />}
                                                </Pressable>
                                            </View>
                                            <Text style={{ paddingTop: 7, paddingHorizontal: 8, fontWeight: '500' }} >{item.title}</Text>
                                            <Text style={{ paddingHorizontal: 8, paddingTop: 2, color: "#B89962", fontSize: 12 }}>{item.text}</Text>
                                        </Pressable>
                                    } />
                            </View>
                            <View style={{ marginTop: HEIGHT * 0.02 }} >
                                <Text style={{ color: "black", fontSize: 13, fontWeight: '500' }} >VENDORS</Text>
                                <View style={{ marginTop: HEIGHT * 0.01 }} >
                                    <FlatList
                                        style={{ width: WIDTH, height: HEIGHT * 0.134 }}
                                        showsHorizontalScrollIndicator={false}
                                        horizontal
                                        data={homeVendors}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) =>
                                            <Pressable onPress={() => {
                                                navigation.navigate(item.path)
                                            }} style={{ backgroundColor: "#FFFFFF60", padding: 3, marginHorizontal: 5, alignItems: "center", height: HEIGHT * 0.11, borderRadius: 3 }} >
                                                <Image source={item.image} />
                                                <Text style={{ paddingTop: 7, paddingHorizontal: 8, fontSize: 12, fontWeight: '500' }} >{item.title}</Text>
                                            </Pressable>
                                        } />
                                </View>
                            </View>
                        </View>
                        <Image source={homeOfferImage} />
                    </ScrollView>
                </ScrollView>
            </SafeAreaView>
        </Animated.View>
    )
}
export default HomeScreen