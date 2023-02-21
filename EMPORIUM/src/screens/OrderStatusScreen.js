import React, { useRef, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow, whiteHeart } from "../assests/index"
import { addressData, homeProduct, saraData, saraDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import SaraDetailsComponent from '../components/SaraDetailsComponent'
import OrderDetailsComponent from '../components/OrderDetailsComponent'
import HomeProductComponent from '../components/HomeProductComponent'

const OrderStatusScreen = ({ navigation }) => {

    const [color, setColor] = useState(false)
    const ref = useRef()
    const _viewabilityConfig = { itemVisiblePercentThreshold: 50 }
    const ScrollView = (index) => {
        ref.current.scrollToIndex({ animated: true, index: index })
    }
    console.log(HEIGHT*0.0238);
    const slideshow = (type) => {
        switch (type) {
            case "SARA":
                return <View style={{}}>
                    <SaraDetailsComponent status={true} title="Order Status" />
                    <View style={{ marginTop: HEIGHT * 0.04, }} >
                        <FlatList
                            contentContainerStyle={{ flexDirection: 'row' }}
                            data={homeProduct}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <HomeProductComponent navigation={() => navigation.navigate("OrderDetailsScreen")}  {...item} />
                            } />
                    </View>
                </View>
            case "LANA":
                return <View style={{}}>
                    <SaraDetailsComponent status={true} title="Order Status" />
                    <View style={{ marginTop: HEIGHT * 0.02 }} >
                        <FlatList
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
        <View style={{ backgroundColor: "#FFFFFF250",height:HEIGHT }} >
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.goBack()} color={{ color: "#313131" }} image2={bellIcon} title="ORDER#1236569" image={blackBackArrow} />
                <Text style={{ textAlign: "center", fontSize: 11, color: "#313131" }} >21,July,2019</Text>
                <View style={{ marginTop: HEIGHT * 0.04, marginHorizontal: HEIGHT * 0.02 }} >
                    <FlatList
                        data={addressData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <OrderDetailsComponent {...item} />
                        } />
                </View>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        horizontal
                        data={saraDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <View style={{ borderWidth: 1, alignItems: "center", justifyContent: "center", borderLeftColor: "transparent", borderRightColor: "transparent", borderColor: "#70707018" }} >
                                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: HEIGHT * 0.02 }} >
                                    <Image style={{borderWidth:color===index?2:0,borderRadius:WIDTH,borderColor:"#B89962",shadowOpacity:2}} source={item.image} />
                                    <Pressable onPress={() => {
                                        ScrollView(index)
                                        setColor(index)
                                    }} >
                                        <Text style={{textAlign:'center', paddingLeft: HEIGHT * 0.02, color: color === index ? "black" : "grey" }}  >{item.text}</Text>
                                        <View style={{ paddingLeft: HEIGHT * 0.02 }} >
                                            <View style={{position:'absolute',top:HEIGHT*0.0239,left:0, height:HEIGHT*0.002,width:WIDTH*0.3077,backgroundColor: color === index ? "#B89962" : "transparent",  }} />
                                        </View>

                                    </Pressable>
                                </View>
                            </View>

                        } />  
                        {/* <FlatList
                        horizontal
                        data={saraDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                                <View style={{ flexDirection: "row", alignItems: "center",width:WIDTH,borderWidth:1,borderColor:"grey", borderLeftColor: "transparent", borderRightColor: "transparent", borderColor: "#70707030",borderTopColor:"transparent"}} >
                                    <Pressable style={{}} onPress={() => {
                                        // ScrollView(index)
                                        // setColor(index)
                                        console.log("inde",color);
                                    }} >
                                        <View style={{ marginHorizontal:20,width:WIDTH*0.3,borderColor: color === item.id-1 ? "#B89962" : "grey", borderWidth: color === item.id-1 ? 1 : 0 }} />
                                    </Pressable>
                                
                            </View>

                        } /> */}

                </View>
              
                <View style={{ width: WIDTH }} >
                    <FlatList co
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