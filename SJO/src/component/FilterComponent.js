import React from 'react'
import { View, Text, SafeAreaView, Image, Platform, FlatList, Pressable, ImageBackground, TextInput } from 'react-native'

import { drawerIcon, rightBackArrow, carBack, crossIcon, jewelleyIcon } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'

const FilterComponent = (props) => {
  const {image,image1}=props
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: HEIGHT * 0.13, flexDirection: "row", justifyContent: "center" }} >
        <View style={{ borderWidth: 1, height: HEIGHT * 0.099, width: WIDTH * 0.39, alignItems: "center", justifyContent: "center", marginHorizontal: WIDTH * 0.02, backgroundColor: colors.lightYellow, borderColor: colors.borderGrey }} >
          <Image source={image} />
        </View>
      
        <View style={{ borderWidth: 1, height: HEIGHT * 0.099, width: WIDTH * 0.39, alignItems: "center", justifyContent: "center", marginHorizontal: WIDTH * 0.02, backgroundColor: colors.lightYellow, borderColor: colors.borderGrey }} >
          <Image source={image1} />
        </View>
      </View>

    </View>
  )
}

export default FilterComponent