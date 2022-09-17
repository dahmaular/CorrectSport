import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './Tab'

const Main = () => {
  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  )
}

export default Main