import React from 'react'
import { View, Text, FlatList,ScrollView } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow} from '../assests';
import HeaderComponent from '../components/HeaderComponent'
import { support } from '../constants/FlatlistArray';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';


const SupportScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: "#181D23" }}  >
         <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="SUPPORT" />
         <View style={{marginHorizontal:20,marginTop:HEIGHT*0.07}} >
         <Text style={{color:"#fff",fontSize:34}} >GIT IN TOUCH !</Text>
         <ScrollView >
          <View style={{marginTop:HEIGHT*0.06}} >
            <FlatList 
            data={support}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
              <View style={{marginBottom:20}} >
                 <InputComponent inputText={item.title} inputstyle={{ backgroundColor: "black", height: HEIGHT * 0.07, marginHorizontal: 10, borderWidth: 1, borderRadius: 10 }} colors="#0E1216" />
                </View>
            }
            />
            <View>
            <InputComponent inputText="Message" inputstyle={{ backgroundColor: "black", height: HEIGHT * 0.17, marginHorizontal: 10, borderWidth: 1, borderRadius: 10 }} colors="#0E1216" />
            </View>
          </View>
         </ScrollView>

         </View>
         <View style={{marginTop:HEIGHT*0.06}} >
            <ButtonComponent navigation={()=>navigation.navigate("HomeScreen")} buttonStyle={{marginHorizontal:16}} title="SEND" />
            </View>
    </View>
  )
}

export default SupportScreen