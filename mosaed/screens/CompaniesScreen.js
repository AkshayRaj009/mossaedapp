import React, { useEffect, useState } from 'react'
import { View, TextInput, Image, FlatList, Dimensions } from "react-native"
import HeaderComponent from './HeaderComponent';
import { rightbackarrow } from '../assets/Images/index';
import WorkersListRenderItem from './WorkersListRenderItem';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { Company } from '../Redux/actions/CreateActions';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height



const CompaniesScreen = ({ navigation }) => {
    const [input, setInput] = useState("")
    console.log(input);
    const dispatch = useDispatch();
    const Data = useSelector((store) => store.CommonReducers.companyData);
    console.log("Data", Data);

    const postData = async () => {
        dispatch(Company())
    }
    useEffect(() => {
        postData()
    }, [])
    const Datafilter = Data.filter(name => input === "" ? name : name.name.toLowerCase().includes(input.toLowerCase()))
    return (
        <>
        {/* <View style={{overflow:"hidden"}}> */}
            <LinearGradient start={{ x: 0.70, y: 0.20 }} end={{ x: 0, y: 0.50 }} colors={['#1373DF', "#319FBB", '#2ECBAA']} style={{ position: "absolute", bottom: 560, left: -690, width: HEIGHT * 2.1, height: HEIGHT * 2.1, borderRadius: HEIGHT * 1.1, overflow: "hidden" }}></LinearGradient>
            <HeaderComponent navigation={() => navigation.goBack()} leftlogo={rightbackarrow} title="Companies" />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TextInput value={input} onChangeText={(text) => setInput(text)}
                    style={{ width: WIDTH * 0.80, height: HEIGHT * 0.060, backgroundColor: "grey", paddingLeft: 30, opacity: 0.5, borderRadius: 7, marginTop: 20 }}
                    placeholder="Search"
                    placeholderTextColor={'#fff'}
                />
                <Image style={{ position: "absolute", bottom: 17, left: 48, width: WIDTH * 0.040, height: HEIGHT * 0.019, }}
                    source={require("../assets/Images/serachimage.png")}
                />
            </View>
            <FlatList
                data={Datafilter}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <WorkersListRenderItem starstyle={{}} style={{ marginHorizontal: 10 }} {...item} />
                }
            />
              {/* </View> */}

        </>
    )
}
export default CompaniesScreen;