import React, { useState } from 'react'
import { View, Text, SafeAreaView, Pressable, Image, FlatList } from 'react-native'
import { RNCamera, FaceDetector } from 'react-native-camera'
import ImagePicker from 'react-native-image-crop-picker'

const PhotoScreen = () => {
    const [remove, setRemove] = useState([])
    const [capture, setCapture] = useState()

    const removeitem = (item) => {
        setRemove(remove.filter((f) => f != item))
    }


    const gotoimagePicker = () => {
        ImagePicker.openPicker({
            multiple: true,
            mediaType: "photo"
        }).then(image => {
            console.log("image =========>>", image)
            setRemove(image?.map((item) => item.path))
        })
    }
    console.log("remove=>", remove)

    const camera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setCapture(image.path)
        });
    }
    console.log("capture==>>", capture)
    return (
        <SafeAreaView style={{ backgroundColor: "#FAE5D3", flex: 1 }} >
            <View style={{ alignItems: "center", marginTop: 20, justifyContent: "center" }} >
                <Pressable onPress={() => camera()} style={{ marginTop: 50, borderWidth: 2, padding: 7, justifyContent: "center", borderColor: "#273746" }} >
                    <Text style={{}}>OPEN CAMERA</Text>
                </Pressable>
                <View style={{ marginTop: 10, alignItems: "center" }} >
                    <Image style={{ height: 70, width: 70, borderRadius: 10, marginVertical: 10, borderWidth: 1, borderColor: "#F5B041", marginHorizontal: 20 }} source={{ uri: capture }} />
                </View>
                <View style={{ borderWidth: 2, padding: 7, alignItems: "center", justifyContent: "center", marginTop: 40, borderColor: "#273746" }} >
                    <Pressable >
                        <Text onPress={() => gotoimagePicker()} style={{ textAlign: "center", }}>CHOOSE GALLERY</Text>
                    </Pressable>
                </View>
                <View style={{ alignItems: "center", marginTop: 20, flexDirection: "row" }} >
                    {remove?.map((item) =>
                        <View>
                            <Pressable onPress={() => removeitem(item)} style={{ position: "absolute", zIndex: 1, right: 5, top: 0 }} >
                                <Text style={{ fontSize: 20, color: "red" }}>X</Text>
                            </Pressable>
                            <View style={{ marginVertical: 10, borderRadius: 10 }} >
                                <Image source={{ uri: item }} style={{ height: 70, width: 70, borderRadius: 10, borderWidth: 1, borderColor: "#F5B041", marginHorizontal: 7 }} />
                            </View>
                        </View>
                    )}
                </View>
                <View>
                </View>
                <View style={{ borderWidth: 2, padding: 7, alignItems: "center", justifyContent: "center", marginTop: 40, borderColor: "#273746" }} >
                    <Text>QR Code Scanner</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default PhotoScreen