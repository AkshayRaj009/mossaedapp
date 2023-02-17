import { View, Text,Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
    const {title,navigation}=props
  return (
    <Pressable onPress={navigation} style={{padding:11,marginHorizontal:30,backgroundColor:"#B89962",marginTop:18}} >
    <Text style={{color:"#fff",fontSize:22,textAlign:"center",marginBottom:8}} >{title}</Text>
    </Pressable>
  )
}

export default ButtonComponent