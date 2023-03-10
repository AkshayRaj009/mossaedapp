import { View, Text } from 'react-native'
import React from 'react'
import Routes from "../PatternPrinting/src/Routing/routes"
import { NavigationContainer } from '@react-navigation/native'

const index = () => {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  )
}

export default index