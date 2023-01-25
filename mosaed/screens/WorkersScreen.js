import React from 'react'
import { View, Dimensions } from "react-native"
import HeaderComponent from './HeaderComponent';
import { rightbackarrow, plusimage } from '../../mosaed/assets/Images/index';
import WorkerComponents from './WorkerComponents';
import ButtonScreen from './ButtonScreen';
import LinearGradient from 'react-native-linear-gradient';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const WorkersScreen = ({ navigation, route }) => {
 
    return (
        <>
            <View style={{ overflow: "hidden" }}>
                <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={["#387FDA", "#2ECBAA"]} style={{ position: "absolute", bottom: 750, right: -730, width: HEIGHT * 2.2, height: HEIGHT * 2.2, borderRadius: HEIGHT * 1.1, overflow: "hidden" }}></LinearGradient>
                <HeaderComponent navigation={() => navigation.goBack()} leftlogo={rightbackarrow} rightlogo={plusimage} title="Workers" text="Lexiang Company" style={{ marginVertical: 4 }} style1={{ color: "red" }} />
                <WorkerComponents bookmark={false} navigation={navigation} route={route} />
            </View>
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: "#FFFFFF", width: WIDTH, height: HEIGHT * 0.12, borderTopRightRadius: 10 }}>
                <ButtonScreen navigation={() => navigation.navigate("SponsorshipScreen")} title="Add New Worker" />
            </View>
        </>
    )
}
export default WorkersScreen;