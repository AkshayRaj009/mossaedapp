import React, { useState } from 'react'
import { View, TextInput, Text, Dimensions, Image, Pressable } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';


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

const  DropdownComponent =()=> {

    const [isFocus, setIsFocus] = useState(false)
  const [focus, setFocus] = useState
  (false)
//   const [open, setOpen] = useState(false)
  const [store, setStore] = useState({
    WorkerFullName: "", DateofBirth: new Date(), Nationality: "", Socialstatus: "", Hourlyrate: "", Experience: ""
  })
    

  return (
    <>
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
        setStore(item)
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
 </>

  )
}

export default DropdownComponent