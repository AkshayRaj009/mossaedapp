import React from 'react'
import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { smallWhiteTick } from "../assests/index"

const OrderStausComponent = () => {
    return (
        <View>
            <View style={{ marginTop: HEIGHT * 0.02, marginHorizontal: HEIGHT * 0.02 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.04, width: WIDTH * 0.04, borderRadius: WIDTH * 0.4 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962" }]} >
                        <Image source={smallWhiteTick} />
                    </View>
                    <View style={[{ borderWidth: 1.3, height: 1, width: WIDTH * 0.23, borderColor: "#B89962" }]} />
                    <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.04, width: WIDTH * 0.04, borderRadius: WIDTH * 0.4 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962" }]} >
                        <Image source={smallWhiteTick} />
                    </View>
                    <View style={[{ borderWidth: 1.3, height: 1, width: WIDTH * 0.23, borderColor: "#B89962" }]} />
                    <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.04, width: WIDTH * 0.04, borderRadius: WIDTH * 0.4 / 2, borderColor: "#B89962", borderWidth: 2, backgroundColor: "#B89962" }]} >
                        <Image source={smallWhiteTick} />
                    </View>
                    <View style={[{ borderWidth: 1.3, height: 1, width: WIDTH * 0.23, borderColor: "#DFE1DE" }]} />
                    <View style={[{ justifyContent: "center", alignItems: "center", height: WIDTH * 0.04, width: WIDTH * 0.04, borderRadius: WIDTH * 0.4 / 2, borderColor: "#DFE1DE", borderWidth: 2 }]} />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: HEIGHT * 0.02, marginTop: HEIGHT * 0.02 }}>
                <Text style={{color:"#A8A398"}} >On The Way</Text>
                <Text style={[{  }]}>Monday,28,July</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: "#70707015", marginHorizontal: HEIGHT * 0.01,marginTop:HEIGHT*0.02 }} />
        </View>
    )
}

export default OrderStausComponent