import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import { bellIcon, drawerIcon } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { addressDetails } from '../constants/FlatlistArray'
import ButtonComponent from '../components/ButtonComponent'
import HeaderComponent from '../components/HeaderComponent'
import OrderDetailsComponent from '../components/OrderDetailsComponent'
import Animated, { interpolate, useAnimatedStyle, FadeInLeft } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer'

const AddressScreen = ({ navigation }) => {
    const drawerProgress = useDrawerProgress()
    const animationstyles = useAnimatedStyle(() => {
        const scaleX = interpolate(
            drawerProgress.value,
            [0, 1.5],
            [1, 0.8]
        )
        const scaleY = interpolate(
            drawerProgress.value,
            [0, 0.4],
            [1, 0.9]
        )
        return {
            transform: [{ scaleX }, { scaleY }],
            borderRadius: drawerProgress.value * 30
        }
    })
    return (
        <View>
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.toggleDrawer()} image2={bellIcon} title="ADDRESSES" image={drawerIcon} />

                <Animated.View style={[{ marginTop: HEIGHT * 0.04 },animationstyles]} >

                    <FlatList
                        data={addressDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ backgroundColor: "#ffffff60", marginHorizontal: 20, height: HEIGHT * 0.19, marginTop: 10 }} >
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: HEIGHT * 0.02, marginTop: HEIGHT * 0.02 }}>
                                    <Text style={{}} >{item.name}</Text>
                                    <Image source={item.image} />
                                </View>
                                <View style={{ borderWidth: 1, marginHorizontal: HEIGHT * 0.02, borderColor: "#DFE1DE", marginTop: HEIGHT * 0.01 }} />
                                <View style={{ marginHorizontal: HEIGHT * 0.02 }} >
                                    <Text style={{ marginTop: HEIGHT * 0.03 }} >{item.num}</Text>
                                    <OrderDetailsComponent style1={{ marginTop: HEIGHT * 0.0 - 9 }} addresStyle={{ fontSize: 13 }} addresStyle1={{ fontSize: 13 }} addresStyle2={{ fontSize: 13 }} adress="5Th Capital MAll" adrres1="55 Al Remal Street" address2="Doha,Qatar" />
                                </View>
                            </View>
                        } />


                </Animated.View>
                <View style={{ marginTop: HEIGHT * 0.12 }} >
                    <ButtonComponent navigation={() => navigation.goBack()} title="ADD NEW ADRESSS" />

                </View>
            </SafeAreaView>

        </View>
    )
}

export default AddressScreen