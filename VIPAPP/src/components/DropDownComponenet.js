import React, { useState } from 'react'
import { View, TextInput, Text, Dimensions, Image, Pressable } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { downArrow } from '../assests';



const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const nationality = [
    { label: 'CABANA ', value: '1' },
    { label: 'CABANA', value: '2' },
    { label: 'CABANA ', value: '3' },
    { label: 'CABANA ', value: '4' },
    { label: 'CABANA ', value: '5' },
    { label: 'CABANA ', value: '6' },
    { label: 'CABANA ', value: '7' },
    { label: 'CABANA ', value: '8' },
];

const DropdownComponent = () => {

    const [isFocus, setIsFocus] = useState(false)
    //   const [focus, setFocus] = useState
    //   (false)
    //   const [open, setOpen] = useState(false)
    //   const [store, setStore] = useState({
    //     WorkerFullName: "", DateofBirth: new Date(), Nationality: "", Socialstatus: "", Hourlyrate: "", Experience: ""
    //   })


    return (
        <>
                       
            <View style={{ marginHorizontal: 35 }}>
                <Dropdown
                    selectedTextStyle={{ }}
                    data={nationality}
                    maxHeight={300}
                    itemContainerStyle={{ backgroundColor:  "#B8860B" , shadowOpacity: 0.1, shadowRadius: 0.8, elevation: 3 ,}}
                    labelField="label"
                    valueField="value"
                    //   value={store.Nationality}
                    placeholder={!isFocus ? '' : '...'}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        // store.Nationality = item
                        setStore(item)
                        setIsFocus(false);
                    }}
                    style={{
                        borderRadius: 20,
                        paddingHorizontal: 55,
                    
              
                    }}
                // renderLeftIcon={() => (
                // <AntDesign
                //   style={{borderWidth:1,borderColor:isFocus?"red":"blue"}}
                //   color={isFocus ? 'yellow' : 'black'}
                //   name="Safety"
                //   size={20} />
                // <Image style={{ borderWidth: 1, borderColor: isFocus ? "green" : "yellow",position:"absolute",left:5 }} source={downArrow} />

                //   )}
                />
                <View>
                </View>
            </View>
        </>

    )
}

export default DropdownComponent