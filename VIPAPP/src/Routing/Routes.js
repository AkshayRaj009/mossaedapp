import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import VerifyOtpScreen from '../screens/VerifyOtpScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeDrawerScreen from '../screens/HomeDrawerScreen';
import RentScreen from '../screens/RentScreen';
import RentCalenderScreen from '../screens/RentCalenderScreen';
import BeachScreen from '../screens/BeachScreen';
import RentDetailsScreen from '../screens/RentDetailsScreen';
import SummaryScreen from '../screens/SummaryScreen';
import ServiceScreen from '../screens/ServiceScreen';
import BuildScreen from '../screens/BuildScreen';
import ChooseLoactionScreen from '../screens/ChooseLoactionScreen';
import WashingScreen from '../screens/WashingScreen';
import WashingSizeScreen from '../screens/WashingSizeScreen';
import BadriService from '../screens/BadriService';
import WashSummaryScreen from '../screens/WashSummaryScreen';
import TowingLocation from '../screens/TowingLocation';
import BookedTicket from '../screens/BookedTicket';
import MyProfileScreen from '../screens/MyProfileScreen';
import AboutUS from '../screens/AboutUS';
import SupportScreen from '../screens/SupportScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import CabanaScreen from '../screens/CabanaScreen';
import CabanaDetails from '../screens/CabanaDetails';
import MyActivitiesScreen from '../screens/MyActivitiesScreen';
import CustomScreen from "../screens/CustomScreen"
import WaterTankCustom from '../screens/WaterTankCustom';
import EditProfileScreen from '../screens/EditProfileScreen';
import MemberShipScreen from '../screens/MemberShipScreen';
import VipGoldScreen from '../screens/VipGoldScreen';

const DrawerStack = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerStack.Navigator screenOptions={{ headerShown: false, drawerType: "back", sceneContainerStyle: { backgroundColor: "#181D23" }, overlayColor: "transparent", drawerContentStyle: { backgroundColor: "red" } }} drawerContent={props => <HomeDrawerScreen {...props} />}>
      <DrawerStack.Screen name="HomeScreen" component={HomeScreen}></DrawerStack.Screen>
    </DrawerStack.Navigator>
  );
}

const Route = createStackNavigator();
const Router = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false }} >
      <Route.Screen name='SplashScreen' component={SplashScreen} />
      <Route.Screen name='LoginScreen' component={LoginScreen} />
      <Route.Screen name='VerifyOtpScreen' component={VerifyOtpScreen} />
      <Route.Screen name='SignupScreen' component={SignupScreen} />
      <Route.Screen name='HomeScreen' component={Drawer} />
      <Route.Screen name='RentScreen' component={RentScreen} />
      <Route.Screen name='RentCalenderScreen' component={RentCalenderScreen} />
      <Route.Screen name='BeachScreen' component={BeachScreen} />
      <Route.Screen name='RentDetailsScreen' component={RentDetailsScreen} />
      <Route.Screen name='SummaryScreen' component={SummaryScreen} />
      <Route.Screen name='WashSummaryScreen' component={WashSummaryScreen} />
      <Route.Screen name='ChooseLoactionScreen' component={ChooseLoactionScreen} />
      <Route.Screen name='ServiceScreen' component={ServiceScreen} />
      <Route.Screen name='BuildScreen' component={BuildScreen} />
      <Route.Screen name=' WashSummaryScreen' component={WashSummaryScreen} />
      <Route.Screen name='WashingScreen' component={WashingScreen} />
      <Route.Screen name='WashingSizeScreen' component={WashingSizeScreen} />
      <Route.Screen name='BadriService' component={BadriService} />
      <Route.Screen name='TowingLocation' component={TowingLocation} />
      <Route.Screen name='BookedTicket' component={BookedTicket} />
      <Route.Screen name='MyProfileScreen' component={MyProfileScreen} />
      <Route.Screen name='AboutUS' component={AboutUS} />
      <Route.Screen name='SupportScreen' component={SupportScreen} />
      <Route.Screen name='PrivacyScreen' component={PrivacyScreen} />
      <Route.Screen name='CabanaScreen' component={CabanaScreen} />
      <Route.Screen name='CabanaDetails' component={CabanaDetails} />
      <Route.Screen name='MyActivitiesScreen' component={MyActivitiesScreen} />
      <Route.Screen name='CustomScreen' component={CustomScreen} />
      <Route.Screen name='WaterTankCustom' component={WaterTankCustom} />
      <Route.Screen name='EditProfileScreen' component={EditProfileScreen} />
      <Route.Screen name='MemberShipScreen' component={MemberShipScreen} />
      <Route.Screen name='VipGoldScreen' component={VipGoldScreen} />
    </Route.Navigator>
  )
}
export default Router;