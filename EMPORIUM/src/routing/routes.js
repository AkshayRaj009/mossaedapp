import React from 'react'
import { Image } from 'react-native'
import { homeIcon,cartIcon,categoriesIcon,profileIcon,orderIcon } from "../assests/index"
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from '../screens/SplashScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import AddToCart from '../screens/AddToCart';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersListScreen from '../screens/OrdersListScreen';
import OrderStatusScreen from '../screens/OrderStatusScreen';


const BottomTab = createBottomTabNavigator();
const Bottom = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }} >
      <BottomTab.Screen options={{
        tabBarIcon: () => {
          return (
            <Image source={homeIcon}  style={{tintColor:"#B89962"}} />

          );
        },
      }} name="Home" component={HomeScreen} />
      <BottomTab.Screen options={{
        tabBarIcon: () => {
          return (
            <Image source={categoriesIcon} />

          );
        },
      }} name="Categories" component={CategoriesScreen} />
      <BottomTab.Screen options={{
        tabBarIcon: () => {
          return (
            <Image source={cartIcon} />

          );
        },
      }} name="Cart" component={AddToCart} />
      <BottomTab.Screen options={{
        tabBarIcon: () => {
          return (
            <Image source={orderIcon} />

          );
        },
      }} name="My Orders" component={OrdersListScreen} />
        <BottomTab.Screen options={{
        tabBarIcon: () => {
          return (
            <Image source={profileIcon} />
          );
        },
      }} name="My Profile"  component={ProfileScreen} />
    </BottomTab.Navigator>
  )
}

const Route = createStackNavigator();
const Router = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false }} >
      <Route.Screen name='SplashScreen' component={SplashScreen} />
      <Route.Screen name='GetStartedScreen' component={GetStartedScreen} />
      <Route.Screen name='SignUpScreen' component={SignUpScreen} />
      <Route.Screen name='SignInScreen' component={SignInScreen} />
      <Route.Screen name='HomeScreen' component={Bottom} />
      <Route.Screen name='OrderStatusScreen' component={OrderStatusScreen} />

    </Route.Navigator>
  )
}
export default Router;
