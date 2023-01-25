import React, { useState } from 'react'
import { View, Modal, Text, Image, Dimensions, Pressable } from "react-native"
import ButtonScreen from './ButtonScreen';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalComponent = (props) => {

  const { visible, onPress, logo, title, title2, style1, style2, titleyes, titleNo, navigation, button } = props
  const [ModalVisible, setModalVisible] = useState(false)
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
      >
        <View style={{
          flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#00000030"
        }}>
          <View style={[{ backgroundColor: "#fff", borderRadius: 20, height: HEIGHT * 0.36, width: WIDTH * 0.80, alignItems: "center" }, style1]}>
            <Image style={{ marginTop: 20 }}
              source={logo}
            />
            <Text style={[{ marginTop: 20, fontSize: 17, fontWeight: "bold" }, style2]}>{title}</Text>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <Pressable onPress={() => {
                navigation()
                onPress()
              }}>
                <Text style={{ fontSize: 18, marginHorizontal: 40, color: "#ffff" }}>{titleyes}</Text>
              </Pressable>

              <Text onPress={() => onPress()} style={[{ fontSize: 18, marginHorizontal: 40, color: "#ffff" }]}>{titleNo}</Text>
            </View>
            <Text style={{ width: WIDTH * 0.60, textAlign: "center", color: "grey" }}>{title2}</Text>
            {props.children}
            {button && <ButtonScreen  navigation={() => onPress()} style1={{ width: WIDTH * 0.62,marginTop:20 }} title="Done" />}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ModalComponent