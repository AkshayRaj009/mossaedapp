import React, { useRef, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import { addressData, homeProduct, saraData, saraDetails } from '../constants/FlatlistArray'
import { bellIcon, whiteTick3, blackBackArrow } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import OrderDetailsComponent from '../components/OrderDetailsComponent'
import SaraDetailsComponent from '../components/SaraDetailsComponent'
import HomeProductComponent from '../components/HomeProductComponent'
import HeaderComponent from '../components/HeaderComponent'
import PaymentProgress from '../components/PaymentProgress'
import ButtonComponent from '../components/ButtonComponent'

const CheckOutPaymentScreen = ({ navigation }) => {
    const [color, setColor] = useState(0)
    const ref = useRef()
    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }
    const ScrollView = (index) => {
        ref.current.scrollToIndex({ animated: true, index: index })
    }
    const slideshow = (type) => {
        switch (type) {
            case "SARA":
                return <View style={{ width: WIDTH }}>
                    <SaraDetailsComponent style1={{ marginTop: HEIGHT * 0. - 70 }} />
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList
                            style={{ height: HEIGHT * 0.273 }}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
            case "LANA":
                return <View style={{}}>
                    <SaraDetailsComponent />
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList
                            style={{ height: HEIGHT * 0.273 }}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <HomeProductComponent   {...item} />
                            } />
                    </View>
                </View>
            case "AHMED":
                return <View style={{}}>
                    <SaraDetailsComponent />
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
            case "AHMED2":
                return <View >
                    <SaraDetailsComponent />
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
        }
    }
    return (
        <View>
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="CHECKOUT" image={blackBackArrow} />
                <View style={{ marginTop: HEIGHT * 0.01, }} >
                    <PaymentProgress image1={whiteTick3} image={whiteTick3} borderColor={{ borderColor: "#B89962", borderWidth: 1.3 }} color={{ borderColor: "#B89962", backgroundColor: "#B89962" }} textStyle={{ color: "black" }} summaryStyle={{ color: "black" }} style3={{ backgroundColor: "#B89962" }} border={{ borderColor: "#B89962", borderWidth: 1.3 }} />
                </View>
                <View style={{ marginTop: HEIGHT * 0.02, marginHorizontal: HEIGHT * 0.02 }} >
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={addressData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <OrderDetailsComponent {...item} />
                        }
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={saraDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View>
                                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: HEIGHT * 0.01 }} >
                                    <Image source={item.image} />
                                    <Pressable onPress={() => {
                                        ScrollView(index)
                                        setColor(index)
                                    }} >
                                        <Text style={{ paddingLeft: HEIGHT * 0.02 }}  >{item.text}</Text>
                                    </Pressable>
                                </View>
                                <View style={{ width: WIDTH * 0.28, borderColor: color === index ? "#B89962" : "transparent", borderWidth: 1, marginHorizontal: WIDTH * 0.09, marginTop: HEIGHT * 0.003 }} />
                            </View>
                        }
                    />
                </View>
                <View style={{ width: WIDTH }} >
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        scrollEnabled={false}
                        ref={ref}
                        viewabilityConfig={_viewabilityConfig}
                        data={saraData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <>
                                <View style={{}}>
                                    {slideshow(item.case)}
                                </View>
                            </>
                        }
                    />
                </View>

            </SafeAreaView>
            <View style={{ marginTop: HEIGHT * 0.0 }} >
                <ButtonComponent navigation={() => navigation.navigate("CardDetailsScreen")} title="PAY" />
                <Pressable onPress={() => navigation.goBack()} >
                    <Text style={{ color: "#A8A398", textAlign: "center", marginTop: HEIGHT * 0.01 }} >Cancel</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CheckOutPaymentScreen