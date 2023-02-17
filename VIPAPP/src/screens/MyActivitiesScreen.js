import React, { useCallback, useRef, useState } from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { LeftArrow, headerRightLogo } from '../assests';
import { activityRent, activities, activityService, activityBuild } from "../constants/FlatlistArray"
import ActivitiesComponenet from '../components/ActivitiesComponenet';
import HeaderComponent from '../components/HeaderComponent';
import DropdownComponent from '../components/DropDownComponenet';

const MyActivitiesScreen = ({ navigation }) => {
  const [scroll, setScroll] = useState(0)
  const [isFocus, setIsFocus] = useState(false)
  const ref = useRef()
  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    console.log("Visible items are", viewableItems);
    // console.log("Changed in this iteration", changed);
    setScroll(viewableItems[0]?.index)
  }, []);
  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  }
  const ScrollView = (index) => {
    ref.current.scrollToIndex({ animated: true, index: index })
  }
  const backToScrollView = (index) => {
    ref.current.scrollToIndex({ animated: true, index: index })
  }
  const slideshow = (type) => {
    switch (type) {
      case "RENT":
        return (
          <View style={{ width: WIDTH }}>
            <FlatList
              data={activityRent}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <View style={{ marginBottom: HEIGHT * 0.03, width: WIDTH }} >
                  <ActivitiesComponenet textColor={item.textColor} color={item.color} numb={item.numb} ConformText={item.ConformText} text={item.text} title={item.title} image={item.image} />
                </View>
              } />
          </View>
        )
      case "SERVICE":
        return (
          <View style={{ width: WIDTH }}>
            <FlatList
              data={activityService}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <View style={{ marginBottom: HEIGHT * 0.03 }}>
                  <ActivitiesComponenet textColor={item.textColor} color={item.color} numb={item.numb} ConformText={item.ConformText} text={item.text} title={item.title} image={item.image} />
                </View>
              } />
          </View>
        )
      case "BUILD":
        return (
          <View style={{ width: WIDTH }} >
            <FlatList
              data={activityBuild}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <>
                  <View style={{ marginBottom: HEIGHT * 0.03, backgroundColor: "#181D23", height: HEIGHT * 0.15, justifyContent: "center" }}>
                    <View style={{ marginHorizontal: 27, flexDirection: "row", justifyContent: "space-between" }} >
                      <View>
                        <Text style={{ color: "#fff", fontSize: 19 }} >{item.title}</Text>
                        <Text style={{ color: item.color }} >{item.text}</Text>
                      </View>
                      <View>
                        <DropdownComponent />
                      </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginHorizontal: 20 }} >
                      <View style={{ width: WIDTH * 0.18, height: HEIGHT * 0.03, alignItems: "center", justifyContent: "center", borderRadius: 4, }} >
                        <Text style={{ color: "#636B74", fontSize: 12 }} >{item.ConformText}</Text>
                      </View>
                      <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 40 }} >
                        <Text style={{ color: "#0FC1A1", fontSize: 22, fontWeight: "bold", paddingHorizontal: 10 }} >{item.numb}</Text>
                        <Text style={{ color: "#0FC1A1", fontSize: 10, paddingTop: 8 }} >{item.qar}</Text>
                      </View>
                    </View>
                  </View>
                </>
              } />
          </View>
        )
    }
  }

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ backgroundColor: "#0E1114", height: HEIGHT * 0.20, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }} >
        <HeaderComponent drawerNavigation={() => navigation.goBack()} rightLogo={headerRightLogo} leftLogo={LeftArrow} Title="MY ACTIVITIES" />
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25, marginTop: 38 }} >
          <Pressable onPress={() => {
            ScrollView(0)
            backToScrollView(0)
          }}>
            <Text style={{ color: scroll === 0 ? "#0FC1A1" : "#DBDBDB", fontSize: 20 }} >Rent</Text>
            {scroll === 0 ? <View style={{ borderWidth: 1, borderColor: "#0FC1A1" }} ></View> : ""}
          </Pressable>
          <Pressable onPress={() => {
            ScrollView(1)
            backToScrollView(1)
          }} >
            <Text style={{ color: scroll === 1 ? "#0FC1A1" : "#DBDBDB", fontSize: 20 }} >Services</Text>
            {scroll === 1 ? <View style={{ borderWidth: 1, borderColor: "#0FC1A1" }} ></View> : ""}

          </Pressable>
          <Pressable onPress={() => {
            ScrollView(2)
            backToScrollView(2)
          }} >
            <Text style={{ color: scroll === 2 ? "#0FC1A1" : "#DBDBDB", fontSize: 20 }} >Build</Text>
            {scroll === 2 ? <View style={{ borderWidth: 1, borderColor: "#0FC1A1" }} ></View> : ""}
          </Pressable>
        </View>
        <View style={{ marginTop: 30, marginHorizontal: 20, height: HEIGHT }} >
          <FlatList
            horizontal
            pagingEnabled={true}
            scrollEnabled={false}
            ref={ref}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={_viewabilityConfig}
            data={activities}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <>
                {slideshow(item.case)}
              </>
            } />
        </View>
      </View>
    </View>
  )
}
export default MyActivitiesScreen







