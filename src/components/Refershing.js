// import React from "react";
// import { SafeAreaView, TextInput } from "react-native";

// const Refreshing = () => {
    
// };

// export default Refreshing;

import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false)
  }, 2000);
  };

  return (
    // <SafeAreaView style={styles.container}>
    <View  style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={()=>{onRefresh()}}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:200,
  
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height:200
  },
});

export default App;