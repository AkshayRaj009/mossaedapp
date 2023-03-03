import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList, Pressable } from 'react-native'

import { colors } from "../constants/colors"
import { HEIGHT, WIDTH } from '../constants/Dimensions'
import { Calendar } from 'react-native-calendars'
import { calenderData } from '../constants/FlatListArray';
import MainContainer from '../component/MainContainer'

const CalenderScreen = ({navigation}) => {


  return (
    <View style={{ flex: 1 }} >
      <SafeAreaView style={{ backgroundColor: colors.Yellow, flex: 0 }} />
      <MainContainer navigation={() => navigation.goBack()} titleStyle={{ color: colors.darkWhite, fontSize: 14 }} title="Calender" color={{ backgroundColor: colors.Yellow, marginTop: 0 }} style2={{ marginTop: HEIGHT * 0.006 }} backStyle={{ marginTop: HEIGHT * 0.01 }} >
        <View>
          <Calendar
            hideArrows={true}
            style={{
              borderBottomLeftRadius: 23,
              borderBottomRightRadius: 23,
              textDayFontSize: 30,
              height: 390
            }}
            theme={{
              calendarBackground: "#C49662",
              textSectionTitleColor: '#FFFFF',
              textSectionTitleDisabledColor: '#FFFFFFF',
              selectedDayBackgroundColor: 'yellow',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#ffffff',
              dayTextColor: '#FFFFFF',
              textDisabledColor: '#FFFFFF',
              dotColor: '#ffff',
              selectedDotColor: 'red',
              monthTextColor: '#FFFFFF',
              indicatorColor: 'blue',
              textDayFontWeight: '600',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '600',
              textDayFontSize: 15,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
            markedDates={{
              '2012-05-16': { selected: true, marked: true, selectedColor: 'red', },
              '2012-05-17': { marked: true },
              '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
              '2012-05-19': { disabled: true, disableTouchEvent: true }
            }}
          />
        </View>
        <View>
          <FlatList
            style={{ marginTop: HEIGHT * 0.06 }}
            data={calenderData}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Pressable onPress={() => navigation.navigate(item.path)}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.09, marginBottom: WIDTH * 0.12, alignItems: "center" }} >
                  <Text>{item?.time}</Text>
                  <View>
                    <Text style={{ fontSize: 18, color: colors.Yellow }}>{item?.title}</Text>
                    <Text style={{ fontSize: 10, color: colors.Yellow }} >{item?.text}</Text>
                  </View>
                  <Image source={item?.location} />
                </View>
              </Pressable>

            }
          />
        </View>
      </MainContainer>
    </View>
  )
}

export default CalenderScreen