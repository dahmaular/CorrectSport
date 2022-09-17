import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/tab/Home';
import MatchDetails from '../screens/others/MatchDetails';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='HomeScreen'
            component={Home}
            options={{headerShown: false}}
        />
        <Stack.Screen 
            name='Details'
            component={MatchDetails}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  )
}

export default HomeNavigator