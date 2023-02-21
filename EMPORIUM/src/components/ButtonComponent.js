import { View, Text,Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
    const {title,navigation}=props
  return (
    <Pressable onPress={navigation} style={{padding:14,marginHorizontal:30,backgroundColor:"#B89962",marginTop:18}} >
    <Text style={{color:"#fff",fontSize:22,textAlign:"center"}} >{title}</Text>
    </Pressable>
  )
}

export default ButtonComponent