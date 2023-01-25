
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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

import Buttons from './src/components/Buttons';
import Loader from './src/components/Loader';
import Pictures from './src/components/Pictures';
import Flatlist from './src/components/FlatList';
import Textinput from './src/components/TextInput'
import Switch from './src/components/switch';
import Modal from './src/components/modal';
import Scroll from './src/components/Scroll';
import FlatistModal  from './src/components/FlatlistModal';
import Refershing from './src/components/Refershing';
import Router from './src/components/Routes/router'
import { Provider } from 'react-redux'
import { store } from './mosaed/Redux/Store';

const HEIGHT = Dimensions.get('window').width;
const WIDTH = Dimensions.get('window').height;

// import Route from './mosaed/Routing/Route'
// import Index from './mosaed/Routing/Index';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title})=> {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
   <>
   <View style={{flex:1}}>
    {/* <SafeAreaView style={backgroundStyle} > */}
    {/* <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={["#387FDA", "#2ECBAA"]} style={{ position: "absolute",bottom: 442, right: -390, right: -390, width: HEIGHT * 3, height: HEIGHT * 3, borderRadius: HEIGHT * 2.1 }}></LinearGradient>
   <SafeAreaView style={{flex:0}}/>  */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
        {/* <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */}
        {/* <View> */}
          {/* <Buttons/>
          <Loader />
          <Pictures />
          <Flatlist />
          <Textinput />
          <Switch />
          <Scroll /> */}
          {/* <Modal /> */}
          {/* <FlatistModal /> */}
          
          {/* </View> */}
     {/*  </ScrollView> */}
      {/* <Refershing /> */}
     <Provider store={store}>
     <NavigationContainer>
      <Router />
      </NavigationContainer>
     </Provider>
    {/* </SafeAreaView> */}
   {/* <SafeAreaView style={{flex:0,backgroundColor:"#fff"}} /> */}
   </View>
    </>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


export default App;
