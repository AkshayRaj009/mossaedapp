import React, { useState, useRef, useCallback } from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { LeftArrow, buttonRightArrow, buttonLeftArrow, cabanaSquare, customBathroom, RoomFloor, wardrobe, wallImage, windowsutters, lifterImage, bathromType, conditioner, outerCover, TOWHOOK, size8, size23, size14 } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { customdata, customFlatlist, RoomFloorData, wardose, wallData, shuttersData, liftersData, BathroomType, condition, outerCovers, watertank, } from '../constants/FlatlistArray';
import Svg, { G, Circle } from 'react-native-svg'
import HeaderComponent from '../components/HeaderComponent'
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import CustomDataComponent from '../components/CustomDataComponent';
import WindowsComponent from '../components/WindowsComponent';
import ShuttersComponent from '../components/ShuttersComponent';
import CabanaComponenet from '../components/CabanaComponenet';
import Animated from 'react-native-reanimated';

const CustomScreen = ({ navigation }) => {
    const [scroll, setScroll] = useState(0)
    const ref = useRef()

    const scrollView = (index) => {
        ref.current.scrollToIndex({ animated: true, index: index + 1 })
    }
    const backscrollView = (index) => {
        ref.current.scrollToIndex({ animmated: true, index: index - 1 })
    }
    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
        setScroll(viewableItems[0].index)
    }, []);
    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }

    const size = 125;
    const strokeWidth = 4;
    const center = size / 4;
    const radius = size / 4.5 - strokeWidth / 5;
    const circumference = 2 * Math.PI * radius

    const progressAnimation = useRef(new Animated.Value(0)).current
    const progressRef = useRef(null)

    const animation = (tovalue) => {
        return Animated.timing(progressAnimation, {
            tovalue,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

    const headerTitle = [
        {
            title: "CABAN SIZE",
            text: "Step 1/12",
            numb: "8%",
        },
        {
            title: "BATHROOM SIZE",
            text: "Step 2/12",
            numb: "10%",
        },
        {
            title: "ROOM FLOOR",
            text: "Step 3/12",
            numb: "12%",
        },
        {
            title: "WARDOBE",
            text: "Step 4/12",
            numb: "14%",
        },
        {
            title: "THE WALL",
            text: "Step 5/12",
            numb: "23%",
        },
        {
            title: "WINDOW SIZE",
            image: size8,
            text: "Step 6/12",
            numb: "12%",
        },
        {
            title: "WINDOW SHUTTERS",
            text: "Step 7/12",
            numb: "12%",
        },
        {
            title: "LIFTERS",
            text: "Step 8/12",
            numb: "25%",
        },
        {
            title: "BATROOM TYPE",
            text: "Step 9/12",
            numb: "35%",
        },
        {
            title: "CONDITION",
            text: "Step 10/12",
            numb: "43%",
        },
        {
            title: "OUTER COVER",
            text: "Step 11/12",
            numb: "29%",
        },
        {
            title: "WATER TANK",
            text: "Step 12/12",
            numb: "55%",
        },
        {
            title: "TOW HOOK",
            text: "Step 12/12",
            numb: "25%",
        },
    ]
    const slideshow = (type) => {
        switch (type) {
            case "CABANA SIZE":
                return (
                    <View style={{ alignItems: "center", marginTop: 46, width: WIDTH }} >
                        <CabanaComponenet image={cabanaSquare} textStyle={{ marginTop: 20 }} titleStyle={{ marginTop: 28 }} title="CABANA SIZE" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 36, }}>
                            <InputComponent inputstyle={{ borderWidth: 2, borderRadius: 6, height: HEIGHT * 0.07, width: WIDTH * 0.88, backgroundColor: "black" }} inputText="Length" />
                            <View style={{ marginTop: 30 }}>
                                <InputComponent inputstyle={{ borderWidth: 2, borderRadius: 6, height: HEIGHT * 0.07, width: WIDTH * 0.88, backgroundColor: "black" }} inputText="Width" />
                            </View>
                        </View>
                    </View>
                )
            case "BATHROOM SIZE":
                return (
                    <View style={{ alignItems: "center", marginTop: 35 }} >
                        <CabanaComponenet image={customBathroom} title="BATHROOM SIZE" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 15, width: WIDTH, height: HEIGHT * 0.30 }} >
                            <FlatList
                                data={customFlatlist}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginVertical: 4 }} >
                                        <WindowsComponent title={item.title} text={item.text} />
                                    </View>} />
                        </View>
                    </View>
                )
            case "ROOM FLOOR":
                return (
                    <View style={{ alignItems: "center", marginTop: 30 }} >
                        <CabanaComponenet image={RoomFloor} titleStyle={{ marginTop: 8 }} textStyle={{ marginTop: 15 }} title="ROOM FLOOR" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ width: WIDTH, height: HEIGHT * 0.8, marginTop: 14 }} >
                            <FlatList
                                data={RoomFloorData}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginVertical: 4 }} >
                                        <CustomDataComponent style3={{ marginTop: 0 }} style2={{ marginTop: 15 }} image={item.image} style1={{ height: HEIGHT * 0.08 }} title={item.title} />
                                    </View>} />
                        </View>
                    </View>
                )
            case "WARDROBE":
                return (
                    <View style={{ alignItems: "center", marginTop: 22 }} >
                        <CabanaComponenet titleStyle={{ marginTop: 10 }} textStyle={{ marginTop: 15 }} image={wardrobe} title="WARDROBE" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 20, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                data={wardose}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginVertical: 4 }} >
                                        <CustomDataComponent style2={{ marginHorizontal: 0 }} image={item.image} style1={{ height: HEIGHT * 0.08 }} title={item.title} />
                                    </View>} />
                        </View>
                    </View>
                )
            case "THE WALL":
                return (
                    <View style={{ alignItems: "center", marginTop: 28 }} >
                        <CabanaComponenet image={wallImage} title="THE WALL" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 33, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                data={wallData}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginVertical: 6 }} >
                                        <CustomDataComponent style3={{ marginTop: 0 }} style2={{ marginHorizontal: 15, marginTop: 15 }} image={item.image} style1={{ height: HEIGHT * 0.08 }} title={item.title} />
                                    </View>} />
                        </View>
                    </View>
                )
            case "WINDOW SIZE":
                return (
                    <View style={{ alignItems: "center", marginTop: 28 }} >
                        <CabanaComponenet image={wallImage} title="WINDOW SIZE" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 12, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                data={customFlatlist}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginVertical: 10 }} >
                                        <WindowsComponent title={item.title} text={item.text} />
                                    </View>} />
                        </View>
                    </View>
                )
            case "WINDOW SHUTTERS":
                return (
                    <View style={{ alignItems: "center", marginTop: 28 }} >
                        <CabanaComponenet image={windowsutters} title="WINDOW SHUTTERS" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 38, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                contentContainerStyle={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}
                                data={shuttersData}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <>
                                        <ShuttersComponent text={item.text} title={item.title} />
                                    </>} />
                        </View>
                    </View>
                )
            case "LIFTERS":
                return (
                    <View style={{ alignItems: "center", marginTop: 28 }} >
                        <CabanaComponenet image={lifterImage} title="LIFTERS" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 55, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                contentContainerStyle={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}
                                data={liftersData}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <>
                                        <ShuttersComponent index={index} text={item.text} title={item.title} />
                                    </>} />
                        </View>
                    </View>
                )
            case "BATROOM TYPE":
                return (
                    <View style={{ alignItems: "center", marginTop: 28 }} >
                        <CabanaComponenet image={bathromType} title="BATHROOM TYPE" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 38, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                contentContainerStyle={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}
                                data={BathroomType}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <>
                                        <ShuttersComponent index={index} text={item.text} title={item.title} />
                                    </>} />
                        </View>
                    </View>
                )
            case "CONDITION":
                return (
                    <View style={{ alignItems: "center", marginTop: 38 }} >
                        <CabanaComponenet titleStyle={{ marginTop: 10 }} textStyle={{ marginTop: 15 }} image={conditioner} title="CONDITION" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 13, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                data={condition}
                                numColumns={2}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginHorizontal: 10, marginTop: 7 }}>
                                        <View style={{ backgroundColor: "black", height: HEIGHT * 0.08, width: WIDTH * 0.44, alignItems: "center", justifyContent: "center", borderRadius: 8 }} >
                                            <Text style={{ color: "#fff", fontSize: 20 }} >{item.title}</Text>
                                        </View>
                                    </View>} />
                        </View>
                    </View>
                )
            case "OUTER COVER":
                return (
                    <View View style={{ alignItems: "center", marginTop: 38 }
                    } >
                        <CabanaComponenet image={outerCover} title="OUTER COVER" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 0, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                data={outerCovers}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginTop: 16 }} >
                                        <CustomDataComponent style3={{ marginTop: 0 }} style2={{ marginHorizontal: 15, marginTop: 15 }} image={item.image} style1={{ height: HEIGHT * 0.08 }} title={item.title} />
                                    </View>

                                } />
                        </View>
                    </View >
                )
            case "WATER TANK":
                return (
                    <View View style={{ alignItems: "center", marginTop: 38 }
                    } >
                        <CabanaComponenet titleStyle={{ marginTop: 13 }} textStyle={{ marginTop: 10 }} image={outerCover} title="WATER TANK" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 6, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                data={watertank}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <View style={{ marginTop: 5 }} >
                                        <WindowsComponent titleStyle={{ marginTop: 10, fontSize: 20 }} stye1={{ height: HEIGHT * 0.08 }} title={item.title} text={item.text} />
                                    </View>
                                } />
                        </View>
                    </View >
                )
            case "TOW HOOK":
                return (
                    <View style={{ alignItems: "center", marginTop: 28 }} >
                        <CabanaComponenet image={TOWHOOK} title="TOW HOOK" text="Lorem Ipsum Dolor Sit Amet," text1="Consetetur Sadipscing Elitr,Sed Diam" />
                        <View style={{ marginTop: 55, width: WIDTH, height: HEIGHT }} >
                            <FlatList
                                contentContainerStyle={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}
                                data={BathroomType}
                                keyExtractor={item => item.id}
                                renderItem={({ item, index }) =>
                                    <>
                                        <ShuttersComponent index={index} text={item.text} title={item.title} />
                                    </>} />
                        </View>
                    </View>
                )
            default:
        }
    }
    return (
        <View style={{ backgroundColor: "#0FC1A1", flex: 1 }}>
            <View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.89, borderBottomLeftRadius: 14, borderBottomRightRadius: 14 }} >
                <View style={{ backgroundColor: "black", height: HEIGHT * 0.26 }}>
                    <HeaderComponent drawerNavigation={() => scroll === 0 ? navigation.goBack() : backscrollView(scroll)} leftLogo={LeftArrow} Title="CUSTOM" />
                    <View style={{ marginHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }} >
                        <View style={{}} >
                            <Text style={{ color: "#fff", fontSize: 20, marginTop: 30 }} >{headerTitle[scroll].title}</Text>
                            <Text style={{ color: "#0FC1A1", fontSize: 18, marginTop: 8 }} >{headerTitle[scroll].text}</Text>
                        </View>
                        <View style={{ marginTop: 20, marginRight: -40 }} >
                            <Svg width={size} height={size} >
                                <View style={{ alignItems: "center", paddingRight: HEIGHT * 0.07, paddingTop: 19 }} >
                                    <Text style={{ color: "#fff", fontSize: 16, alignItems: "center" }} >{headerTitle[scroll].numb}</Text>
                                </View>
                                <G rotation="-90" origin={center}>
                                    <Circle
                                        stroke={"#181D23"}
                                        cx={center}
                                        cy={center}
                                        r={radius}
                                        strokeWidth={strokeWidth}
                                    />
                                    <Circle
                                        ref={progressRef}

                                        stroke={"#FFB300"}
                                        cx={center}
                                        cy={center}
                                        r={radius}
                                        strokeWidth={strokeWidth}
                                        strokeDasharray={circumference}
                                        strokeDashoffset={circumference - (circumference * 60) / 100}
                                    />
                                </G>
                            </Svg>
                        </View>
                    </View>
                </View>
                <View style={{ width: WIDTH }}>
                    <FlatList
                        ref={ref}
                        onViewableItemsChanged={onViewableItemsChanged}
                        viewabilityConfig={_viewabilityConfig}
                        scrollEnabled={false}
                        horizontal
                        data={customdata}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <>
                                {slideshow(item.case)}
                            </>
                        }
                    />
                </View>
            </View>
            <View style={{ marginTop: 20 }} >
                <ButtonComponent navigation={() => scroll === 12 ? navigation.navigate("WaterTankCustom") : scrollView(scroll)} style1={{ marginTop: -7 }} buttonStyle={{ borderLeftRadius: 20, borderWidth: 0, backgroundColor: 0 }} title="NEXT" LeftArrow={buttonLeftArrow} RightArrow={buttonRightArrow}
                />
            </View>
        </View>

    )
}

export default CustomScreen
