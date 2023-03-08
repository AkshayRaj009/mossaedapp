import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeImage, calenderIcon, orderIcon, notificationIcon } from "../assests/index"
import { colors } from '../constants/colors';
import SplashScreen from "../../../SJO/src/screens/SplashScreen"
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CarsScreen from '../screens/CarsScreen';
import CalenderScreen from '../screens/CalenderScreen';
import ManageOrderScreen from '../screens/ManageOrderScreen';
import NotificatonScreen from '../screens/NotificatonScreen';
import FilterScreen from '../screens/FilterScreen';
import CarsListScreen from '../screens/CarsListScreen';
import UniqueNumberScreen from '../screens/UniqueNumberScreen';
import JewelleryScreen from '../screens/JewelleryScreen';
import JewelleryFilterScreen from '../screens/JewelleryFilterScreen';
import WatchJewelleryScreen from '../screens/WatchJewelleryScreen';
import WatchScreen from '../screens/WatchScreen';
import UniqueScreen from '../screens/UniqueScreen';
import UniqueFilterScreen from '../screens/UniqueFilterScreen';
import Companiesscreen from '../screens/Companiesscreen';
import CompaniesFilterScreen from '../screens/CompaniesFilterScreen';
import GoldenHorseScreen from '../screens/GoldenHorseScreen';
import PropertyFilterScreen from '../screens/PropertyFilterScreen';
import PropertyScreen from '../screens/PropertyScreen';
import LandFilterScreen from '../screens/LandFilterScreen';
import LandScreen from '../screens/LandScreen';
import HorseFilterScreen from '../screens/HorseFilterScreen';
import HorseScreen from '../screens/HorseScreen';
import HorseListScreen from '../screens/HorseListScreen';
import InvestmentFilterScreen from '../screens/InvestmentFilterScreen';
import AlrayyanScreen from '../screens/AlrayyanScreen'
import ConferenceScreen from '../screens/ConferenceScreen';

const Route = createStackNavigator();
const Router = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false, gestureDirection: "horizontal-inverted" }} >
      <Route.Screen name='SplashScreen' component={SplashScreen} />
      <Route.Screen name='LoginScreen' component={LoginScreen} />
      <Route.Screen name='HomeScreen' component={Bottom} />
      <Route.Screen name='CarsScreen' component={CarsScreen} />
      <Route.Screen name='FilterScreen' component={FilterScreen} />
      <Route.Screen name='CarsListScreen' component={CarsListScreen} />
      <Route.Screen name='UniqueNumberScreen' component={UniqueNumberScreen} />
      <Route.Screen name='JewelleryScreen' component={JewelleryScreen} />
      <Route.Screen name='JewelleryFilterScreen' component={JewelleryFilterScreen} />
      <Route.Screen name='WatchJewelleryScreen' component={WatchJewelleryScreen} />
      <Route.Screen name='WatchScreen' component={WatchScreen} />
      <Route.Screen name='UniqueScreen' component={UniqueScreen} />
      <Route.Screen name='UniqueFilterScreen' component={UniqueFilterScreen} />
      <Route.Screen name='CompaniesFilterScreen' component={CompaniesFilterScreen} />
      <Route.Screen name='Companiesscreen' component={Companiesscreen} />
      <Route.Screen name='GoldenHorseScreen' component={GoldenHorseScreen} />
      <Route.Screen name='PropertyFilterScreen' component={PropertyFilterScreen} />
      <Route.Screen name='PropertyScreen' component={PropertyScreen} />
      <Route.Screen name='LandFilterScreen' component={LandFilterScreen} />
      <Route.Screen name='LandScreen' component={LandScreen} />
      <Route.Screen name='HorseFilterScreen' component={HorseFilterScreen} />
      <Route.Screen name='HorseScreen' component={HorseScreen} />
      <Route.Screen name='HorseListScreen' component={HorseListScreen} />
      <Route.Screen name='InvestmentFilterScreen' component={InvestmentFilterScreen} />
      <Route.Screen name='AlrayyanScreen' component={AlrayyanScreen} />
      <Route.Screen name='ConferenceScreen' component={ConferenceScreen} />








    </Route.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();
const Bottom = () => {
  const [color, setColor] = useState(false)
  return (

    <BottomTab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, tabBarShowLabel: false }}  >

      <BottomTab.Screen options={{
        tabBarIcon: (props) => {
          return(
            <Image source={notificationIcon} />
          )
        }
      }} name="NotificatonScreen" component={NotificatonScreen} />

      <BottomTab.Screen options={{
        tabBarIcon: (props) => {
          return <Image source={calenderIcon} style={{}} />
        }
      }} name="CalenderScreen" component={CalenderScreen} />
      <BottomTab.Screen options={{
        tabBarIcon: (props) => {
          return <Image source={orderIcon} style={{}} />
        }
      }} name="ManageOrderScreen" component={ManageOrderScreen} />
      <BottomTab.Screen options={{
        tabBarIcon: (props) => {
          return  <Image source={homeImage} style={{ tintColor: color ? colors.Yellow :colors.grey}} />
        }
      }} name="Home" component={HomeScreen} />

    </BottomTab.Navigator>
  )
}

export default Router