import React from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, drawerIcon } from "../assests/index"
import { checkoutDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import PaymentProgress from '../components/PaymentProgress'
import OrderDetailsComponent from '../components/OrderDetailsComponent'
import ButtonComponent from '../components/ButtonComponent'

const CheckOutScreen = ({navigation}) => {
    return (
        <View style={{ backgroundColor: "#FFFFFF25",height:HEIGHT }} >
            <SafeAreaView >
                <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="CHECKOUT" image={drawerIcon} />
                <View style={{marginTop:HEIGHT*0.01}} >
                <PaymentProgress />

                </View>
                <View style={{ marginTop: HEIGHT * 0.04 }} >
                    <FlatList
                        data={checkoutDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View style={{ backgroundColor: "#ffffff60", marginHorizontal: 20, height: HEIGHT * 0.19,marginTop:10 }} >
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: HEIGHT * 0.02, marginTop: HEIGHT * 0.02 }}>
                                    <Text style={{}} >{item.name}</Text>
                                    <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.05, width: WIDTH * 0.05, borderRadius: WIDTH * 0.5 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962" }} >
                                    </View>
                                </View>
                                <View style={{ borderWidth: 1, marginHorizontal: HEIGHT * 0.02, borderColor: "#DFE1DE", marginTop: HEIGHT * 0.01 }} />
                                <View style={{marginHorizontal:HEIGHT*0.02}} >
                                    <Text style={{ marginTop: HEIGHT * 0.03 }} >{item.num}</Text>
                                    <OrderDetailsComponent style1={{marginTop:HEIGHT*0.0-9}} addresStyle={{fontSize:13}} addresStyle1={{fontSize:13}} addresStyle2={{fontSize:13}} adress="5Th Capital MAll" adrres1="55 Al Remal Street" address2="Doha,Qatar" />
                                </View>
                            </View>
                        } />
                </View>
                <View style={{borderWidth:1.5,borderStyle:"dashed",borderColor:"#B89962",padding:12,marginHorizontal:WIDTH*0.09,marginTop:HEIGHT*0.02}} >
                    <Text style={{color:"#B89962",fontSize:22,textAlign:"center"}} >+ADD NEW ADDRESS</Text>
                </View>
                <View style={{marginTop:HEIGHT*0.11}} >
                    <ButtonComponent  navigation={()=>navigation.navigate("CheckOutPaymentScreen")} title="NEXT" />
                    <Text style={{color:"#A8A398",textAlign:"center",marginTop:HEIGHT*0.02}} >Cancel</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default CheckOutScreen 