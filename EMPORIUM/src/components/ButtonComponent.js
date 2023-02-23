import { View, Text,Pressable,Image } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
    const {title,navigation,image}=props
  return (
    <Pressable onPress={navigation} style={{padding:14,marginHorizontal:30,backgroundColor:"#B89962",marginTop:18}} >
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}} >
        <Text style={{color:"#fff",fontSize:22,textAlign:"center"}} >{title}</Text>
    <Image style={{}} source={image} /> 
      </View>
   
    </Pressable>
  )
}

export default ButtonComponent