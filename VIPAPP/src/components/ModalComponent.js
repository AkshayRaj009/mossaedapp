import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, Image, Modal, Pressable } from 'react-native';
import { whiteTick } from '../assests';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import ButtonComponent from './ButtonComponent';

const ModalComponent = (props) => {
  const { visible, onPress, title, text, style2, path, buttonTitile, titleStyle, yes, No, buttonStatus, imagestatus, textstyle, yesStyle, noStyle } = props
  const [modalVisible, setModalVisible] = useState(false);
  const navigations = useNavigation()

  return (
    <View>
      <Modal
        blurRadius={5}
        animationType="slide"
        transparent
        visible={visible}
      >
        <Pressable onPress={() => onPress()} style={[{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000c0", shadowOffset: "23" }]}>
          <View style={[{ backgroundColor: "#181D23", borderRadius: 17, height: HEIGHT * 0.39, width: WIDTH * 0.80, alignItems: "center" }, style2]}>
            <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
              {imagestatus && <View style={{ height: WIDTH * 0.2, width: WIDTH * 0.2, borderRadius: WIDTH * 0.2 / 2, backgroundColor: "#0FC1A1", justifyContent: "center", alignItems: "center" }}>
                <Image source={whiteTick} />
              </View>}
              <Text style={[{ marginTop: 23, fontSize: 21, color: "#fff" }, titleStyle]}>{title}</Text>
              <Text style={[{ marginTop: 17, marginHorizontal: 26, textAlign: "center", color: "#fff", fontSize: 16 }, textstyle]}>{text}</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <Pressable style={[{ backgroundColor: "black", marginHorizontal: 10, padding: 4, width: WIDTH * 0.30, borderRadius: 10 }, yesStyle]} onPress={() => {
                navigations.navigate("LoginScreen")
                onPress()
              }}>
                <Text style={{ fontSize: 18, color: "#ffff", textAlign: "center" }}>{yes}</Text>
              </Pressable>
              <Pressable onPress={() => onPress()} style={[{ backgroundColor: "black", marginHorizontal: 10, alignItems: "center", justifyContent: "center", borderRadius: 10 }, noStyle]} >
                <Text style={{ fontSize: 18, marginHorizontal: 45, color: "#ffff", textAlign: "center" }}>{No}</Text>
              </Pressable>
            </View>
            <View style={{ marginTop: -15 }}>
              {buttonStatus &&
                <ButtonComponent textStyle={{ fontSize: 17 }} buttonStyle={{ height: HEIGHT * 0.07, width: WIDTH * 0.6, }}
                  navigation={() => {
                    onPress()
                    navigations.navigate(path)
                  }}
                  title={buttonTitile} />}
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}

export default ModalComponent