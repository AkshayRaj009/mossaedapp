import React from 'react'
import { View, FlatList, Image } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, profilePicture, camera } from '../assests';
import { editProfile } from "../constants/FlatlistArray"
import HeaderComponent from '../components/HeaderComponent'
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const EditProfileScreen = ({ navigation }) => {

   
    return (
        <View style={{ flex: 1, backgroundColor: "#181D23" }} >
            <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="EDIT PROFILE" />
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.03 }} >
                <Image style={{ shadowOpacity: 20 }} source={profilePicture} />
                <View style={{
                    height: WIDTH * 0.11, width: WIDTH * 0.11, borderRadius: WIDTH * 0.11 / 2, backgroundColor: "#0E1114", borderWidth: 1, position: "absolute", top: 43, alignItems:
                        "center", justifyContent: "center"
                }} >
                    <Image source={camera} />
                </View>
            </View>
            <View style={{ marginTop: HEIGHT * 0.09 }}>
    
                <FlatList 
                data={editProfile}
                keyExtractor={item => item.id}
          renderItem={({ item }) =>
          <View style={{marginBottom:20}} >
          <InputComponent inputText={item.title} inputstyle={{ backgroundColor: "black", height: HEIGHT * 0.07, marginHorizontal: 10, borderWidth: 1, borderRadius: 10 }} colors="#0E1216" />
          </View>
        }
                />
            </View>
            <View style={{marginTop:33}} >
            <ButtonComponent navigation={()=>navigation.navigate("HomeScreen")} buttonStyle={{marginHorizontal:10}} title="SAVE" />
            </View>
        </View>
    )
}

export default EditProfileScreen