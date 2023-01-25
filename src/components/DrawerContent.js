import React  from "react";
import { useDrawerProgress } from "@react-navigation/drawer";
import { View,Text, } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";

const DATA = [
    {
        id :'1',
        title : 'About Us'
    },
    {
        id :'2',
        title : 'Breeding & Show'
    },
    {
        id :'3',
        title : 'Equine Education'
    },
    {
        id :'4',
        title : 'Horse Profile'
    },
    {
        id :'6',
        title : 'Gallery'
    },
    {
        id :'7',
        title : 'Tours'
    },
    {
        id :'8',
        title : 'photos'
    },
]

const DrawerContent = () => {



    return ( 
        <SafeAreaView >
        <ScrollView>
            <FlatList
            data={DATA}
            renderItem={({item})=><View style={{marginHorizontal:20,padding:20,backgroundColor:'grey',marginVertical:8,borderRadius:10}}>
            <Text 
            style={{color:'black',textAlign:"center",}}>{item.title}</Text>
            </View>}
            keyExtractor ={item => item.id}
            />
        </ScrollView>
      </SafeAreaView>


     );
}
 
export default DrawerContent;