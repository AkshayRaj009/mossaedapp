import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const NumberPattern = () => {

    // const n = 5
    // let rows = []
    // for (let i = 1; i <= n; i++) {
    //     let row = []
    //     for (let j = 1; j <= i; j++) {
    //         row.push(j)
    //     }
    //     rows.push(row)
    // }
    // console.log(rows)

    // let p = 5;
    // let string = "\n"
    // for (let i = 1; i <= p; i++) {
    //     for (let j = 1; j <= i; j++) {
    //         string += i
    //     }
    //     string += "\n"
    // }
    // console.log(string)

    // let s = 4
    // let pattern = "\n"
    // let count = 1
    // for (let i = 1; i <= s; i++) {
    //     for (let j = 1; j <= i; j++) {
    //         pattern += count
    //         count++
    //     }
    //     pattern += "\n"
    // }
    // console.log(pattern)

    // let e = 5
    // let reverse = "\n"
    // for (let i = 1; i <= e; i++) {
    //     for (let j = 1; j <= e - i + 1; j++) {
    //         reverse += j
    //     }
    //     reverse += "\n"
    // }
    // console.log(reverse)

    // let d = 5
    // let pyramid = "\n"
    // for (let i = 1; i <= d; i++) {

    //     for (let j = 1; j <= d - i; j++) {
    //         pyramid += " "
    //     }

    //     for (let k = 1; k <= 2 * i - 1; k++) {
    //         pyramid += k
    //     }
    //     pyramid += "\n"
    // }
    // console.log(pyramid)


    // let c = 3
    // let count1 = 1
    // let numb = "\n"
    // for (let i = 1; i <= c; i++) {
    //     for (let j = 1; j <= c - i; j++) {
    //         numb += " "
    //     }
    //     for (let k = 1; k <= 2 * i - 1; k++) {
    //         numb += count1;
    //         count1++
    //     }
    //     numb += "\n"
    // }
    // console.log(numb)

    // let x = 5;
    // let triangle = "\n"

    // for (let i = 1; i <= x; i++) {
    //     for (let j = 1; j <= x - i + 1; j++) {
    //         triangle += x - j + 1;
    //     }
    //     triangle += "\n"
    // }
    // console.log(triangle);

    let z = 4
    let symbol = "\n"
    for (let i = 1; i <= z; i++) {
        for (let j = 1; j <= i; j++) {
            symbol += "$"
        }
        symbol += "\n"
    }
    for (let i = 1; i <= z; i++) {
        for (let j = 1; j <= z - i + 1; j++) {
            symbol += "%"
        }
        symbol += "\n"
    }

    let n = 5;
    let alpha = "\n"
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i + 1; j++) {
            alpha += "A"
        }
        alpha += "\n"
    }
    alpha += "\n"
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            alpha += "B"
        }
        alpha += "\n"
    }

    // console.log(alpha);

    return (
        <View style={{ backgroundColor: "wheat", flex: 1 }} >
            <View style={{ flex: 1, marginHorizontal: 20, marginTop: 60 }}>
                <ScrollView>
                    {/* <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 1</Text>
                    {rows.map((r) => (
                        <Text style={{ marginHorizontal: 10, marginTop: 10 }} >{r.join(" ")}</Text>
                    ))}
                    <View style={{ marginTop: 25 }} >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 2</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{string}</Text>
                    </View>
                    <View style={{ marginTop: 0 }} >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 3</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{pattern}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 4</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{reverse}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 5</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{pyramid}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 6</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{numb}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 7</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{triangle}</Text>
                    </View> */}
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 8</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{symbol}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: "500" }} >Pattern 9</Text>
                        <Text style={{ marginHorizontal: 10, fontSize: 14, marginTop: -10 }} >{alpha}</Text>
                    </View>
                </ScrollView>

            </View>

        </View>
    )
}

export default NumberPattern