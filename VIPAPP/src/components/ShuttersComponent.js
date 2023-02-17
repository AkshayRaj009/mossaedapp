import React,{useState} from 'react'
import { View, Text, FlatList, Image, Button, Pressable } from 'react-native'
import { LeftArrow, buttonRightArrow, buttonLeftArrow, cabanaSquare, customBathroom, RoomFloor, wardrobe, wallImage } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"

const ShuttersComponent = (props) => {
  const { title,text,index } = props
  const [color,setColor]=useState(false)
  return (
    <Pressable onPress={()=>setColor(index)} >

    <View style={{ backgroundColor: "black",borderColor:color===index?"#0FC1A1":"black", height: HEIGHT * 0.18, width: WIDTH * 0.43, borderRadius: 10,borderWidth:3 }}>
      <View style={{ marginHorizontal: 6, marginTop: 10 }} >
        <View style={{ borderWidth: 1, borderColor:"#0FC1A1", width: WIDTH * 0.07, height: WIDTH * 0.07, borderRadius: WIDTH * 0.07 / 2, marginHorizontal: 8, marginTop: 7, backgroundColor: "black", alignItems: "center", justifyContent: "center" }} >
        </View>
        <View style={{ marginTop: 30,marginHorizontal: 12 }} >
          <Text style={{ color: "#fff", fontSize: 20 }} >{title}</Text>
        </View>
        <Text style={{marginTop:14 ,color: "#0FC1A1", fontSize: 16 }} >{text}</Text>
      </View>
    </View>
    </Pressable>

  )
}

export default ShuttersComponent