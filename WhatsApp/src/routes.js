import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../src/screens/SplashScreen"
import LoginScreen from './screens/LoginScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import EnterOtpScreen from './screens/EnterOtpScreen';
import HomeScreen from './screens/HomeScreen';


const Route = createStackNavigator();
const Routes = () => {
  return (
    <Route.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown:false}} >
      <Route.Screen name='SplashScreen' component={SplashScreen} />
      <Route.Screen name='LoginScreen' component={LoginScreen} />
      <Route.Screen name='GetStartedScreen' component={GetStartedScreen} />
      <Route.Screen name='EnterOtpScreen' component={EnterOtpScreen} />
      <Route.Screen name='HomeScreen' component={HomeScreen} />




    </Route.Navigator>
  )
}

export default Routes