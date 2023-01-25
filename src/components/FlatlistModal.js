import React, { useState } from "react";
import {Modal, Text, Pressable, View, SafeAreaView, ScrollView, FlatList } from "react-native";


const App = () =>{
    const [ModalVisible, setModalVisible] = useState(false);
    const [animationType,SetAnimationType] = useState("");
    const DATA = [
        {
            
            id: 1,
            title : "none",
        },
        {
            id:2,
            title :'slide',
           

        },
        {
            id:3,
            title:"fade",
           
        },
]
    // const renderItem =({item}) =>(
    //     <Item title={item.title} name = {item.name} />
    // )
    // const Item =({title,name}) =>(
    //     <View>
    //         <Text>{name}</Text>
    //         <Text>{title}</Text>
            
    //     </View>
    // );


return(
    <SafeAreaView>
        <ScrollView>
    <View style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
           <Modal 
           transparent={true}
           animationType={animationType}
        visible={ModalVisible}
        style={{flex:1}}>
            
            <Pressable onPress={()=>{setModalVisible(false)}}>
            <Text style={{
                backgroundColor:"red",
             height:80,
             width:120,
             padding:25,
             borderRadius:30,
             margin:40
             }} >HideModal</Text>
             </Pressable>
        </Modal>
        <Pressable onPress={()=>{setModalVisible(true)}} >
            <Text >Show Modal</Text>
        </Pressable>
        <FlatList
             data={DATA}
             renderItem={({item,index})=>{
                return(
                <Pressable onPress={()=>{SetAnimationType(item.title)}}>
                    <Text>{item.title}</Text>
                </Pressable>
             )}}
             keyExtractor ={item => item.id}
        />
           


    
        
        </View>
    </ScrollView>
    </SafeAreaView>
 
    

)
};

export default App;