import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/AntDesign'; 
import React, { useState } from 'react'
import SplashScreen from '../../../mosaed/screens/SplashScreen';
import WelcomeScreen from '../../../mosaed/screens/WelcomeScreen';
import RegisterScreen from '../../../mosaed/screens/RegisterScreen';
import TermsAndCondition from '../../../mosaed/screens/TermsAndCondition';
import GetStartedScreen from '../../../mosaed/screens/GetStartedScreen';
import ServiceScreen from '../../../mosaed/screens/ServiceScreen';
import ServiceDrawer from '../../../mosaed/screens/ServiceDrawer';
import WorkersScreen from '../../../mosaed/screens/WorkersScreen';
import SponsorshipScreen from '../../../mosaed/screens/SponsorshipScreen';
import WorkerComponents from '../../../mosaed/screens/WorkerComponents';
import ButtonScreen from '../../../mosaed/screens/ButtonScreen';
import CompaniesScreen from '../../../mosaed/screens/CompaniesScreen';
import InputComponent from '../../../mosaed/screens/InputComponent';
import SavedScreen from '../../../mosaed/screens/SavedScreen';
import ProfileScreen from '../../../mosaed/screens/ProfileScreen';
import ContactScreen from '../../../mosaed/screens/ContactScreen';
import SalmaProfile from '../../../mosaed/screens/SalmaProfile';
import ModalComponent from '../../../mosaed/screens/ModalComponent';
import TermsComponent from '../../../mosaed/screens/TermsComponent';
import ServiceRenderComponent from '../../../mosaed/screens/ServiceRenderComponent';
import Store from '../../../mosaed/Redux/Store';



const DrawerStack = createDrawerNavigator();
const Drawer = () => {

  // const [drawers, setDrawers] = useState(false)



  return (
    <DrawerStack.Navigator   screenOptions={{ headerShown: false, drawerType: "back"/* ,ViewStyles  */,sceneContainerStyle: { backgroundColor: "#fff" }, overlayColor: "transparent", drawerContentStyle: { backgroundColor: "red" }}} drawerContent={props => <ServiceDrawer {...props} />}>
      <DrawerStack.Screen name="ServiceScreen" component={ServiceScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="WorkersScreen" component={WorkersScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="ProfileScreen" component={ProfileScreen}></DrawerStack.Screen>
      <DrawerStack.Screen name="ContactScreen" component={ContactScreen}></DrawerStack.Screen>
    </DrawerStack.Navigator>
  );
}

const Route = createStackNavigator();
const Router = () => {
  return (
    <Route.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
      <Route.Screen name='SplashScreen' component={SplashScreen} />
      <Route.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <Route.Screen name='RegisterScreen' component={RegisterScreen} />
      <Route.Screen name='TermsAndCondition' component={TermsAndCondition} />
      <Route.Screen name='GetStartedScreen' component={GetStartedScreen} />
      <Route.Screen name='WorkerComponents' component={WorkerComponents}/>
      <Route.Screen name='DrawerScreen' component={Drawer} />
      <Route.Screen name='SponsorshipScreen' component={SponsorshipScreen} />
      <Route.Screen name='CompaniesScreen' component={CompaniesScreen} />
      <Route.Screen name='ButtonScreen' component={ButtonScreen} />
      <Route.Screen name='InputComponent' component={InputComponent} />
      <Route.Screen name='SavedScreen' component={SavedScreen} />
      <Route.Screen name='SalmaProfile' component={SalmaProfile} />
      <Route.Screen name='ModalComponent' component={ModalComponent} />
      <Route.Screen name='TermsComponent' component={TermsComponent} />
      <Route.Screen name='ServiceRenderComponent' component={ServiceRenderComponent} />
      <Route.Screen name='SponsorShipDetails' component={SponsorShipDetails} />

    </Route.Navigator>
  )
}
export default Router;


























// const BottomTab = createBottomTabNavigator();
// const Bottom =()=>{
// return(
//   <BottomTab.Navigator>
//   <BottomTab.Screen options={{tabBarIcon:()=><Icon name="back" size={24}/>}}  name="Button" component={Buttons} />
//   <BottomTab.Screen options={{tabBarIcon:()=><Icon name="profile" size={24}/>}} name="Loader" component={Loader} />
//   <BottomTab.Screen options={{tabBarIcon:()=><Icon name="switcher" size={24}/>}} name="FlatList" component={FlatLists} />
//   <BottomTab.Screen options={{tabBarIcon:()=><Icon name="scroll" size={24}/>}} name="modals" component={Modals} />
//   <BottomTab.Screen name="switchs" component={Switchs} />
//   <BottomTab.Screen name="ScrollScreen" component={scroll} />
//   <BottomTab.Screen name="SectionLists" component={SectionLists} />
// </BottomTab.Navigator>
// )
// }



// const StackStack = createNativeStackNavigator();
// const StackScreen=()=>{
//   return(
//   <StackStack.Navigator>
//     <StackStack.Screen name="Home" component={Home} />
//     <StackStack.Screen name="Buttons" component={Buttons} />
//     <StackStack.Screen name="FlatList" component={FlatLists} />
//     <StackStack.Screen name="Loader" component={Loader} />
//     <StackStack.Screen name="modals" component={Modals} />
//     <StackStack.Screen name="switchs" component={Switchs} />
//     <StackStack.Screen name="ScrollScreen" component={scroll} />
//     <StackStack.Screen name="SectionLists" component={SectionLists} />
//     <StackStack.Screen name="calculator" component={Calculator} />


//   </StackStack.Navigator>)
// }

{/* <DrawerStack.Screen name="TabRenderList" component={TabRenderList} />  */ }
{/* <DrawerStack.Screen name="GridPages" component={GridPages} /> */ }
{/* <DrawerStack.Screen name="screen" component={DrawerScreen} /> */ }
{/* <DrawerStack.Screen name="Input" component={InputScreen} /> */ }

{/* <DrawerStack.Screen name="Loader" component={Loader} />
      <DrawerStack.Screen name="FlatList" component={FlatLists} />
    <DrawerStack.Screen name="modals" component={Modals} />
    <DrawerStack.Screen name="switchs" component={Switchs} />
    <DrawerStack.Screen name="ScrollScreen" component={scroll} />
    <DrawerStack.Screen name="SectionLists" component={SectionLists} /> */}



{/* <Route.Screen name='HomePage' component={Homepage}/>
      <Route.Screen name='stack' component={StackScreen}/>
      <Route.Screen name='drawer' component={Drawer}/>
      <Route.Screen name='BottomTab' component={Bottom}/>
      <Route.Screen name='Calculator' component={Calculator}/> */}






import { View, Text, FlatList, Modal } from 'react-native';
import Buttons from '../Buttons';
import FlatLists from '../FlatList';
import Loader from '../Loader';
import Modals from '../modal';
import Home from '../Pages/Home';
import Homepage from '../Pages/Homepage';
import scroll from '../Scroll';
import SectionLists from '../SectionList';
import Switchs from '../switch';
import DrawerContent from '../DrawerContent';
import DrawerScreen from '../DrawerScreen';
import InputScreen from '../InputScreen';
import GridPages from '../GridPages';
import Calculator from '../Calculator';
import SponsorShipDetails from '../../../mosaed/screens/SponsorShipDetails';
// import { interpolate } from 'react-native-reanimated';




