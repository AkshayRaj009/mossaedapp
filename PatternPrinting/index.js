import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from "../PatternPrinting/src/Routing/routes"

const index = () => {
  return (
    <View>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  )
}

export default index