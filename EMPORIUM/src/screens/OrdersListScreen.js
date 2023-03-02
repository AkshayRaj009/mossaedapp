import React, { useCallback, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Pressable, ScrollView, RefreshControl } from 'react-native'
import { bellIcon, blackBackArrow } from "../assests/index"
import { HEIGHT } from '../constants/Dimensions'
import { orderList } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'

const OrdersListScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 3500)
  },)
  return (
    <View style={{ backgroundColor: "#FFFFFF240" }} >
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="MY ORDERS" image={blackBackArrow} />
        <ScrollView style={{ marginTop: HEIGHT * 0.03 }} refreshControl={<RefreshControl style={{}} size="default" refreshing={refreshing} onRefresh={onRefresh} />} >
          <FlatList
            style={{ height: Platform.OS === 'ios' ? 1460 : 1535 }}
            data={orderList}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Pressable onPress={() => navigation.navigate(item.path)} style={{ backgroundColor: "#fff", marginHorizontal: 20, marginTop: 13, height: Platform.OS === 'ios' ? 183 : 194 }} >
                <View style={{ flexDirection: "row", marginHorizontal: 10 }} >
                  <Image style={{ marginTop: 13 }} source={item.image} />
                  <View style={{ flexDirection: "row", marginTop: 20 }} >
                    <View style={{ marginHorizontal: 15 }} >
                      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
                        <Text style={{ color: "#A8A398", fontSize: 11 }} >{item.text}</Text>
                        <Text style={{ color: "#A8A398", fontSize: 11 }}>{item.date}</Text>
                      </View>
                      <Text style={{ color: "black", fontSize: 18, fontWeight: "600" }} >{item.title}</Text>
                      <View style={{ flexDirection: "row", marginTop: 20 }} >
                        <Text style={{ fontSize: 11, color: "#A8A398" }} >{item.total1}</Text>
                        <Text style={{ paddingLeft: HEIGHT * 0.14, fontSize: 11, color: "#A8A398" }} >{item.item}</Text>
                      </View>
                      <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Text style={{ fontWeight: "500", fontSize: 18 }} >{item.total}</Text>
                        <Text style={{ paddingLeft: 5, fontSize: 17, color: "#313131" }} >{item.qar}</Text>
                        <Text style={{ paddingLeft: HEIGHT * 0.09, color: "#313131" }} >{item.numb}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#70707015", marginHorizontal: HEIGHT * 0.03, marginTop: HEIGHT * 0.01 }} />
                <View style={{ marginHorizontal: 20, marginTop: 20 }} >
                  <View style={{ flexDirection: "row", justifyContent: "space-between", }} >
                    <Text style={{ fontSize: 11, color: "#A8A398" }} >{item.status}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", paddingRight: HEIGHT * 0.03 }} >
                      <Text style={{ color: "#10BC82", }} >{item.track}</Text>
                      <Image style={{ marginLeft: 10 }} source={item.arrow} />
                    </View>
                  </View>
                  <Text style={{ color: item.color, fontSize: 15 }} >{item.pending}</Text>
                </View>
              </Pressable>
            }
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default OrdersListScreen