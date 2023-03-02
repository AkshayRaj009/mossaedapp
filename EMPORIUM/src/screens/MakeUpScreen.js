import React, { useRef } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { bellIcon, blackBackArrow, whiteHeart } from "../assests/index"
import { makeupData, makeupDetails } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'
import GeneralDetailsComponent from '../components/GeneralDetailsComponent'

const MakeUpScreen = ({ navigation }) => {
    const ref = useRef()
    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }
    const ScrollView = (index) => {
        ref.current.scrollToIndex({ animated: true, index: index })
    }
    const slideshow = (type) => {
        switch (type) {
            case "GENERAL":
                return <View style={{ width: WIDTH, height: HEIGHT * 0.888 }}>
                    <GeneralDetailsComponent />
                </View>

            case "FACE":
                return <View style={{ width: WIDTH }}>
                    <GeneralDetailsComponent />
                </View>

            case "EYES":
                return <View style={{ width: WIDTH }}>
                    <GeneralDetailsComponent />
                </View>
        }
    }
    return (
        <View>
            <SafeAreaView>
                <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="MAKEUP" image={blackBackArrow} />
                <View style={{ marginTop: HEIGHT * 0.05, marginHorizontal: 7 }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={makeupDetails}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>
                            <Pressable onPress={() => { ScrollView(index) }} style={{ marginHorizontal: HEIGHT * 0.008 }} >
                                <Text style={{ color: "#A8A398" }} >{item.title}</Text>
                            </Pressable>
                        } />
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled={true}
                    scrollEnabled={false}
                    ref={ref}
                    viewabilityConfig={_viewabilityConfig}
                    data={makeupData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={{}}>
                            {slideshow(item.case)}
                        </View>
                    }

                />
            </SafeAreaView>
        </View>
    )
}

export default MakeUpScreen