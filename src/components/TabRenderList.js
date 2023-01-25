import React from "react";
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width;

import {
    View,
    Text,
    ScrollView,
    FlatList,
    Pressable,
    
}from 'react-native';


const TabRenderList = (props) => {
    console.log(props);

    return(
    <View style={{width}}>
        <Text >{props.title}</Text>
            <View>
            <FlatList style={{}}
                data={props.data}
                keyExtractor={item => item.id}
               
                renderItem={({ item }) => {
                    return (
                        <View  >
                            <View style={{ flexDirection:'row', marginTop:5}} >
                                <Pressable onPress={() => props.onChange(item.title)} style={{borderWidth: 1, height: 20, backgroundColor: props.value === item.title ? 'red' : 'wheat', width: 20, borderRadius: 30}}>
                                </Pressable>
                                <Text>{item.title}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            </View>
            </View>)
    
}

export default TabRenderList;