import React from 'react'
import { View, Dimensions } from "react-native"
import { rightbackarrow } from '../assets/Images';
import ButtonScreen from './ButtonScreen';
import HeaderComponent from './HeaderComponent';
import TermsComponent from './TermsComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';



const TermsAndCondition = ({ navigation }) => {

    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

    const setData = async (value) => {
        await AsyncStorage.setItem('Interslidestatus2', value)
    }

    return (
        <>
            <View style={{ backgroundColor: "#30A9B7", height: HEIGHT * 0.15 }}>
                <HeaderComponent navigation={() => navigation.goBack()} title="TermsAndCondition" leftlogo={rightbackarrow} />
            </View>
            <TermsComponent />
            <View style={{ marginTop: 30 }}>
                <ButtonScreen style1={{marginTop:50}} navigation={() => {
                    navigation.navigate("DrawerScreen")
                    setData("value")
                }} title="I Agree" />

            </View>
        </>
    )
}

export default TermsAndCondition;