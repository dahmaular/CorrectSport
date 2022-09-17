import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/tab/Home';
import Explore from '../screens/tab/Explore';
import HomeIcon from '../assets/svg/Home.svg';
import ExploreIcon from '../assets/svg/Discovery.svg';
import LiveIcon from '../assets/svg/Chart.svg';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#246BFD",
        tabBarInactiveTintColor: "#ffffff",
        tabBarShowLabel: true,
        tabBarStyle: {
            backgroundColor: '#222232'
        }
    }}
    >
        <Tab.Screen 
            name='Home'
            component={HomeNavigator}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <View>
                        <HomeIcon />
                    </View>
                ),
            }}
        />
        <Tab.Screen 
            name='Explore'
            component={Explore}
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({color}) => (
                    <View>
                        <ExploreIcon />
                    </View>
                ),
            }}
        />
        <Tab.Screen 
            name='Live'
            component={Explore}
            options={{
                tabBarLabel: 'Live',
                tabBarIcon: ({color}) => (
                    <View>
                        <LiveIcon />
                    </View>
                ),
            }}
        />
        <Tab.Screen 
            name='Refresh'
            component={Explore}
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({color}) => (
                    <View>
                        <ExploreIcon />
                    </View>
                ),
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator