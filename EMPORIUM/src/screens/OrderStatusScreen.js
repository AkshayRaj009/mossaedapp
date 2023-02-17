import React, { useCallback, useRef, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow, whiteHeart } from "../assests/index"
import { addressData, homeProduct, saraData, saraDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import SaraDetailsComponent from '../components/SaraDetailsComponent'

const OrderStatusScreen = ({ navigation }) => {

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
                return (
                    <View style={{}}>

                        <SaraDetailsComponent />
                    </View>
                )
            case "LANA":
                return (
                    // <FlatList

                    //     data={homeProduct}
                    //     keyExtractor={item => item.id}
                    //     renderItem={({ item }) =>
                    //         <View style={{ backgroundColor: "#FFFFFF", paddingLeft: 4, paddingTop: 3, marginHorizontal: 9, width: WIDTH }} >
                    //             <Image source={item.image} />
                    //             <View style={{ position: "absolute", right: 9, bottom: 34, backgroundColor: "#B89962", padding: 6, borderRadius: 15 }}>

                    //                 <Image source={item.like} />

                    //             </View>
                    //             <Text style={{ paddingTop: 7, paddingHorizontal: 8, fontWeight: '500' }} >{item.title}</Text>
                    //             <Text style={{ paddingHorizontal: 8, paddingTop: 2, color: "#B89962", fontSize: 12 }}>{item.text}</Text>
                    //         </View>
                    //     } />
                    <>
                    </>
                )
        }
    }
    return (
        <View style={{ backgroundColor: "#FFFFFF250" }} >
            <SafeAreaView>
                <HeaderComponent backnavigation={() => navigation.goBack()} color={{ color: "#313131" }} image2={bellIcon} title="ORDER#1236569" image={blackBackArrow} />
                <Text style={{ textAlign: "center", fontSize: 11, color: "#313131" }} >21,July,2019</Text>
                <View style={{ marginTop: HEIGHT * 0.04, marginHorizontal: HEIGHT * 0.02 }} >
                    <FlatList
                        data={addressData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{}}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                                    <Text style={{ fontSize: 18, fontWeight: "600" }} >{item.title}</Text>
                                    <Text style={{}} >{item.total}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: HEIGHT * 0.01 }}>
                                    <View>
                                        <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.adress}</Text>
                                        <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.adrres1}</Text>
                                        <Text style={{ fontSize: 15, color: "#A8A398" }} >{item.address2}</Text>
                                    </View>
                                    <View>
                                        <View style={{ paddingLeft: HEIGHT * 0.04 }} >
                                            <Text style={{ fontWeight: "600", fontSize: 18 }} >{item.num}</Text>
                                            <Text style={{ paddingLeft: 20, fontWeight: "600" }} >{item.qar}</Text>
                                        </View>
                                        <Text style={{}} >{item.card}</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        horizontal
                        data={saraDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: HEIGHT * 0.02 }} >
                                <Image source={item.image} />
                                <Pressable onPress={() => { ScrollView(index) }} >
                                    <Text style={{ paddingLeft: HEIGHT * 0.02 }}  >{item.text}</Text>
                                </Pressable>
                            </View>
                        }
                    />
                </View>
                <View>
                    <FlatList
                        horizontal
                        pagingEnabled={true}
                        scrollEnabled={false}
                        ref={ref}
                        viewabilityConfig={_viewabilityConfig}
                        data={saraData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <><View style={{}}>
                                {slideshow(item.case)}
                            </View>

                            </>
                        }
                    />
                </View>
            </SafeAreaView>

        </View>
    )
}

export default OrderStatusScreen