import React from 'react'
import { Button, View } from 'react-native'

function Home({navigation}) {
  return (
    <View>
        {/* <Button title='Buttons'  onPress={() => navigation.navigate('Buttons')} ></Button>
        <Button title = 'FlatList' onPress={()=> navigation.navigate('FlatList')}></Button>
        <Button title = 'Loader' onPress={()=> navigation.navigate('Loader')}></Button>
        <Button title = 'modals' onPress={()=> navigation.navigate('modals')}></Button>
        <Button title = 'switchs' onPress={()=> navigation.navigate('switchs')}></Button>
        <Button title = 'scroll' onPress={()=> navigation.navigate('ScrollScreen')}></Button>
        <Button title = 'SectionLists' onPress={()=> navigation.navigate('SectionLists')}></Button>
        <Button title = 'Calculator' onPress={()=> navigation.navigate('Calculator')}></Button> */}
        <Button title = 'SplashScreen' onPress={()=> navigation.navigate('SplashScreen')}></Button>


    </View>
  )
}

export default Home