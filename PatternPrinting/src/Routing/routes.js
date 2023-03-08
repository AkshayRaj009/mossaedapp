import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import PatternPrinting from '../PatternPrinting';








const Route = createStackNavigator();
const Router = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false }} >
      <Route.Screen name='PatternPrinting' component={PatternPrinting} />








    </Route.Navigator>
  )
}

export default Router