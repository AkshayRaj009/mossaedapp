import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, Dimensions, SafeAreaView } from "react-native"
import { drawericon, bookmarkoutlineimage } from '../../mosaed/assets/Images/index';
import { useDrawerProgress } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { HomeData } from '../Redux/actions/CreateActions';
import HeaderComponent from './HeaderComponent';
import LinearGradient from 'react-native-linear-gradient';
import ServiceRenderComponent from './ServiceRenderComponent';
import CompaniesScreen from './CompaniesScreen';

const HEIGHT = Dimensions.get('window').width;
const WIDTH = Dimensions.get('window').height;

const ServiceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const Data = useSelector((store) => store.CommonReducers.data);
  console.log("Data", Data);

  const getData = async () => {
    dispatch(HomeData())
  }

  useEffect(() => {
    getData()
  }, [])

  const drawerProgress = useDrawerProgress()
  const animationstyles = useAnimatedStyle(() => {
    const scale = interpolate(
      drawerProgress.value,
      [0, 1],
      [1, 0.8]
    )
    return {
      transform: [{ scale }],
      borderRadius: drawerProgress.value * 30
    }
  }
  )
  // '#1373DF', "#319FBB", '#2ECBAA'
  return (
    <>
          <View style={{ position: "absolute", top: HEIGHT * 0.30, height: HEIGHT * 1.35, backgroundColor: "#319FBB", opacity: 0.25, borderRadius: 20, left: 12, overflow: "hidden" }}>
        <CompaniesScreen />
      </View>
      <Animated.View style={[{ overflow: "hidden", backgroundColor: '#fff' }, animationstyles]}>
        <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={["#387FDA", "#2ECBAA"]} style={{ position: "absolute", bottom: 450, right: -390, right: -390, width: HEIGHT * 3, height: HEIGHT * 3, borderRadius: HEIGHT * 2.1 }}></LinearGradient>
        <HeaderComponent leftlogo={drawericon} rightlogo={bookmarkoutlineimage} title='Services' navigation={() => navigation.toggleDrawer()} rightnavigation={() => navigation.navigate("SavedScreen")} />
        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 25 }}>
          <Image
            source={require("../assets/Images/coiamge.png")}
          />
          <Text style={{ color: "#fff", marginVertical: 50, fontSize: 18, marginHorizontal: 80, textAlign: "center" }}>What service are you looking for ?</Text>
        </View>
        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <ServiceRenderComponent {...item} />
          }
        />
      </Animated.View>

    </>
  )
}
export default ServiceScreen;