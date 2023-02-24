import React, { useCallback, useRef, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow, whiteHeart } from "../assests/index"
import { makeUpDatas } from '../constants/FlatlistArray'


const GeneralDetailsComponent = () => {
    return (
        <View style={{ marginTop: HEIGHT * 0.04, backgroundColor: "#FFFFFF250" }}>
            <FlatList
            style={{marginLeft:HEIGHT*0.02}}
                numColumns={2}
                data={makeUpDatas}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) =>
                    <View style={{ marginHorizontal: 12, marginBottom: HEIGHT * 0.03 }} >
                        <View style={{ backgroundColor: "#fff", padding: 3, height: HEIGHT * 0.31 }}>
                            <Image source={item.image} />
                            <View style={{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.07, width: WIDTH * 0.07, borderRadius: WIDTH * 0.7 / 2, borderWidth: 2, backgroundColor: "#fff", position: "absolute", top: HEIGHT * 0.20, right: HEIGHT * 0.02, borderColor: "#fff" }} >
                                <Image source={item.like} />
                            </View>
                            <Text style={{ fontWeight: "600", fontSize: 19, marginHorizontal: HEIGHT * 0.01, marginTop: 10 }} >{item.title}</Text>
                            <Text style={{ color: "#B89962", fontSize: 16, marginHorizontal: HEIGHT * 0.01, marginTop: HEIGHT * 0.01 }}>{item.num}</Text>


                        </View>
                    </View>

                }
            />
        </View>
    )
}

export default GeneralDetailsComponent