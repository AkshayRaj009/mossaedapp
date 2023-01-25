
import React from 'react'
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Pressable,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
  } from 'react-native';

function Buttons() {
  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
        <Button onPress={()=>alert('failed')}
        title="Click here"
        color="purple"
        />
        </View>
        <View
            style={{
                display :'flex',
                justifyContent : 'space-between',
                alignItems : 'center'
            }}
        >
            <Pressable 
            style={{
                backgroundColor :"blue",
               width : 80,
                height : 30,
                borderRadius :6,
                marginBottom : 30,
            }}
            onPressIn={()=>alert('press in')}
            onPressOut={()=>alert('press out')}

            >
             <Text style={{textAlign :'center', color : '#fff', fontSize : 15,padding: 6}}>Pressable</Text>
            </Pressable>
            
        <View 
        stye={{
          display :'flex',
          justifyContent : 'center',
          alignItems : 'center',
        }}>
          <TouchableHighlight onPress={()=>alert('TouchableHighlight')}
              activeOpacity ={1}
              underlayColor = "brown"
              style={{
                backgroundColor : "red",
                width : 80,
                height : 30,
                borderRadius :6,
              }}
          >
            <Text style={{textAlign : 'center',padding: 6}}>Highlights</Text>
          </TouchableHighlight>
          </View>
          <View
          style={{
            display :'flex',
            justifyContent : 'center',
            alignItems : 'center',
            paddingTop :30
        }}
          >
            <TouchableOpacity onPress={()=>alert('TouchableOpacity')}
            style={{
              backgroundColor : 'green',
              width : 80,
              height : 30,
              borderRadius :6,
            }}
            >
              <Text style={{textAlign : 'center', padding: 6}}>Opacity</Text>
            </TouchableOpacity>
          </View>

          <View
          style={{
            backgroundColor : 'black',
            width : 80,
            height : 30,
            borderRadius :6,
            display :'flex',
            justifyContent : 'center',
            alignItems : 'center',
            marginTop :30
          }}
          >
            <TouchableWithoutFeedback onPress={()=>alert('TouchableWithoutFeedback')}>
              <Text style={{color:'#fff'}}>Feedback</Text>
            </TouchableWithoutFeedback>
          </View>
          </View>
</ScrollView>
</SafeAreaView>
  )
}

export default Buttons

