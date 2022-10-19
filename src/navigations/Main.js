import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './Tab'
import AppNavigator from './StackNavigator'

const Main = () => {
  return (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
  )
}

export default Main