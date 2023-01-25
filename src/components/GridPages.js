import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';
import { Dimensions } from 'react-native'
import TabRenderList from "./TabRenderList";
const width = Dimensions.get('window').width;

const GridPages = () => {


    const [direction, setDirection] = useState("");
    const [justifycontent, setJustifycontent] = useState("");
    const [alignitems, setAlignitems] = useState("");
    const [main, setMain] = useState({})

    const [selectedtab, setSelectedtab] = useState("Direction");
    const refs = useRef(null);

    useEffect(() => {
        console.log(main);
    }, [main])
    

    const DATA = [
        {
            id: "1",
            title: 'row',

        },
        {
            id: "2",
            title: 'row-reverse'
        },
        {
            id: "3",
            title: 'column'
        },
        {
            id: "4",
            title: 'column-reverse'
        },
    ]
    const property = [
        {
            id: "1",
            title: 'Direction',

        },
        {
            id: "2",
            title: 'JustifyContent'
        },
        {
            id: "3",
            title: 'Align Items'
        },

    ]

    const CELL2 = [
        {
            id: "1",
            title: 'flex-start'
        },
        {
            id: "2",
            title: 'center'
        },
        {
            id: "3",
            title: 'flex-end'
        },
        {
            id: "4",
            title: 'space-between'
        },
        {
            id: "5",
            title: 'space-around'
        },
        {
            id: "6",
            title: 'space-evenly'
        },
    ]

    const CELL3 = [
        {
            id: "1",
            title: "flex-start"
        },
        {
            id: "2",
            title: "center"
        },
        {
            id: "3",
            title: "flex-end"
        },
        {
            id: "4",
            title: "stretch"
        },
        {
            id: "5",
            title: "baseline"
        },

    ]
    return (
        <View style={{ paddingTop: 50 }}>
            <View style={{ height: 150,...main }}>
                <View style={{ borderRadius: 5, width: 60 }}>
                    <Text style={{ backgroundColor: 'grey' }}>CELL 1</Text>
                </View>
                <View style={{ borderRadius: 5, width: 60 }}>
                    <Text style={{ backgroundColor: 'grey' }}>CELL 2</Text>
                </View>
                <View style={{ borderRadius: 5, width: 60 }}>
                    <Text style={{ backgroundColor: "grey" }}>CELL 3</Text>
                </View>
            </View>
            <FlatList style={{ borderWidth: 0 }}
                data={property}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({ item, index }) => {
                    console.log("v ====>", item);
                    return (
                        <Pressable onPress={() => {
                            setSelectedtab(item.title)
                            refs.current.scrollTo({
                                animate: true, x: index * width
                            })
                        }}>
                            <Text style={{ marginHorizontal: 20, fontSize: 18, color: "grey" }}>{item.title}</Text>
                            {selectedtab === item.title ? <View style={{ borderBottomWidth: 2 }}></View> : ""}
                        </Pressable>

                    )
                }}
            />
            <View>
                <ScrollView horizontal ref={refs} pagingEnabled>
                    <TabRenderList data={DATA} value={direction} onChange={(v) =>{ 
                        setMain({...main,flexDirection:v})
                        setDirection(v)}} />
                    <TabRenderList data={CELL2} value={justifycontent} onChange={(v) => {
                        setMain({...main,justifyContent:v})
                        setJustifycontent(v)}} />
                    <TabRenderList data={CELL3} value={alignitems} onChange={(v) => {
                        setMain({...main,alignItems:v})
                        setAlignitems(v)}} />
                </ScrollView>
            </View>


            {/* <Text style={{ color: 'grey', fontSize: 18,paddingTop:40}}>JUSTIFYCONTENT</Text>
            <View>
            <FlatList
                data={CELL2}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={{flexDirection: 'row',marginHorizontal:5,marginTop:5}}>
                                <Pressable onPress={() => setJustifycontent(item.title)} style={{ borderWidth: 1, height: 20, width: 20, borderRadius: 30,marginHorizontal:8, backgroundColor: justifycontent === item.title ? 'green' : 'wheat' }}>
                                </Pressable>
                                <Text>{item.title}</Text>
                            </View>
                        </View>
                    )
                }}
            /></View> */}
            {/* <Text style={{color:'grey',fontSize:18,paddingTop:40}}>ALIGNITEMS</Text>
            <View>
                <FlatList 
                    data={CELL3}
                    keyExtractor={item => item.id}
                    horizontal
                    renderItem={({ item }) =>{
                        return(
                            <View>
                                <View style={{flexDirection: 'row',marginHorizontal:5,marginTop:5}}>
                                    <Pressable onPress={() => setAlignitems(item.title)} style={{borderWidth: 1, height: 20, width: 20, borderRadius: 30,marginHorizontal:8, backgroundColor: alignitems === item.title ? 'blue' : 'wheat'}}>
                                    </Pressable>           
                                <Text>{item.title}</Text>
                                </View>
                            </View>
                        )
                    }}

                />
            </View>   */}
        </View>
    )


}
export default GridPages;

