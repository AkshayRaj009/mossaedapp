import React from 'react'
import { View, Text, FlatList, Pressable, Image } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, memberMask, gold, goldMedal, VIPGold, vipGoldCircle, king } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import { vipGold } from '../constants/FlatlistArray';

const VipGoldScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }} >
      <View style={{ backgroundColor: "#0E1114", height: HEIGHT * 0.51 }} >
        <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="VIP-GOLD" />
        <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.04 }} >
          <Image source={vipGoldCircle} />
          <Image style={{ position: "absolute", top: HEIGHT * 0.03 }} source={king} />
          <View style={{marginTop:HEIGHT*0.-67}} >
            <Text style={{ color: "red" }} >1038</Text>
            <Text style={{ color: "#fff" }} >Completed</Text>
          </View>
          <View style={{marginTop:HEIGHT*0.06,alignItems:"center"}} >
             <Image source={VIPGold} />
          <Text style={{ color: "#fff",marginHorizontal:40,textAlign:"center" }} >Conduct More Rentals,Services And Builds To Get More Exclusive Points&Beneits</Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal:20}} >
        <Text style={{ color: "#fff",fontSize:20 }} >BENEFITS</Text>
        <View style={{marginTop:HEIGHT*0.04}} >
          <FlatList
          data={vipGold}
          keyExtractor={item=>item.id}
          renderItem={({item})=>
            <View style={{backgroundColor:"#181D23",marginBottom:20,height:HEIGHT*0.10,flexDirection:"row",alignItems:"center",paddingLeft:13}} >
              <View style={{backgroundColor:"#FFB300",width:WIDTH*0.13,height:HEIGHT*0.06,borderRadius:16,alignItems:"center",justifyContent:"center"}} >
                <Image source={item.image} />
                </View>
                <View style={{paddingLeft:15}} >
                   <Text style={{color:"#fff",fontSize:17,paddingTop:15}} >{item.title}</Text>
              <Text style={{color:"#fff"}} >{item.text}</Text>
                  </View>
            </View>
          }
          />
        </View>
      </View>
    </View>
  )
}

export default VipGoldScreen