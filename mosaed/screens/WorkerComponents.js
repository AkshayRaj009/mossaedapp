import React, { useEffect, useState } from 'react'
import { View, FlatList, Pressable, Dimensions } from "react-native"
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WorkersListRenderItem from './WorkersListRenderItem';
import { Workers } from '../Redux/actions/CreateActions';
import { useDispatch, useSelector } from 'react-redux';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const token = AsyncStorage.getItem("token")

// console.log(HEIGHT * 0.11)
const WorkerComponents = ({ bookmark ,route,navigation}) => {

console.log("route",route);
    const dispatch = useDispatch();
    const Data = useSelector((store) => store.CommonReducers.workersdata);

    // const navigation = useNavigation()
    // const [getdata, setGetdata] = useState([])
    const getData = async () => {
        // await fetch(`${api}workers`, { method: "GET", headers: { authorization: token } }).then((response) => response.json()).then((data) => {
        //     console.log('Request succeeded with JSON response', data)
        //     setGetdata(data.data)
        // }
        // )
        //     .catch((error) =>
        //         console.log('Request failed', error)
        //     )
        dispatch(Workers())
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <View style={{ marginHorizontal: 20, marginTop: 43 }}>
            <FlatList
                data={Data}   
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                        <WorkersListRenderItem /* route={route} */ bookmark={bookmark} {...item}
                        />
                }
            />
        </View>
    )
}

export default WorkerComponents;