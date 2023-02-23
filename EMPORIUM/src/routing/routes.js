import React, { useEffect, useRef } from 'react'
import { Image, View } from 'react-native'
import { homeIcon, cartIcon, categoriesIcon, profileIcon, orderIcon } from "../assests/index"
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
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
import MakeUpScreen from '../screens/MakeUpScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import CheckOutScreen from '../screens/CheckOutScreen';
import CardDetailsScreen from '../screens/CardDetailsScreen';
import CheckOutPaymentScreen from '../screens/CheckOutPaymentScreen';
import ProductListScreen from '../screens/ProductListScreen';
import HomeDrawerScreen from '../screens/HomeDrawerScreen';
import AddressScreen from '../screens/AddressScreen';
import WishListScreen from '../screens/WishListScreen';
import SupportScreen from '../screens/SupportScreen';
import ContactScreen from '../screens/ContactScreen';
import TermsScreen from '../screens/TermsScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import LanguageScreen from '../screens/LanguageScreen';
import SaraAhmedScreen from '../screens/SaraAhmedScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Route = createStackNavigator();
const Router = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false }} >
      <Route.Screen name='SplashScreen' component={SplashScreen} />
      <Route.Screen name='GetStartedScreen' component={GetStartedScreen} />
      <Route.Screen name='SignUpScreen' component={SignUpScreen} />
      <Route.Screen name='SignInScreen' component={SignInScreen} />
      <Route.Screen name='HomeScreen' component={Drawer} />
      <Route.Screen name='OrderStatusScreen' component={OrderStatusScreen} />
      <Route.Screen name='MakeUpScreen' component={MakeUpScreen} />
      <Route.Screen name='OrderDetailsScreen' component={OrderDetailsScreen} />
      <Route.Screen name='CheckOutScreen' component={CheckOutScreen} />
      <Route.Screen name='CardDetailsScreen' component={CardDetailsScreen} />
      <Route.Screen name='CheckOutPaymentScreen' component={CheckOutPaymentScreen} />
      <Route.Screen name='ProductListScreen' component={ProductListScreen} />
      <Route.Screen name='AddToCart' component={AddToCart} />
      <Route.Screen name='ContactScreen' component={ContactScreen} />
      <Route.Screen name='LanguageScreen' component={LanguageScreen} />
      <Route.Screen name='SaraAhmedScreen' component={SaraAhmedScreen} />
      <Route.Screen name='NotificationScreen' component={NotificationScreen} />
    </Route.Navigator>
  )
}

const DrawerStack = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerStack.Navigator screenOptions={{ headerShown: false, drawerType: "back", sceneContainerStyle: {}, overlayColor: "transparent", drawerContentStyle: { backgroundColor: "red" } }} drawerContent={props => <HomeDrawerScreen {...props} />}>
      <DrawerStack.Screen name="HomeScreen" component={Bottom}></DrawerStack.Screen>
      <DrawerStack.Screen name="AboutUsScreen" component={AboutUsScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="AddressScreen" component={AddressScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="TermsScreen" component={TermsScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="WishListScreen" component={WishListScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="ContactScreen" component={ContactScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="SupportScreen" component={SupportScreen}></DrawerStack.Screen>
    </DrawerStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
const Bottom = () => {
  // const focused= AccessibilityState.selected
  // const Ref =  useRef(null)
  // useEffect(() => {
  //   if(){
  //     Ref.current.animate({0.:{scale:1},1: {scale: 1.5}})
  //   }
  // }, [])
  const transform = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      // height: withTiming(transform.value * 10, {
      //     duration: 1000,

      // }),
      // width: withTiming(transform.value * 10, {
      //     duration: 3000,

      // }),
      // borderRadius: withTiming(transform.value * 100, {
      //     duration: 2000,

      // }),
      // transform: [{ scale: withTiming(transform.value * 100, { duration: 3000 }) }]
    };
  });
  return (
 
      <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}  >
        <BottomTab.Screen options={{
          tabBarIcon: () => {
            return (
              <Image source={homeIcon} style={{ tintColor: "#B89962" }} />
            )

          }
        }} name="Home" component={HomeScreen} />
        <BottomTab.Screen options={{
          tabBarIcon: () => {
            return (
              <Image source={categoriesIcon} />
            )
          }
        }} name="Categories" component={CategoriesScreen} />
        <BottomTab.Screen options={{
          tabBarIcon: () => {
            return <Image source={cartIcon} />
          }
        }} name="Cart" component={AddToCart} />
        <BottomTab.Screen options={{
          tabBarIcon: () => {
            return <Image source={orderIcon} />
          }
        }} name="My Orders" component={OrdersListScreen} />
        <BottomTab.Screen options={{
          tabBarIcon: () => {
            return <Image source={profileIcon} />
          }
        }} name="My Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
 

  )
}


export default Router;
