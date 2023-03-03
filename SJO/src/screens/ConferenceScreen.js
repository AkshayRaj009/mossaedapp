import React from 'react'
import { View, Text, SafeAreaView, FlatList, TextInput } from 'react-native'

import { crossIcon, rightBackArrow } from "../assests/index"
import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { carFilterData } from "../constants/FlatListArray"
import MainContainer from '../component/MainContainer'
import ButtonComponent from '../component/ButtonComponent'

const ConferenceScreen = ({navigation}) => {
    return (
        <View>
            <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
            <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.grey, fontSize: 20 }} title="Filter" image={crossIcon} color={{ backgroundColor: colors.Yellow, marginTop: 0 }} leftLogo={rightBackArrow} style2={{ marginTop: HEIGHT * 0.006 }} >
            </MainContainer>
        </View>
    )
}

export default ConferenceScreen