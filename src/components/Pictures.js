
import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Image,
    Text,
    ImageSource,
  } from 'react-native';

function pictures() {
  return (
    <SafeAreaView>
         <ScrollView>
            <View style ={{
              paddingTop :50,
              display :'flex',
              justifyContent : 'center',
              alignItems : 'center',
            }}>
              <Image style={{width:100,height:100}} 
                       source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
              />
            </View>
         </ScrollView>
    </SafeAreaView>
     
  )};

  export default pictures;