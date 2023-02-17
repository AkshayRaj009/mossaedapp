import React from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native'
import { LeftArrow, buttonRightArrow, buttonLeftArrow, cabanaSquare, customBathroom, RoomFloor, wardrobe, wallImage } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import InputComponent from './InputComponent';

const CabanaComponenet = (props) => {
    const {title,text,text1,titleStyle,textStyle,image}=props
    return (
        <View>
            <View style={{ alignItems: "center" }}>
                <Image source={image} />
                <Text style={[{ fontSize: 26, color: "#fff", marginTop: 33 },titleStyle]} >{title}</Text>
                <Text style={[{ fontSize: 18, color: "#fff", marginTop: 15 },textStyle]} >{text}</Text>
                <Text style={{ fontSize: 18, color: "#fff" }} >{text1}</Text>
            </View>
          
        </View>
    )
}

export default CabanaComponenet