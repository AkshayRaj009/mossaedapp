import React from 'react'
import { View, Text, Pressable, Image } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { useNavigation } from '@react-navigation/native';

const BechDetailsComponent = (props) => {
    const { image, starimage, Location, number, Qar, locationTitle, title, text,style1,titlecolor,numberStyle,numberstyle1,textStyle } = props
    const navigation = useNavigation()

    return (
        <View>
            <Pressable onPress={() => navigation.navigate("RentDetailsScreen")} style={[{ backgroundColor: "#181D23", height: HEIGHT * 0.12, marginVertical: 8, flexDirection: "row", alignItems: "center",borderRadius:10 },style1]}>
                <View style={{ flexDirection: "row",marginHorizontal:10,alignItems:"center" }}>
                    <Image source={image} />
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={[{ color: "#fff", fontSize: 20, marginVertical: 4 },titlecolor]}>{title}</Text>
                        <Image source={starimage} />
                        <Text style={[{ color: "#FF5F00", fontSize: 13, marginVertical: 4 },textStyle]}>{text}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={Location} />
                            <Text style={{ color: "#636B74", marginHorizontal: 4 }}>{locationTitle}</Text>
                        </View>
                    </View>
                    <View style={[{ alignItems: "center", justifyContent: "center", marginHorizontal: 43 },numberStyle]}>
                        <Text style={[{ color: "#0FC1A1", fontSize: 25, fontWeight: "bold", marginLeft: 25 },numberstyle1]}>{number}</Text>
                        <Text style={{ color: "#0FC1A1" }}>{Qar}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default BechDetailsComponent