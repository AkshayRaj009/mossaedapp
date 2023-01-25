import React from "react";
import {
    View,
    Text,
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";

const InputScreen = () => {

    const DATA = [
        {
            id:"1" ,
            title:"Worker Full Name",
           
        },
        {
            id:"2" ,
            title:"Date of Birth",
           
        },
        {
            id:"3" ,
            title:"Nationality",
            
        },
        {
            id:"4" ,
            title:"Social Stutas",
            
        },
        {
            id:"5" ,
            title:"Hourly rate",
            qar :"QAR"
        },
        {
            id:"6" ,
            title:"experience",
            name :"lorem ysthjaygklS:'sd;lckbv ;pwdeygwabkl;"
        }
    ]

    return (
        <View>
            <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item})=>
        <Text>{item.title}</Text>
        }
            />
        </View>
    )

}
export default InputScreen;