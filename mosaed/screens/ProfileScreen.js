import React, { useState } from 'react'
import { View, Image, Dimensions } from "react-native"
import HeaderComponent from './HeaderComponent'
import { rightbackarrow } from '../../mosaed/assets/Images/index';
import { TextInput } from 'react-native-gesture-handler';
import ButtonScreen from './ButtonScreen';
import LinearGradient from 'react-native-linear-gradient';

const HEIGHT = Dimensions.get('window').width;
const WIDTH = Dimensions.get('window').height;

const ProfileScreen = ({ navigation }) => {
    const [hidepassword, setHidepassword] = useState()
    
    return (
        <>
            <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={['#1373DF', "#319FBB", '#2ECBAA']} style={{ position: "absolute", bottom: 580, right: -700, width: HEIGHT * 4.6, height: HEIGHT * 4.6, borderRadius: HEIGHT * 3 }}></LinearGradient>
            <View>
                <HeaderComponent navigation={() => navigation.goBack()} title="Profile" leftlogo={rightbackarrow} />
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                    <Image style={{ width: WIDTH * 0.13, height: HEIGHT * 0.28, opacity: 0.60 }}
                        source={require("../assets/Images/boyprofileimage.png")}
                    />
                    <Image style={{ position: "absolute", top: 40 }}
                        source={require("../assets/Images/cameraimage.png")}
                    />
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 80 }}>
                    <TextInput style={{ borderWidth: 1, width: WIDTH * 0.33, height: HEIGHT * 0.13, borderRadius: 8, borderColor: 'grey' }}
                        placeholder="Full Name"
                    />
                    <TextInput
                        secureTextEntry={hidepassword}
                        style={{ borderWidth: 1, width: WIDTH * 0.33, height: HEIGHT * 0.13, borderRadius: 8, borderColor: 'grey', marginVertical: 40 }}
                        placeholder="Phone number"
                    />
                </View>
                <ButtonScreen navigation={() => navigation.navigate("ServiceScreen")} title="Save Changes" />
            </View>
        </>
    )
}

export default ProfileScreen