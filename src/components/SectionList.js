import React from 'react';
import {Text, SafeAreaView, ScrollView, SectionList,View} from 'react-native';


const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

const SectionLists = () => {
  return (
    <SafeAreaView>
      <ScrollView>
            <View>
            

            </View>
      </ScrollView>
      </SafeAreaView>
  )
}

export default SectionLists;
