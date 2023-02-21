import React, { useRef } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow, whiteHeart, saraAhamed3 } from "../assests/index"
import { addressData, homeProduct, makeupData, makeupDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import HomeProductComponent from '../components/HomeProductComponent'
import OrderDetailsComponent from '../components/OrderDetailsComponent'
import SaraDetailsComponent from '../components/SaraDetailsComponent'
import ButtonComponent from '../components/ButtonComponent'
import OrderStausComponent from '../components/OrderStausComponent'

const OrderDetailsScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: "#ffffff700", height: HEIGHT }} >
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="ORDER DETAILS" image={blackBackArrow} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: HEIGHT * 0.02, marginHorizontal: HEIGHT * 0.033 }} >
                    <Image source={saraAhamed3} />

                    <Text style={{ paddingRight: HEIGHT * 0.16, fontWeight: "600" }} >Sara Ahmed</Text>
                    <Text style={{ color: "#A8A398", fontSize: 10 }} >21.July,2019</Text>

                </View>
                <View style={{ marginTop: HEIGHT * 0.03 }} >
                    <FlatList
                        horizontal
                        data={homeProduct}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <HomeProductComponent {...item} />
                        } />
                </View>
                <View>
                    <SaraDetailsComponent />
                    <View style={{ marginTop: HEIGHT * 0.05, marginHorizontal: HEIGHT * 0.02 }} >
                        <Text style={{ fontSize: 18, fontWeight: "600" }} >Order Status</Text>
                        <OrderStausComponent />
                    </View>

                </View>
                <View>
                    <View style={{ marginTop: HEIGHT * 0.05, marginHorizontal: HEIGHT * 0.02 }} >
                        <FlatList
                            data={addressData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <OrderDetailsComponent title={item.title} adress={item.adress} adrres1={item.adrres1} address2={item.address2} />
                            }
                        />
                    </View>
                </View>
            </SafeAreaView>

        </View>
    )
}

export default OrderDetailsScreen