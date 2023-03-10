import React, { useState } from 'react'
import { View, Text, TextInput, SafeAreaView, Pressable } from 'react-native'

const InputField = () => {
    const [number, setNumber] = useState()
    console.log("inputValue======>>>>>>>>>>>", number)


    // const digitsToWords = {
    //     0: 'zero',
    //     1: 'one',
    //     2: 'two',
    //     3: 'three',
    //     4: 'four',
    //     5: 'five',
    //     6: 'six',
    //     7: 'seven',
    //     8: 'eight',
    //     9: 'nine',
    //     10: 'ten'
    // }
    // let words = ""
    // if (digitsToWords[inputValue]) {
    //     words += digitsToWords[inputValue]
    // }

    const Words = (num) => {
        const words = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety',
            "twenty",
        ]
        if (num === 0) {
            return 'zero'
          }
        if (num < 20) {
            return words[num]
        }
        if (num < 100) {
            const tens = Math.floor(num / 10)
            const ones = num % 10
            return words[tens + 18] + (ones ? "" + words[ones] : "")
        }
    }
    return (
        <SafeAreaView>
            <View style={{ alignItems: "center", marginTop: 30, justifyContent: "center" }}>
                <View style={{ marginTop: 30, borderWidth: 1, height: 26, width: 240, marginHorizontal: 20 }}>
                    <TextInput
                        style={{ paddingLeft: 13, padding: 3 }}
                        value={number}
                        onChangeText={text => setNumber(text)}
                    />
                </View>
                <Text>{Words(number)}</Text>
            </View>
        </SafeAreaView>
    )
}

//     return (
//         <SafeAreaView>
//             <View style={{ alignItems: "center", marginTop: 30 }} >
//                 <View style={{ borderWidth: 1, height: 26, width: 240, marginHorizontal: 20 }} >
//                     <TextInput
//                         value={inputValue}
//                         onChangeText={(text) => setInputvalue(text)}
//                         style={{ paddingLeft: 13, padding: 3 }} />
//                 </View>
//                 <Text style={{ fontWeight: "600" }} >{words}</Text>
//                 <Pressable onPress={() => submit()} style={{ borderWidth: 1, padding: 10, marginTop: 30 }} >
//                     <Text>submit</Text>
//                 </Pressable>
//             </View>
//         </SafeAreaView>
//     )
// }

export default InputField 