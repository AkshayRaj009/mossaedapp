import React from 'react'
import { View, Text, FlatList, Dimensions } from "react-native"


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const TermsComponent = () => {
    const DATA = [
        {
            id: "1",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "2",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "3",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "4",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "5",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "6",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "7",
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },

    ]

    return (
        <View >
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Text style={{ marginHorizontal: 10, marginVertical: 15 }}>{item.title}</Text>
                }
            />
        </View>
    )
}

export default TermsComponent