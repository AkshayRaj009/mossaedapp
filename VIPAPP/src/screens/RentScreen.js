import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { headerRightLogo, LeftArrow, rentBoat, Bikeimage } from '../assests';
import Animated, { BounceInDown } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { rent } from '../Redux/actions/CommonActions';
import HeaderComponent from '../components/HeaderComponent';
import ServicesComponent from '../components/ServicesComponent';
import ButtonComponent from '../components/ButtonComponent';
import Feather from 'react-native-vector-icons/Feather';

const RentScreen = ({ navigation }) => {
    const [state, setState] = useState({
        beach: false,
        desert: false
    })

    const RentData = [
        {
            id: 1,
            image: rentBoat,
            title: "BEACH",
            beachdata: () => beachfun(),
            bordercolor: state.beach ? "#0FC1A1" : "#0E1114",
            icon: state.beach ? <Feather name='check' size={20} color="#FFF" /> : "",
            color: state.beach ? "#0FC1A1" : "#fff",
            margintop: HEIGHT * 0.03
        },
        {
            id: 2,
            title: "DESERT",
            image: Bikeimage,
            beachdata: () => desertfun(),
            bordercolor: state.desert ? "#0FC1A1" : "#0E1114",
            icon: state.desert ? <Feather name='check' size={20} color="#FFF" /> : "",
            color: state.desert ? "#0FC1A1" : "#fff",
            margintop: 19

        },
    ]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(rent(state))
    }, [state])

    const beachfun = () => {
        setState({
            ...state,
            beach: true,
            desert: false
        })
    }

    const desertfun = () => {
        setState({
            ...state,
            beach: false,
            desert: true
        })
    }
    console.log("state", state);

    return (
        <View style={{ flex: 1, backgroundColor: "#0E1114" }} >
            <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.39 }}>
                <SafeAreaView>
                    <HeaderComponent drawerNavigation={() => navigation.goBack()} leftLogo={LeftArrow} Title="RENT" rightLogo={headerRightLogo} />
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.09, }}>
                        <Text style={{ color: "#fff", fontSize: 26, marginTop: 20 }}>CHOOSE TERRAIN</Text>
                        <Text style={{ color: "#fff", fontSize: 17, marginHorizontal: 40, textAlign: "center", marginVertical: 20 }}>Please Specify The Type Of Vehicles You Want,Desert Or Beach</Text>
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.14 }}>
                        <FlatList
                            horizontal
                            data={RentData}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <Animated.View entering={BounceInDown.delay(item.id * 450)} >
                                    <ServicesComponent bordercolor={item.bordercolor} onPressFn={() => item.beachdata()} images={item.image} titles={item.title} icon={item.icon} color={item.color} margintop={item.margintop} />
                                </Animated.View>
                            }
                        />
                    </View>
                    <View style={{ marginTop: HEIGHT * 0.09 }}>
                        <ButtonComponent buttonStyle={{ marginHorizontal: 25 }} title="NEXT" navigation={() => {
                            state.beach && navigation.navigate("RentCalenderScreen")
                            state.desert && navigation.navigate("RentCalenderScreen")
                        }
                        } />
                    </View>
                </SafeAreaView>
            </View>
            <View>
            </View>
        </View>
    )
}
export default RentScreen