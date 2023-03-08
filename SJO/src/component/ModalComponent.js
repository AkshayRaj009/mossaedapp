import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, Modal, TouchableWithoutFeedback } from 'react-native'
import { } from 'react-native-gesture-handler'

import { drawerIcon, rightBackArrow, BMWImage, bmwLogo } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carlistData, modalData } from "../constants/FlatListArray"

const ModalComponent = (props) => {
    const { onPress, visible,style1 } = props
  
    const navigation = useNavigation()
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                ><Pressable onPress={() => onPress()} style={{}}>

                    <View style={[{ height: HEIGHT * 0.40, marginTop: HEIGHT * 0.600, backgroundColor: 'white', borderRadius: 20, alignItems: 'center', shadowColor: '#00000030', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5, },style1]}>
                        <View>
                            <FlatList
                                style={{ marginTop: HEIGHT * 0.06 }}
                                data={modalData}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginBottom: HEIGHT * 0.007 }}  >
                                        <Pressable onPress={() => navigation.navigate(item.path)
                                        } style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }} >
                                            <Image source={item?.arrow} />

                                            <Text style={{ marginHorizontal: WIDTH * 0.09, fontSize: 16 }} >Bring a car to the current location</Text>
                                            <Image source={item?.image} />
                                        </Pressable>
                                        <View style={{ borderWidth: 1, borderColor: colors.borderGrey, marginHorizontal: WIDTH * 0, marginRight: WIDTH * 0.09, marginTop: HEIGHT * 0.021 }} />
                                    </View>
                                } />
                        </View>
                    </View>
                </Pressable>
            </Modal>

        </View>
    )
}

export default ModalComponent