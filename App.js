
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { NavigationContainer } from '@react-navigation/native';
 import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Emporium from "../MyApp/EMPORIUM/Emporium"
import Sjo from "../MyApp/SJO/Sjo"
import Pattern from "./PatternPrinting/pattern"
import Whatsapp from '../MyApp/WhatsApp/Whatsapp'
const HEIGHT = Dimensions.get('window').width;
const WIDTH = Dimensions.get('window').height

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };
  return (
   <View style={{flex:1}}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
        
        barStyle={"dark-content"}
      />
          {/* <Emporium /> */}
          {/* <Sjo /> */}
          {/* <Pattern/> */}
          <Whatsapp />
   </View>
  );
};


export default App;
