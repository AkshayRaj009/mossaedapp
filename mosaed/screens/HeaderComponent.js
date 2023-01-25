import React from 'react'
import { View, Pressable, Image, Text, SafeAreaView } from "react-native"

const HeaderComponent = (props) => {
  const { leftlogo, title, text, rightlogo, description, navigation, style, style1, style2, rightnavigation, mosaeedcontent, middlelogo, mosaeedstyle, style3 } = props
  return (
    <>
      
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 70 }}>
          <Pressable onPress={navigation}>
            <Image style={{ marginHorizontal: 20 }}
              source={leftlogo}
            />
          </Pressable>
          <Text style={[{ color: "#fff", fontSize: 22,marginTop:-3 }, style]}>{title}</Text>
          <Pressable onPress={rightnavigation}>
            <Image style={{ marginHorizontal: 15 }}
              source={rightlogo}
            />
          </Pressable>
        </View>
        <View style={[{}, mosaeedstyle]}>
          <Image
            source={middlelogo}
          />
          <Image style={[{}, style3]}
            source={mosaeedcontent}
          />
        </View>
        {description ? <Text style={[{ textAlign: 'center', color: "fff" }, style1]}>{description}</Text> : ""}
        <Text style={[{ textAlign: "center", color: "#fff",fontSize:16 }, style2]}>{text}</Text>
      </View>
    </>
  )
}

export default HeaderComponent;