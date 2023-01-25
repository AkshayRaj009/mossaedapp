import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Route from "./Route"

const Index = () => {
  return (
<SafeAreaView>
    <NavigationContainer>
        <Route />
    </NavigationContainer>
</SafeAreaView>
  )
}

export default Index