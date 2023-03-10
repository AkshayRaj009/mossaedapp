import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import PatternPrinting from '../PatternPrinting';
import NumberPattern from '../NumberPattern';
import InputField from '../InputField';
import PhotoScreen from '../Screens/PhotoScreen';


const Route = createStackNavigator();
const Router = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false }} >
      {/* <Route.Screen name='PatternPrinting' component={PatternPrinting} /> */}
      {/* <Route.Screen name='NumberPattern' component={NumberPattern} /> */}
      {/* <Route.Screen name='InputField' component={InputField} /> */}
      <Route.Screen name='PhotoScreen' component={PhotoScreen} />




    </Route.Navigator>
  )
}

export default Router