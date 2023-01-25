import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
}from 'react-native';
import { FlatList } from "react-native-gesture-handler";


const DrawerScreen = () => {
    const [count,setCount] = useState([]);


    const input = (text)=>{
        let Array1=[]
        for( let i = 0; i < text; i++) {
            Array1.push("")
}
setCount(Array1)

console.log(count)


    }


    return ( 
 
        <View >
            <TextInput onChangeText={(text)=>input(text)}
                    style={{height: 40,fontSize: 15,marginHorizontal:10,borderWidth:1}}  
                    placeholder="Type here to translate!"
                />  
                <Text></Text>
                <FlatList 
                    data={count}
                    renderItem={()=><TextInput style={{height: 40,fontSize: 15,marginHorizontal:10,borderWidth:1}}  
                    placeholder="Type here to translate!"/>}
                
                />
            
            </View>
     );
}
 
export default DrawerScreen;