import React from 'react'
import { View, Text, Image, Pressable, Dimensions } from "react-native"
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInLeft } from 'react-native-reanimated';
// images
import lexiangimage from "../../mosaed/assets/Images/lexiangimage.png"
import medicalimage from "../../mosaed/assets/Images/medicalimage.png"
import staffingimage from "../../mosaed/assets/Images/staffingimage.png"
import heartimage from "../../mosaed/assets/Images/heartimage.png"
import nurseimage from "../../mosaed/assets/Images/firstnurseimage.png"
import smallnurse from "../../mosaed/assets/Images/smallnurseimage.png"
import starimage from "../../mosaed/assets/Images/starimage.png"
import pinkimage from "../../mosaed/assets/Images/pinksaveimgae.png"

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const WorkersListRenderItem = (props) => {
    const navigation = useNavigation()
    const { name, company, rate, country, placeholder, style, starstyle, description,designation, bookmark = false } = props
console.log("ro====>>",props.route);
    const img = {
        "Lexiang Company": lexiangimage,
        "Flexcare Medical Staffing": medicalimage,
        "Travel Nurse": lexiangimage,
        "Fusion Medical Staffing": staffingimage,
        "Atlas Medstaff": heartimage,
        "Or Nurses Nationwide": medicalimage,
    }
    const starimages = {
        "Lexiang Company": starimage,
        "Flexcare Medical Staffing": starimage,
        "Travel Nurse": starimage,
        "Fusion Medical Staffing": starimage,
        "Atlas Medstaff": starimage,
        "Or Nurses Nationwide": starimage
    }
    const images = {
        "Salma Saeed": nurseimage,
        "Nursing": smallnurse
    }
    const path = {
        "Salma Saeed": "SalmaProfile"
    }

    return (
        <Pressable onPress={() => navigation.navigate(path[name], {
           item:{
            name:name,
            company:company,
            description:description,
            rate:rate,
            country:country,
            designation:designation

           }
          })}>
            <Animated.View entering={FadeInLeft.delay(props.id * 550)} style={{shadowColor:'black',shadowOpacity:0.1,backgroundColor: '#FDFCFF', marginVertical: 10, borderRadius: 5, flexDirection: "row", height: HEIGHT * 0.11, alignItems: "center", ...style }}>
                <View>
                    <Text>{placeholder}</Text>
                </View>
                <Image style={{ marginHorizontal: 15 }}
                    source={images[name]} />
                <Image
                    source={img[name]}
                />
                <View>
                    <Pressable /* onPress={() => navigation.navigate(paths[name])} */>
                        <Text style={{ marginHorizontal: 5, fontWeight: "bold", fontSize: 14,marginVertical:3 }}>{name}</Text>
                        <Image style={[{ marginHorizontal: 5 }, starstyle]}
                            source={starimages[name]}
                        />
                    </Pressable>

                    <Text style={{ fontSize: 11, marginHorizontal: 5 }}>{company}</Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 5, alignItems: "center" }}>
                        <Image style={{ marginVertical: 4 }}
                            source={images[designation]} />
                        <Text style={{ marginHorizontal: 5, fontSize: 12 }}>{designation}</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 65 }}>
                    {bookmark && <Image style={{marginLeft:18,marginVertical:3}}
                        source={pinkimage}
                    />}
                    <Text style={{fontSize:17,fontWeight:"bold"}}>{rate}</Text>
                    <Text  style={{fontSize:14,fontWeight:"bold"}}>{country}</Text>
                </View>
            </Animated.View>
        </Pressable>
    )
}

export default WorkersListRenderItem