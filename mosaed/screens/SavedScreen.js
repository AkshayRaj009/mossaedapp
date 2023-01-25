import React from 'react'
import { View, Dimensions } from "react-native"
import HeaderComponent from './HeaderComponent'
import { rightbackarrow } from '../../mosaed/assets/Images/index';
import WorkerComponents from './WorkerComponents';
import LinearGradient from 'react-native-linear-gradient';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const SavedScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ overflow: "hidden" }}>
        <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={['#1373DF', "#319FBB", '#2ECBAA']} style={{ position: "absolute", bottom: HEIGHT*0.88, right: -730, width: HEIGHT * 2.2, height: HEIGHT * 2.2, borderRadius: HEIGHT * 1.1, }}></LinearGradient>
        <HeaderComponent navigation={() => navigation.goBack()} title="Saved" leftlogo={rightbackarrow} />
        <WorkerComponents style={{}} bookmark={true} />
      </View>
    </>
  )
}

export default SavedScreen