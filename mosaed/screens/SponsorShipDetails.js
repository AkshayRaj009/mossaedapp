import React, { useState } from 'react'
import { Dimensions, View, Text, ScrollView } from "react-native"
import HeaderComponent from './HeaderComponent';
import LinearGradient from 'react-native-linear-gradient';
import { rightbackarrow, tick } from '../../mosaed/assets/Images/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import ButtonScreen from './ButtonScreen';
import ModalComponent from './ModalComponent';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const SponsorShipDetails = () => {
    const [ModalVisible, setModalVisible] = useState(false)
    // const route = useRoute()
    const Data = useSelector((store) => store.CommonReducers.detailsdata);
    const navigation = useNavigation()
    // const { item } = route.params
    console.log("data==>.", Data);

    const DATA = [
        {
            id: 1,
            title: "NAME:",
            value: Data.WorkerFullName
        },
        {
            id: 2,
            title: "DATE OF BIRTH:",
            value: Data.DateofBirth.toLocaleDateString()
        },
        {
            id: 3,
            title: "NATIONALITY:",
            value: Data.Nationality.label
        },
        {
            id: 4,
            title: "SOCIAL STATUS:",
            value: Data.Socialstatus.label

        },
        {
            id: 5,
            title: "HOURLY RATE:",
            value: Data.Hourlyrate
        },
        {
            id: 6,
            title: "EXPERIENCE:",
            value: Data.Experience

        },
        // {
        //     id: 7,
        //     title: "ATTACHMENT CV:",
        // },
        // {
        //     id: 8,
        //     title: "WORKER IMAGE:",
        //     value: Data.WorkerFullName
        // }
    ]


    return (
        <>
            <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={["#387FDA", "#2ECBAA"]} style={{ position: "absolute", bottom: 640, right: -730, width: HEIGHT * 2.2, height: HEIGHT * 2.2, borderRadius: HEIGHT * 1.1, overflow: "hidden" }}></LinearGradient>
            <View style={{ height: HEIGHT * 0.30, }}>
                <HeaderComponent navigation={() => navigation.goBack()} title="Sponsorship Details" leftlogo={rightbackarrow} style1={{ color: "#fff", marginTop: 40, fontSize: 18 }} />
            </View>

            <View style={{ marginHorizontal: 35 }}>
                <Text style={{ textAlign: "center", fontSize: 18, color: "#A93226", fontWeight: "bold" }}>DETAILS</Text>
                <FlatList
                    scrollEnabled={false}
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <Text>{item.title}</Text>
                                <Text style={{ color: "#2E4053", marginHorizontal: 12, fontWeight: "bold" }}>{item.value}</Text>
                            </View>
                        </>
                    }
                />
            </View>
            <View style={{ backgroundColor: "#fff", width: WIDTH, height: HEIGHT * 0.11, position: "absolute", bottom: 5, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <ButtonScreen navigation={() => setModalVisible(true)} title="Submit" />
                <ModalComponent
                    button={true}
                    logo={tick}
                    style1={{ borderRadius: 20, height: HEIGHT * 0.38, width: WIDTH * 0.84 }}
                    style2={{}}
                    title="The Operation Is Complete"
                    title2="the worker has been sucessfully added"
                    visible={ModalVisible}
                    onPress={() => setModalVisible(!ModalVisible)}
                >
                </ModalComponent>
            </View>
        </>
    )
}

export default SponsorShipDetails
