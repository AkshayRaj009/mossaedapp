import React from 'react'
import { View, Text, FlatList, Pressable, Image } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, memberMask, gold,goldMedal,VIPGold,rightArrow } from '../assests';
import { MemberShipData, profileData } from "../constants/FlatlistArray"
import HeaderComponent from '../components/HeaderComponent';

const MemberShipScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "black" }} >
            <View style={{  backgroundColor: "#181D23",height:HEIGHT*0.45,borderBottomLeftRadius:15,borderBottomRightRadius:15 }} >
                <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="MEMBERSHIP" />
                <View style={{ backgroundColor: "#0E1114", marginHorizontal: 30, height: HEIGHT * 0.25, marginTop: HEIGHT * 0.06, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", marginTop: 18, marginHorizontal: 20, alignItems: "center" }} >
                        <Text style={{ color: "#0FC1A1", fontSize: 27, fontWeight: "bold" }} >1038</Text>
                        <Text style={{ color: "#0FC1A1", marginTop: 10, paddingLeft: 6, fontSize: 16 }} >Points</Text>
                    </View>
                    <Text style={{ color: "#fff", marginHorizontal: 24, fontSize: 13 }}>Expiring On 30 Jun 2021</Text>
                    <Image style={{position:"absolute",right:0}}  source={memberMask} />
                    <View style={{marginTop:HEIGHT*0.08,marginHorizontal:20}} >
                        <View style={{flexDirection:"row"}} >
                            <View style={{backgroundColor:"#181D23",height:HEIGHT*0.07,width:WIDTH*0.15,borderRadius:14,justifyContent:"center",alignItems:"center"}} >
                                 <Image source={goldMedal} />
                            </View>
                            <View>
                                <Pressable style={{flexDirection:"row"}} onPress={()=>navigation.navigate("VipGoldScreen")} >
                                    <Image  source={VIPGold} />
                                    <Image style={{marginHorizontal:10}} source={rightArrow} />
                                </Pressable>
                            
                                <Text style={{color:"#fff",fontSize:13,marginTop:3,paddingLeft:7}} >Conduct More Leasing,Services And Construction To Get More...</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
            </View>
            <View style={{marginTop:21,marginHorizontal:20}} >
                 <Text style={{color:"#fff",fontSize:20}} >POINTS HISTORY</Text>
                 <View>
                    <FlatList
                    data={MemberShipData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,marginBottom:8}} >
                        <View style={{backgroundColor:"#181D23",padding:9,borderRadius:9}} >
                            <Image source={item.image} />
                            </View>
                        <View>
                        <Text style={{color:"#fff",paddingRight:HEIGHT*0.19,marginTop:-3,fontSize:20}} >{item.title}</Text>
                            <Text style={{color:"#636B74",fontSize:13}}>{item.text}</Text>
                            </View>
                        <Text style={{color:"#0FC1A1",marginTop:10,fontSize:19,fontWeight:"bold"}}>{item.numb}</Text>
                        </View>
                }
                    />
                 </View>
            </View>
        </View>

    )
}

export default MemberShipScreen