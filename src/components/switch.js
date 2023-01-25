import React, { useState } from 'react';
import{
    View,
    SafeAreaView,
    ScrollView,
    Switch,
} from "react-native"
const Switchs  = ()=>{
    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView>
         <ScrollView>
            <View style={{ display :'flex',justifyContent:'center',  alignItems : 'center',}}>
                <Switch 
                  trackcolor={{false:"red",true:"#81b0ff"}}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />

            </View>

         </ScrollView>

    </SafeAreaView>
  )
  }
  export default Switchs;





