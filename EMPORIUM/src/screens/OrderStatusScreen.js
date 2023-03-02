import React, { useRef, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow } from "../assests/index"
import { addressData, homeProduct, saraData, saraDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import SaraDetailsComponent from '../components/SaraDetailsComponent'
import OrderDetailsComponent from '../components/OrderDetailsComponent'
import HomeProductComponent from '../components/HomeProductComponent'

const OrderStatusScreen = ({ navigation }) => {
    const [color, setColor] = useState(0)
    const ref = useRef()
    const _viewabilityConfig = { itemVisiblePercentThreshold: 50 }
    const ScrollView = (index) => {
        ref.current.scrollToIndex({ animated: true, index: index })
    }
    console.log(HEIGHT * 0.0238);
    const slideshow = (type) => {
        switch (type) {
            case "SARA":
                return <View>
                    <SaraDetailsComponent status={true} title="Order Status" />
                    <View style={{ marginTop: HEIGHT * 0.04, }} >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
            case "LANA":
                return <View >
                    <SaraDetailsComponent status={true} title="Order Status" />
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
            case "AHMED":
                return <View style={{}}>
                    <SaraDetailsComponent status={true} title="Order Status" />
                    <View style={{ marginTop: HEIGHT * 0.02, }} >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
            case "AHMED2":
                return <View style={{}}>
                    <SaraDetailsComponent status={true} title="Order Status" />
                    <View style={{ marginTop: HEIGHT * 0.02, }} >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
        }
    }
    return (
        <View style={{ backgroundColor: "#FFFFFF250", height: HEIGHT }} >
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.goBack()} color={{ color: "#313131" }} image2={bellIcon} title="ORDER#1236569" image={blackBackArrow} />
                <Text style={{ textAlign: "center", fontSize: 11, color: "#313131" }} >21,July,2019</Text>
                <View style={{ marginTop: HEIGHT * 0.04, marginHorizontal: WIDTH * 0.028 }} >
                    <FlatList
                        data={addressData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <OrderDetailsComponent {...item} />
                        } />
                </View>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        style={{ marginHorizontal: HEIGHT * 0.013 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={saraDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View style={{ borderWidth: 1, alignItems: "center", justifyContent: "center", borderLeftColor: "transparent", borderRightColor: "transparent", borderColor: "#70707018", padding: 10 }} >
                                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: WIDTH * 0.0100 }} >
                                    <Image style={{ borderWidth: color === index ? 3 : 0, borderRadius: WIDTH, borderColor: "#B89962", shadowOpacity: 2 }} source={item.image} />
                                    <Pressable onPress={() => {
                                        ScrollView(index)
                                        setColor(index)
                                    }} >
                                        <Text style={{ textAlign: 'center', paddingLeft: HEIGHT * 0.0126, color: color === index ? "black" : "grey" }} >{item.text}</Text>
                                        <View style={{ paddingLeft: HEIGHT * 0.0 }} >
                                            <View style={{ position: 'absolute', top: HEIGHT * 0.0186, height: HEIGHT * 0.002, width: WIDTH * 0.3077, backgroundColor: color === index ? "#B89962" : "transparent", left: -44 }} />
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        } />
                </View>
                <View style={{ width: WIDTH }} >
                    <FlatList
                        showsHorizontalScrollIndicator={false}x
                        horizontal
                        pagingEnabled={true}
                        scrollEnabled={false}
                        ref={ref}
                        viewabilityConfig={_viewabilityConfig}
                        data={saraData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ width: WIDTH }}>
                                {slideshow(item.case)}
                            </View>
                        } />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default OrderStatusScreen