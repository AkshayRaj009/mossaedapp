import React from 'react'
import { View, Text, Pressable, FlatList, SafeAreaView, Image } from 'react-native';
import { HEIGHT, WIDTH } from "../constants/Dimensions"
import { headerRightLogo, LeftArrow, filterImage, Calender } from '../assests';
import HeaderComponent from '../components/HeaderComponent';
import { BeachData } from "../constants/FlatlistArray"
import Animated, { FadeInLeft } from 'react-native-reanimated';
import BeachDetailsComponent from "../components/BechDetailsComponent"
import TimeSlotComponent from '../components/TimeSlotComponent';

const BeachScreen = ({ navigation }) => {
	return (
		<View  style={{ flex: 1, backgroundColor: "black" }}>
			<View style={{ backgroundColor: "#181D23", height: HEIGHT * 0.18, borderBottomLeftRadius: 13, borderBottomRightRadius: 13 }}>
				<SafeAreaView>
					<HeaderComponent leftLogo={LeftArrow} rightLogo={headerRightLogo} filter={filterImage} Title="BEACH" drawerNavigation={() => navigation.goBack()} />
					<View style={{ marginHorizontal: 12, height: HEIGHT }}>
						<TimeSlotComponent style2={{borderWidth:0}} timeStyle={{paddingLeft:16}} time="09:00 am || 10.00 am | 11:00 am" />
						<View style={{ flex:1,marginTop:HEIGHT*0.05 }}>
							<FlatList
							// contentContainerStyle={{flex:1}}
								data={BeachData}
								keyExtractor={item => item.id}
								renderItem={({ item }) =>
								<Animated.View entering={FadeInLeft.delay(item. id * 380)} >
									<BeachDetailsComponent {...item} />
								</Animated.View>
								}
							/>
						</View>



					</View>
				</SafeAreaView>
			</View>
		</View>
	)
}

export default BeachScreen

