import React from 'react'
import { View, Text, SafeAreaView, FlatList, TextInput } from 'react-native'

import { crossIcon, rightBackArrow } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carFilterData } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import ButtonComponent from '../component/ButtonComponent'

const FilterScreen = (props) => {
  const { navigation } = props
  console.log(HEIGHT*0.075);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
      <MainContainer navigation={()=>navigation.goBack()}  titleStyle={{ color: colors.grey, fontSize: 20 }} title="Filter" image={crossIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} >
        <View >
          <FlatList
            style={{ marginTop: HEIGHT * 0.003 }}
            data={carFilterData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View style={{}} >
                <Text style={{ marginHorizontal: WIDTH * 0.13, marginTop: HEIGHT * 0.03, color: colors.grey }} >{item?.title}</Text>
                <View style={{ height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.11, borderWidth: 1, marginTop: HEIGHT * 0.02, justifyContent: "center", borderColor: colors.grey }} >
                  <TextInput placeholder={item?.text} style={{ paddingLeft: WIDTH * 0.04 }} />
                </View>
              </View>
            } />
        </View>
        <ButtonComponent navigation={() => navigation.navigate("CarsScreen")} style={{ height: HEIGHT * 0.10,marginTop:HEIGHT*0.075 }} titleStyle={{ fontSize: 13, color: "black" }} title="View cars" />
      </MainContainer>
    </View>

  )
}

export default FilterScreen