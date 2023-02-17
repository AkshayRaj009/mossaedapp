import React from 'react'
import { Pressable, Text, View,Image} from 'react-native';

const ButtonComponent = (props) => {
    const{title,navigation,buttonStyle,LeftArrow,RightArrow,textStyle,style1}=props
  return (
   <Pressable style={[{padding:19,backgroundColor:"#0FC1A1",borderRadius:10},buttonStyle]} onPress={navigation} >
    <View style={[{flexDirection:"row",alignItems:"center",justifyContent:"center"},style1]}>
      <Image source={LeftArrow}/>
      <Text style={[{fontSize:18,marginHorizontal:14,color:"black"},textStyle]} >{title}</Text>
    <Image source={RightArrow}/>
    </View>
   </Pressable>
  )
}

export default ButtonComponent