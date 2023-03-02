import React, { useState } from 'react'
import { View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { HEIGHT, WIDTH } from '../constants/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const nationality = [
    { label: 'Hand Bag ', value: '1' },
    { label: 'Hand Bag ', value: '2' },
    { label: 'Hand Bag ', value: '3' },
    { label: 'Hand Bag ', value: '4' },
    { label: 'Hand Bag ', value: '5' },
    { label: 'Hand Bag ', value: '6' },
    { label: 'Hand Bag ', value: '7' },
    { label: 'Hand Bag ', value: '8' },
];
const DropdownComponent = () => {
    const [isFocus, setIsFocus] = useState(false)
    const [store, setStore] = useState("")
    return (
        <View style={{}}>
            <Dropdown
                selectedTextStyle={[isFocus && { borderColor: 'red' }]}
                data={nationality}
                maxHeight={220}
                itemContainerStyle={{ backgroundColor: "#B75CFF", shadowOpacity: 0.1, shadowRadius: 0.6, elevation: 2 }}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '' : ''}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setStore(item)
                    setIsFocus(false);
                }}
                style={{
                    borderRadius: 20,
                    paddingHorizontal: WIDTH * 0.02,
                }}
                renderLeftIcon={() => (
                    <AntDesign
                      style={{}}
                      color={isFocus ? '#A8A398' : 'black'}
                      name="down"
                      size={11}
                    />
                  )}
            />

            <View>
            </View>
        </View>

    )
}

export default DropdownComponent
