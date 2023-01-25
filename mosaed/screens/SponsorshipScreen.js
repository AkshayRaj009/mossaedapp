import React, { useEffect, useState } from 'react'
import { Dimensions, View, Text, ScrollView, TextInput, Pressable, Image } from "react-native"
import { rightbackarrow } from '../../mosaed/assets/Images/index';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Sponsorship } from '../Redux/actions/CreateActions';
import ButtonScreen from './ButtonScreen';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import calender from "../../mosaed/assets/Images/calendar.png"
import DatePicker from 'react-native-date-picker'
import HeaderComponent from './HeaderComponent';


const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const nationality = [
    { label: 'America', value: '1' },
    { label: 'USA', value: '2' },
    { label: 'Cananda', value: '3' },
    { label: 'China', value: '4' },
    { label: 'Uk', value: '5' },
    { label: 'Paris', value: '6' },
    { label: 'India', value: '7' },
    { label: 'Japan', value: '8' },
];
const socialstatus = [
    { label: 'America', value: '1' },
    { label: 'USA', value: '2' },
    { label: 'Cananda', value: '3' },
    { label: 'China', value: '4' },
    { label: 'Uk', value: '5' },
    { label: 'Paris', value: '6' },
    { label: 'India', value: '7' },
    { label: 'Japan', value: '8' },
];

const SponsorshipScreen = ({ navigation }) => {
    // const [ModalVisible, setModalVisible] = useState(false)
    const [imagepicker, setImagepicker] = useState()
    const [isFocus, setIsFocus] = useState(false)
    const [focus, setFocus] = useState(false)
    const [open, setOpen] = useState(false)
    const [store, setStore] = useState({
        WorkerFullName: "", DateofBirth: new Date(), Nationality: "", Socialstatus: "", Hourlyrate: "", Experience: "", imagepicker: ""
    })

    const gotoimagePicker = () => {
        ImagePicker.openPicker({
            mediaType: "photo"
        }).then(image => {
            setImagepicker(image.filename)
            console.log("image ====>>", image)
        });
    }
    const gotodocumentpicker = () => {
        DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        })
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Sponsorship(store))
    }, [store])

    console.log("Data", store);
    return (
        <>
            <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={["#387FDA", "#2ECBAA"]} style={{ position: "absolute", bottom: 640, right: -730, width: HEIGHT * 2.2, height: HEIGHT * 2.2, borderRadius: HEIGHT * 1.1, overflow: "hidden" }}></LinearGradient>
            <View style={{ height: HEIGHT * 0.16, }}>
                <HeaderComponent navigation={() => navigation.goBack()} title="Sponsorship Transfer" leftlogo={rightbackarrow} style1={{ color: "#fff", marginTop: 40, fontSize: 18 }} style={{ marginLeft: -25 }} description="Please fill in the fields" text="below" />
            </View>
            <ScrollView style={{ marginTop: HEIGHT * 0.09, marginBottom: HEIGHT * 0.10 }}>
                <DatePicker
                    modal
                    open={open}
                    date={store.DateofBirth}
                    onConfirm={(date) => {
                        setOpen(false)
                        store.DateofBirth = date
                        setStore({ ...store })
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }} />
                <View style={{ height: HEIGHT * 0.07, borderWidth: 1, borderColor: "grey", marginHorizontal: 35, borderRadius: 10, marginVertical: 20, fontSize: 13, padding: 10 }}>
                    <Text style={{ color: "grey" }}>WorkerFullName</Text>
                    <TextInput
                        onChangeText={Text => {
                            setStore({ ...store, WorkerFullName: Text })
                            console.log("text", Text)
                        }}
                        placeholderTextColor={"grey"}
                        style={{ height: HEIGHT * 0,/*  paddingLeft: 15, paddingBottom: 23, marginHorizontal: 35, borderRadius: 10, marginVertical: 20, fontSize: 13, paddingTop: 9  */ }}
                    />
                </View>
                <View style={{ borderWidth: 1, borderColor: "grey", height: HEIGHT * 0.07, paddingLeft: 15, paddingBottom: 23, marginHorizontal: 35, borderRadius: 10 }}>
                    <Text style={{ color: "grey", fontSize: 13, paddingTop: 9 }}>Date of Birth</Text>
                    <Text style={{ paddingLeft: 10 }}>{store.DateofBirth.toLocaleDateString()}</Text>
                    <Pressable onPress={() => setOpen(true)}>
                        <Image style={{ position: "absolute", right: 15, top: -13 }} source={calender} />
                    </Pressable>
                </View>
                <View style={{ marginHorizontal: 35, marginVertical: 20 }}>
                    <Text style={{ position: "absolute", top: 10, left: 10, color: "grey", fontSize: 13 }}>Nationality</Text>
                    <Dropdown
                        placeholderStyle={{ color: "grey" }}
                        selectedTextStyle={{ fontSize: 15, marginTop: 18, marginLeft: 20 }}
                        data={nationality}
                        maxHeight={300}
                        itemContainerStyle={{ backgroundColor: "#85929E", shadowOpacity: 0.1, shadowRadius: 0.2, elevation: 2 }}
                        labelField="label"
                        valueField="value"
                        value={store.Nationality}
                        placeholder={!isFocus ? '' : '...'}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            store.Nationality = item
                            setStore({ ...store });
                            setIsFocus(false);
                            // console.log("item==>",item);
                        }}
                        style={{
                            borderColor: 'grey',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            height: HEIGHT * 0.07,
                            paddingHorizontal: 8,
                        }} />
                </View>
                <View style={{ marginHorizontal: 35 }}>
                    <Text style={{ position: "absolute", top: 10, left: 10, color: "grey", fontSize: 13 }}>Social status</Text>
                    <Dropdown
                        placeholderStyle={{ color: "grey" }}
                        selectedTextStyle={{ fontSize: 15, fontSize: 15, marginTop: 18, marginLeft: 20 }}
                        data={socialstatus}
                        maxHeight={220}
                        itemContainerStyle={{ backgroundColor: "#85929E", shadowOpacity: 0.1, shadowRadius: 0.2, elevation: 2 }}
                        labelField="label"

                        valueField="value"
                        value={store.Socialstatus}
                        placeholder={!focus ? '' : '...'}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        onChange={item => {
                            setFocus(false);
                            store.Socialstatus = item
                            setStore({ ...store })
                            console.log("itrem==>", item);
                        }}
                        style={{
                            borderColor: 'grey',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            height: HEIGHT * 0.07,
                            paddingHorizontal: 8,
                        }} />
                </View>
                <View>
                    <TextInput
                        placeholder='Hourly rate'
                        onChangeText={Text => {
                            setStore({ ...store, Hourlyrate: Text })
                        }}
                        placeholderTextColor={"grey"}
                        style={{ borderWidth: 1, borderColor: "grey", height: HEIGHT * 0.07, paddingLeft: 15, paddingBottom: 23, fontSize: 13, marginHorizontal: 35, borderRadius: 10, marginVertical: 20 }} />
                    <Text style={{ position: "absolute", right: 48, top: 53, fontSize: 16 }}>QAR</Text>
                </View>
                <TextInput
                    placeholder='Experience'
                    onChangeText={Text => {
                        setStore({ ...store, Experience: Text })
                        console.log("text", Text);
                    }}
                    placeholderTextColor={"grey"}
                    style={{ borderWidth: 1, borderColor: "grey", paddingBottom: 55, paddingLeft: 15, height: HEIGHT * 0.11, marginHorizontal: 35, borderRadius: 10, marginVertical: 0 }} />
                <View style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: "#3D989F", padding: 20, marginHorizontal: 35, borderRadius: 10, marginVertical: 20 }}>
                    <Text onPress={() => gotodocumentpicker()} style={{ textAlign: "center", color: "#3D989F", fontSize: 17 }}>Attachment CV</Text>
                </View>
                <View style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: "#3D989F", padding: 10, marginHorizontal: 35, borderRadius: 10, marginBottom: 20, marginVertical: 0 }}>
                    <Text onPress={() => gotoimagePicker()} style={{ textAlign: "center", color: "#3D989F", fontSize: 17 }}>Worker Image</Text>
                    <Text style={{ color: "#3D989F", fontSize: 10, textAlign: "center", marginTop: 5 }}>{imagepicker}</Text>
                </View>
            </ScrollView>
            <View style={{ backgroundColor: "#fff", width: WIDTH, height: HEIGHT * 0.11, position: "absolute", bottom: 5, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <ButtonScreen navigation={() => navigation.navigate("SponsorShipDetails")} title="Submit" />
            </View>
        </>
    )
}
export default SponsorshipScreen;

