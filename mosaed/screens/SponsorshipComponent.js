import React, { useState } from 'react'
import { View, TextInput, Text, Dimensions, Image, Pressable } from 'react-native'
import calender from "../../mosaed/assets/Images/calendar.png"
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
import ButtonScreen from './ButtonScreen';

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
const SponsorshipComponent = () => {
  const [isFocus, setIsFocus] = useState(false)
  const [focus, setFocus] = useState(false)
  const [open, setOpen] = useState(false)
  const [store, setStore] = useState({
    WorkerFullName: "", DateofBirth: new Date(), Nationality: "", Socialstatus: "", Hourlyrate: "", Experience: ""
  })


  console.log("store", store);

  return (
    <>
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
        }}
      />

      <TextInput
        placeholder='Worker Full Name'
        placeholderTextColor={"grey"}
        style={{ borderWidth: 1, borderColor: "grey", height: HEIGHT * 0.07, paddingLeft: 15, paddingBottom: 23, marginHorizontal: 35, borderRadius: 10, marginVertical: 20, fontSize: 13, paddingTop: 9 }} />
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
          itemContainerStyle={{ backgroundColor: "wheat", shadowOpacity: 0.1, shadowRadius: 0.2, elevation: 2 }}
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
          }}
          style={{
            borderColor: 'grey',
            borderWidth: 0.5,
            borderRadius: 8,
            height: HEIGHT * 0.07,
            paddingHorizontal: 8,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 35 }}>
        <Text style={{ position: "absolute", top: 10, left: 10, color: "grey", fontSize: 13 }}>Social status</Text>
        <Dropdown
          placeholderStyle={{ color: "grey" }}
          selectedTextStyle={{ fontSize: 15, fontSize: 15, marginTop: 18, marginLeft: 20 }}
          data={socialstatus}
          maxHeight={220}
          itemContainerStyle={{ backgroundColor: "wheat", shadowOpacity: 0.1, shadowRadius: 0.2, elevation: 2 }}
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
          }}
        />
      </View>
      <View>
        <TextInput
          placeholder='Hourly rate'
          placeholderTextColor={"grey"}
          style={{ borderWidth: 1, borderColor: "grey", height: HEIGHT * 0.07, paddingLeft: 15, paddingBottom: 23, fontSize: 13, marginHorizontal: 35, borderRadius: 10, marginVertical: 20 }} />
        <Text style={{ position: "absolute", right: 48, top: 53, fontSize: 16 }}>QAR</Text>
      </View>
      <TextInput
        placeholder='Experience'
        placeholderTextColor={"grey"}
        style={{ borderWidth: 1, borderColor: "grey", paddingBottom: 55, paddingLeft: 15, height: HEIGHT * 0.11, marginHorizontal: 35, borderRadius: 10, marginVertical: 0 }} />
      <View style={{ backgroundColor: "#fff", width: WIDTH, height: HEIGHT * 0.11, position: "absolute", top: HEIGHT * 0.89, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <ButtonScreen navigation={() => navigation.navigate("SponsorShipDetails")} title="Submit" />
      </View>
      </>
   
  )
}

export default SponsorshipComponent;


