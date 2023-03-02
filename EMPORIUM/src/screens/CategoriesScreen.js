import React, { useCallback, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ImageBackground,RefreshControl,ScrollView } from 'react-native'
import { drawerIcon, bellIcon } from "../assests/index"
import { CategoriesData } from '../constants/FlatlistArray'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import HeaderComponent from '../components/HeaderComponent'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const CategoriesScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
        setRefreshing(false)
    }, 3500)
},)
  return (
    <View>
      <SafeAreaView>
        <HeaderComponent drawernavigation={() => navigation.goBack()} image2={bellIcon} title="CATEGORIES" image={drawerIcon} />
        <ScrollView refreshControl={<RefreshControl style={{}} size="default" refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={{ marginTop: HEIGHT * 0.17, marginHorizontal: 30 }} >
          <FlatList
            data={CategoriesData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View style={{ marginTop: HEIGHT * 0.01 }} >
                <Pressable onPress={() => navigation.navigate(item.path)}>
                  <ImageBackground style={{ height: HEIGHT * 0.12 }} source={item.image} >
                    <Text style={{ marginTop: HEIGHT * 0.05, color: "#B89962", fontSize: 27, marginLeft: item.marginLeft }} >{item.text}</Text>
                  </ImageBackground>
                </Pressable>
              </View>
            }
          />
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default CategoriesScreen