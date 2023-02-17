import React from 'react'
import { View, Text, SafeAreaView, FlatList,Image } from 'react-native'
import { drawerIcon, bellIcon, footWear,skinCare } from "../assests/index"
import { CategoriesData } from '../constants/FlatlistArray'
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import HeaderComponent from '../components/HeaderComponent'

const CategoriesScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <HeaderComponent image2={bellIcon} title="CATEGORIES" image={drawerIcon} />
        <View style={{marginTop:HEIGHT*0.17,marginHorizontal:30}} >
          <FlatList
          data={CategoriesData}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
          <View>
          <Image source={item.image} />
            </View>

        }
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default CategoriesScreen