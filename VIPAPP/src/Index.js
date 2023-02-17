import React from 'react'
import Routes from "../../VIPAPP/src/Routing/Routes"
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import {store} from "../../VIPAPP/src/Redux/Store"

const Index = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
   </Provider>
  )
}

export default Index