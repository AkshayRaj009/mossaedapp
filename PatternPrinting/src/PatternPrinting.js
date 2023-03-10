import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const PatternPrinting = () => {

  // const rows = 5
  // let pattern = '\n'
  // for (let i = 1; i <= rows; i++) {
  //     for (let j = 1; j <= i; j++) {
  //         pattern += '* '
  //     }
  //     pattern += '\n'
  // }
  // console.log(pattern)

  // const d = 5
  // let string = "";
  // for (let i = 1; i <= d; i++) {
  //     for (let k = 0; k <= d - i; k++) {
  //         string += "*"
  //     }
  //     string += "\n"
  // }
  // console.log(string)

  // n = 5;
  // let right = "\n"
  // for (let i = 1; i <= n; i++) {
  //     for (let j = 0; j < n - i; j++) {
  //         right += " ";
  //     }
  //     for (let k = 0; k < i; k++) {
  //         right += "*";
  //     }
  //     right += "\n";
  // }
  // console.log(right);

  // let n = 5
  // let square = ""

  // for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //         square += "*"
  //     }
  //     square += "\n"
  // }

  // console.log(square)


  // let h = 6
  // let holo = ""

  // for (let i = 1; i <= h; i++) {
  //     for (let j = 0; j < i; j++) {
  //         if (i === h) {
  //             holo += "*"
  //         }
  //         else {
  //             if (j == 0 || j == i - 1) {
  //                 holo += "*"
  //             }
  //             else {
  //                 holo += " "
  //             }
  //         }
  //     }
  //     holo += "\n";
  // }
  // console.log(holo);


  // let p = 5
  // let pyramid = ""

  // for (let i = 1; i <= p; i++) {
  //     for (let j = 1; j <= p - i; j++) {
  //         pyramid += " "
  //     }
  //     for (let k = 0; k < 2 * i - 1; k++) {
  //         pyramid += "*"
  //     }
  //     pyramid += "\n"
  // }
  // console.log(pyramid);


  // let r = 5;
  // let reversepyramid = "\n"

  // for (let i = 0; i < r; i++) {
  //     for (let j = 0; j < i; j++) {
  //         reversepyramid += " "
  //     }
  //     for (let k = 0; k < 2 * (r - i) - 1; k++) {
  //         reversepyramid += "*"
  //     }
  //     reversepyramid += "\n"
  // }
  // console.log(reversepyramid);


  // let s = 5;
  // let Hpiramid = "\n";

  // for (let i = 1; i <= s; i++) {
  //     for (let j = 1; j <= s - i; j++) {
  //         Hpiramid += " ";
  //     }

  //     for (let k = 0; k < 2 * i - 1; k++) {
  //         if (i === 1 || i === s) {
  //             Hpiramid += "*"
  //         }
  //         else {
  //             if (k === 0 || k === 2 * i - 2) {
  //                 Hpiramid += "*"
  //             }
  //             else {
  //                 Hpiramid += "  "
  //             }
  //         }
  //     }
  //     Hpiramid += "\n";
  // }
  // console.log(Hpiramid);

  // let m = 5;
  // let diamond = "\n"

  // for (let i = 0; i <= m; i++) {
  //     for (let j = m; j > i; j--) {
  //         diamond += " "
  //     }
  //     for (let k = 0; k < i * 2 - 1; k++) {
  //         diamond += "*"
  //     }
  //     diamond += "\n"
  // }
  // for (let i = 1; i <= m - 1; i++) {

  //     for (let j = 0; j < i; j++) {
  //         diamond += " "
  //     }

  //     for (let k = (m - i) * 2 - 1; k > 0; k--) {
  //         diamond += "*"
  //     }
  //     diamond += "\n"
  // }
  // console.log(diamond);


  // let y = 5;
  // let holodiamond = "";

  // for (let i = 1; i <= y; i++) {
  //     for (let j = y; j > i; j--) {
  //         holodiamond += " ";
  //     }

  //     for (let k = 0; k < i * 2 - 1; k++) {
  //         if (k === 0 || k === 2 * i - 2) {
  //             holodiamond += "*";
  //         }
  //         else {
  //             holodiamond += " ";
  //         }
  //     }
  //     holodiamond += "\n";
  // }
  // for (let i = 1; i <= y - 1; i++) {

  //     for (let j = 0; j < i; j++) {
  //         holodiamond += " ";
  //     }

  //     for (let k = (y - i) * 2 - 1; k >= 1; k--) {
  //         if (k === 1 || k === (y - i) * 2 - 1) {
  //             holodiamond += "*"
  //         }
  //         else {
  //             holodiamond += " "
  //         }
  //     }
  //     holodiamond += "\n"
  // }
  // console.log(holodiamond)


  // let u = 5
  // let hsquare = ""

  // for (let i = 0; i < u; i++) {
  //     for (let j = 0; j < u; j++) {
  //         if (i === 0 || i === u - 1) {
  //             hsquare += "*"
  //         }
  //         else {
  //             if (j === 0 || j === u - 1) {
  //                 hsquare += "*"
  //             }
  //             else {
  //                 hsquare += " "
  //             }
  //         }
  //     }
  //     hsquare += "\n"
  // }

  // console.log(hsquare);


  /*   let g = 5
    let horglass = ""
  
    for (let i = 0; i < g; i--) {
      for (let j = 0; j < g; j--) {
        horglass += "*"
      }
    } */

  return (
    <View style={{ backgroundColor: "wheat", flex: 1 }} >
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 50, }}>
        <ScrollView>
          {/* <Text style={{ fontSize: 20 }} >1. Left Triangle Pattern</Text>
          <Text style={{ fontSize: 25, marginTop: -10, marginHorizontal: 25 }}>{pattern}</Text> */}
          {/* <View>
            <Text style={{ fontSize: 20 }} >2. Right Triangle</Text>
            <Text style={{ fontSize: 25, marginHorizontal: 25, marginTop: -10 }}>{right}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >3. Downward Triangle</Text>
            <Text style={{ fontSize: 25, marginHorizontal: 25, marginTop: 10 }}>{string}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >4.  Square</Text>
            <Text style={{ fontSize: 25, marginactTop: 10, marginHorizontal: 25 }}>{square}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >5.  Hollow square pattern</Text>
            <Text style={{ fontSize: 25, marginTop: 10, marginHorizontal: 25 }}>{hsquare}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >6.  Hollow triangle pattern</Text>
            <Text style={{ fontSize: 25, marginTop: 10, marginHorizontal: 25 }}>{holo}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >7.  Pyramid star pattern</Text>
            <Text style={{ fontSize: 25, marginTop: 10, marginHorizontal: 25 }}>{pyramid}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >8.  Reverse Pyramid Star Pattern</Text>
            <Text style={{ fontSize: 25, marginTop: -10, marginHorizontal: 25 }}>{reversepyramid}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >9.  Hollow pyramid star pattern</Text>
            <Text style={{ fontSize: 25, marginTop: -10, marginHorizontal: 25 }}>{Hpiramid}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >10.  Diamond pattern</Text>
            <Text style={{ fontSize: 25, marginTop: -20, marginHorizontal: 25 }}>{diamond}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} >11.  Hollow diamond pattern</Text>
            <Text style={{ fontSize: 25, marginTop: 10, marginHorizontal: 25 }}>{holodiamond}</Text>
          </View>  */}
          {/* <View>
            <Text style={{ fontSize: 20 }} >12. Hourglass star pattern</Text>
            <Text style={{ fontSize: 25, marginTop: 10, marginHorizontal: 25 }}>{horglass}</Text>
          </View> */}
        </ScrollView>
      </View>
    </View>

  )

}
export default PatternPrinting