import React, { useState } from "react";
import {Modal, Text, Pressable, View, SafeAreaView, ScrollView } from "react-native";

const Modals = () => {
    const [ModalVisible, setModalVisible] = useState(false);
    const [animationType,SetAnimationType] = useState("")

return(
    <SafeAreaView>
        <ScrollView>
    <View style={{flex:1,alignItems:"center"}}>
           <Modal 
           transparent={true}
            animationType={animationType}
        visible={ModalVisible}
        style={{flex:1}}
           >
            <View style={{justifyContent:'center',alignItems:"center",flex:1,backgroundColor:'rgba(52, 52, 52, 0.8)',}}>
            <Text onPress={()=>setModalVisible(false)}
             style={{
             borderRadius:30,
             color:'#fff',
             }}>HideModal</Text>
            </View>
        </Modal>
        <Pressable onPress={()=>setModalVisible(true)} >
            <Text>Show Modal</Text>
        </Pressable>
        <View >
        <Pressable style={{backgroundColor:animationType == "none" ? "brown":"grey",width:90,height:30,borderRadius:7}} >
            <Text onPress={()=>SetAnimationType("none")} style={{color:'#fff',textAlign:"center",padding:5}}>None</Text>
        </Pressable>
        </View>
        <View style={{flex:1,margin:10}}>
        <Pressable style={{backgroundColor:animationType == "slide" ? "brown":"grey",width:90,height:30,borderRadius:7}}>
            <Text onPress={()=>SetAnimationType("slide")}  style={{color:"#fff",textAlign:"center",padding:5}}>Slide</Text>
        </Pressable>
        </View>
        <View>
        <Pressable  style={{backgroundColor:animationType == "fade" ? "brown":"grey",width:90,height:30,borderRadius:7}}>
            <Text onPress={()=>SetAnimationType('fade')} style={{color:"#fff",textAlign:"center",padding:5}}>fade</Text>
        </Pressable>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
 
    

)
  ;
};

export default Modals;