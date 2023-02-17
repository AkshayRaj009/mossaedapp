import React, { useState } from 'react'
import { View, Text, FlatList,Image  } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { LeftArrow,Map,buttonRightArrow,buttonLeftArrow} from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';
import ModalComponent from '../components/ModalComponent';
import PickupLocationComponent from '../components/PickupLocationComponent';

const WaterTankCustom = ({ navigation }) => {
    const [ModalVisible, setModalVisible] = useState(false);

    return (
        <View style={{backgroundColor:"#0FC1A1",flex:1}} >
        <View style={{  backgroundColor: "#181D23",height:HEIGHT*0.94,borderBottomLeftRadius:17,borderBottomRightRadius:17 }} >
            <View style={{ backgroundColor: "black", height: HEIGHT * 0.25 }} >
                <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="CUSTOM" />
                <View>
                    <View style={{ marginTop: 29, marginHorizontal: 20 }} >
                        <Text style={{ color: "#fff", fontSize: 20 }} >NAME OF CUSTOMIZATION</Text>
                        <Text style={{ color: "#0FC1A1", fontSize: 17, marginTop: 8 }} >Step 13/13</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 38 }} >
                <Text style={{ fontSize: 20, color: "#fff" }} >NAME OF CUSTOMIZATION</Text>
                <View style={{ marginTop: 13 }}>
                    <TextInput style={{ height: HEIGHT * 0.07, backgroundColor: "black", borderRadius: 8, paddingLeft: 20,color:"#fff" }} />
                </View>
                <Text style={{color:"#fff",fontSize:18,marginTop:27,fontSize:20}} >ENTER LOCATION</Text>
                <Text style={{color:"#fff",marginTop:8}} >Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard </Text>
            </View>
            <View style={{backgroundColor:"black",height:HEIGHT*0.34,marginHorizontal:24,marginTop:22,alignItems:"center",justifyContent:"center"}} >
                <Image source={Map} />
                <PickupLocationComponent text1={{color:'grey'}} text2={{color:"grey"}} text3={{color:"grey"}} style2={{marginTop:-10}} arrowStyle={{ marginLeft: 20,marginTop:10,backgroundColor:0}} />
            </View>
        </View>
        <ModalComponent
              style2={{ height: HEIGHT * 0.45, width: WIDTH * 0.90, marginTop: 11, borderRadius: 13 }}
                visible={ModalVisible}
                onPress={() => setModalVisible(false)}
                path="MyActivitiesScreen"
                buttonTitile="MY BUILDS"
                title="REQUEST DONE SUCCESFULLY"
                text=" Thank you. The lease has been sucessful.You cxan follow the order from the My Rentals page "
                  buttonStatus
                  imagestatus
            >
            </ModalComponent>
        <ButtonComponent navigation={()=>  setModalVisible(true)}  style1={{ marginTop: -7 }} buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="SUMBIT" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow}
            />

        </View>

    )
}

export default WaterTankCustom