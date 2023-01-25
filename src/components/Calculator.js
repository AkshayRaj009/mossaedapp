import React, { useState } from "react";
import { Dimensions } from 'react-native'

import {
    View,
    Text,
    Pressable,
    TextInput,
    FlatList
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Calculator = () => {
    // console.log(width * 0.12);
    // console.log(height * 0.065);

    const [display, setDisplay] = useState([]);
    const [calculate, setCalculate] = useState(false);





    const textinput = (item) => {
        setCalculate(false)
        display.push(item)
        setDisplay([...display])
    }
    const deleteFn = () => {
        display.pop()
        setDisplay([...display])
    }
    const clearFn = () => {
        display.splice([0])
        setDisplay([...display])
    }

    console.log(display)
    const DATA = [
        {
            id: "1",
            number: "7"
        },
        {
            id: "2",
            number: "8"
        }, {
            id: "3",
            number: "9"
        },
    ]
    const DATA2 = [
        {
            id: "1",
            number: "4"
        },
        {
            id: "2",
            number: "5"
        },
        {
            id: "3",
            number: "6"
        },

    ]
    const DATA3 = [
        {
            id: "1",
            number: "1"
        },
        {
            id: "2",
            number: "2"
        },
        {
            id: "4",
            number: "3"
        },
    ]
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', flexDirection: "row", position: "relative", paddingTop: 100 }}>
            <View style={{}}>
                <TextInput
                    style={{ padding: 10, fontSize: 22 }}
                    value={calculate? eval(display.join("")).toString(): display.join("")}
                />
                <View style={{ flexDirection: "row", }}>
                    <Pressable onPress={() => clearFn()} style={{ borderRadius: 22, backgroundColor: 'white', marginLeft: 22 }}>
                        <Text style={{ height: height * 0.052, borderRadius: 22, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20 }}>AC</Text>
                    </Pressable>
                    <Pressable onPress={() => deleteFn()} style={{ borderRadius: 22, marginLeft: 22, backgroundColor: "#fff", height: height * 0.052, width: width * 0.12, padding: 9 }}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}>+/-</Text>
                    </Pressable>
                    <Pressable style={{ borderRadius: 22, marginLeft: 22, backgroundColor: "#fff" }}>
                        <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20 }}>%</Text>
                    </Pressable>
                    <Pressable onPress={() => textinput("/")} style={{ borderRadius: 22, marginLeft: 22, backgroundColor: "orange" }}>
                        <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20, color: "#fff" }}>/</Text>
                    </Pressable>
                </View>
                <View>
                    <View style={{ justifyContent: "center", alignItems: 'center', marginRight: 70, paddingTop: 18, flexDirection: 'row' }}>
                        <FlatList
                            data={DATA}
                            horizontal
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable onPress={() => textinput(item.number)} style={{ backgroundColor: "grey", borderRadius: 22, marginLeft: 22 }}>
                                        <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 22, color: "#fff" }}>{item.number}</Text>
                                    </Pressable>
                                )
                            }}
                        />
                        <Pressable onPress={() => textinput("x")} style={{ borderRadius: 22, backgroundColor: "orange" }}>
                            <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20, color: "#fff" }}>x</Text>
                        </Pressable>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'center', marginRight: 70, paddingTop: 18, flexDirection: "row" }}>
                        <FlatList
                            data={DATA2}
                            horizontal
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable onPress={() => textinput(item.number)} style={{ backgroundColor: "grey", marginLeft: 22, borderRadius: 22 }}>
                                        <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20, color: "#fff" }}>{item.number}</Text>
                                    </Pressable>
                                )
                            }}
                        />
                        <Pressable onPress={() => textinput("-")} style={{ borderRadius: 22, backgroundColor: "orange" }}>
                            <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20, color: "#fff" }}>-</Text>
                        </Pressable>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: 'center', marginRight: 70, paddingTop: 18, flexDirection: "row" }}>
                        <FlatList
                            data={DATA3}
                            horizontal
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable onPress={() => textinput(item.number)} style={{ backgroundColor: "grey", marginLeft: 22, borderRadius: 22 }}>
                                        <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20, color: "#fff" }}>{item.number}</Text>
                                    </Pressable>
                                )
                            }}
                        />
                        <Pressable onPress={() => textinput("+")} style={{ borderRadius: 22, marginLeft: 22, backgroundColor: "orange", height: height * 0.052, width: width * 0.12, padding: 9 }}>
                            <Text style={{ textAlign: "center", fontSize: 20, color: "#fff" }}>+</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row", paddingTop: 20 }}>
                        <Pressable onPress={() => textinput("o")} style={{ marginLeft: 22, backgroundColor: "grey", borderRadius: 30, height: height * 0.052, width: width * 0.30, padding: 10, }}>
                            <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>O</Text>
                        </Pressable>
                        <Pressable onPress={() => textinput(".")} style={{ marginLeft: 22, backgroundColor: "grey", borderRadius: 30, height: height * 0.052, width: width * 0.12, padding: 13, }}>
                            <Text style={{ textAlign: "center", fontSize: 18, color: "#fff" }}>.</Text>
                        </Pressable>
                        <Pressable onPress={()=>{
                            console.log(eval(display.join("")));
                            setCalculate(true)
                            }} style={{ borderRadius: 22, marginLeft: 22, backgroundColor: "orange" }}>
                            <Text style={{ height: height * 0.052, width: width * 0.12, padding: 9, textAlign: "center", fontSize: 20, color: "#fff" }}>=</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Calculator;