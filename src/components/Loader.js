
import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    ActivityIndicator
  } from 'react-native';

function Loader() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
        style={{
            paddingTop : 50,
        }}
        >
        <ActivityIndicator />
    <ActivityIndicator size="large" style={{paddingTop: 25}}/>
    <ActivityIndicator size="small" color="#0000ff" style={{paddingTop: 25}} />
    <ActivityIndicator size="large" color="#00ff00" style={{paddingTop: 25}}/>
        </View>
      </ScrollView>
      </SafeAreaView>

  )};
export default Loader;
