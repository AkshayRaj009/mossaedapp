import React, { useCallback, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, Pressable } from 'react-native'
import { drawerIcon, bellIcon, searchIcon, whiteHeart, homeOfferImage } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { homeProduct, homeVendors, sliderData } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {
    const [color, setColor] = useState(false)
    const [scoll, setScroll] = useState(0)
    const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
        setScroll(viewableItems[0]?.index)
    }, []);

    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }
    return (
        <View style={{ backgroundColor: "#FFFFF30", flex: 1 }} >
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="HOME" image={drawerIcon} />
                <View style={{ marginTop: 15, borderWidth: 1, borderColor: "#B89962", borderRadius: 2, height: HEIGHT * 0.046, marginHorizontal: WIDTH * 0.06, justifyContent: "center", marginTop: HEIGHT * 0.024 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }} >
                        <Image source={searchIcon} />
                        <TextInput
                            autoFocus={true}
                            placeholder="Find Vendors"
                            style={{ paddingLeft: HEIGHT * 0.04, color: "black" }} placeholderTextColor={"#A8A398"} />
                    </View>
                </View>
                <View>
                    <FlatList
                        style={{ marginTop: -5 }}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        onViewableItemsChanged={_onViewableItemsChanged}
                        viewabilityConfig={_viewabilityConfig}
                        data={sliderData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ width: WIDTH }} >
                                <Image style={{ resizeMode: "cover", width: WIDTH * 0.99 }} source={item.image} />
                            </View>
                        } />
                </View>
                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", marginBottom: 14, marginTop: -20 }} >
                    <View style={{ height: scoll === 0 ? 5 : 4, width: scoll === 0 ? 5 : 4, backgroundColor: scoll === 0 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                    <View style={{ height: scoll === 1 ? 5 : 4, width: scoll === 1 ? 5 : 4, backgroundColor: scoll === 1 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                    <View style={{ height: scoll === 2 ? 5 : 4, width: scoll === 2 ? 5 : 4, backgroundColor: scoll === 2 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                    <View style={{ height: scoll === 3 ? 5 : 4, width: scoll === 3 ? 5 : 4, backgroundColor: scoll === 3 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                    <View style={{ height: scoll === 4 ? 5 : 4, width: scoll === 4 ? 5 : 4, backgroundColor: scoll === 4 ? "#B89962" : "#B8996230", borderRadius: WIDTH, marginRight: 4 }} />
                </View>
                <View style={{ marginHorizontal: WIDTH * 0.06 }} >
                    <Text style={{ fontSize: 13, fontWeight: '500', marginTop: HEIGHT * 0.001 }} >FEATURED PRODUCT</Text>
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList style={{ width: WIDTH  }}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) =>
                                <Pressable onPress={() => navigation.navigate(item.path)} style={{ backgroundColor: "#FFFFFF", paddingLeft: 4, paddingTop: 3, width: WIDTH * 0.302,  height: Platform.OS === 'ios' ? 183 : 189, marginHorizontal: WIDTH * 0.03, }} >
                                    <Image source={item.image} />
                                    <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.06, width: WIDTH * 0.06, borderRadius: WIDTH * 0.6 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962", position: "absolute", right: HEIGHT * 0.01, bottom:  Platform.OS === 'ios' ? 35 : 41, }]} >
                                        <Pressable onPress={() => setColor(index)} >
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
                        <View style={{ marginTop: HEIGHT * 0.01, width: WIDTH }} >
                            <FlatList
                                style={{ width: WIDTH }}
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={homeVendors}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <Pressable onPress={() => navigation.navigate(item.path)} style={{ backgroundColor: "#FFFFFF60", padding: 3, marginHorizontal: 5, alignItems: "center", height: HEIGHT * 0.11, borderRadius: 3 }} >
                                        <Image source={item.image} />
                                        <Text style={{ paddingTop: 7, paddingHorizontal: 8, fontSize: 12, fontWeight: '500' }} >{item.title}</Text>
                                    </Pressable>
                                } />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}
export default HomeScreen