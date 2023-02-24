import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { blackBackArrow } from "../assests/index"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { notification } from '../constants/FlatlistArray'
import HeaderComponent from '../components/HeaderComponent'

const NotificationScreen = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.goBack()} title="NOTIFICATIONS" image={blackBackArrow} />
      </SafeAreaView>
      <View style={{ marginTop: HEIGHT * 0.03, height: HEIGHT * 0.907 }} >
        <FlatList
          data={notification}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={{ backgroundColor: "#fff", marginTop: 20, marginHorizontal: 20, height: HEIGHT * 0.16 }} >
              <View style={{ marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.03 }} >
                <Text style={{ fontSize: 18, fontWeight: "600" }} >{item.title}</Text>
                <Text style={{ marginTop: HEIGHT * 0.01 }} >{item.text}</Text>
                <Text style={{}} >{item.text1}</Text>
                <View style={{ borderWidth: 1, borderColor: "#70707010",marginBottom:HEIGHT*0.01 }} />
                <Text style={{ fontSize: 10, color: "#A8A398" }} >{item.date}</Text>
              </View>
            </View>
          } />
      </View>

    </View>
  )
}

export default NotificationScreen