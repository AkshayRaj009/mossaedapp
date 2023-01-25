import React from 'react'

import {
    SafeAreaView,
    ScrollView,
    FlatList,
    Text,
    View,

}from 'react-native';

const Data = [
    {
        id: '1',
        title: 'First Name',
        date : 'erwjshgf'

    },
    {
        id : '2',
        title : 'second Name',
    },
    {
        id : '3',
        title : 'Third Name',
    },
    {
        id : '4',
        title : 'third Name',
        date : 2
    }
];

    // const Item =({title,date}) => (
    //     <View style={{backgroundColor:'red',}}>
    //     <Text style={{color:'black',padding:40}}>{title}</Text>
    //     <Text>{date}</Text>
    //     </View>
    // );
 const FlatLists = ()=>{
    // const renderItem = ({item}) => (
    //     <Item title = {item.title } date = {item.date}/>
        
    // )
    return (
      <SafeAreaView >
        <ScrollView>
            <FlatList
            data={Data}
            renderItem={({item})=><View style={{backgroundColor:'red',}}>
            <Text 
            style={{color:'black',padding:40}}>{item.title}</Text>
            </View>}
            keyExtractor ={item => item.id}
            />
        </ScrollView>
      </SafeAreaView>
    );
    } 
export default FlatLists;
