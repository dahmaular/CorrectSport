import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/tab/Home';
import News from '../screens/tab/News';
import HomeIcon from '../assets/svg/Home.svg';
import HomeFocused from '../assets/svg/HomeFocused.svg';
import ExploreIcon from '../assets/svg/Discovery.svg';
import ExploreFocused from '../assets/svg/DiscoveryFocused.svg';
import LiveFocused from '../assets/svg/ChartFocused.svg';
import LiveIcon from '../assets/svg/Chart.svg';
import HomeNavigator from './HomeNavigator';
import Predictions from '../screens/tab/Predictions';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#ffffff',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#222232',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <View>{focused ? <HomeFocused /> : <HomeIcon />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color, focused}) => (
            <View>{focused ? <ExploreFocused /> : <ExploreIcon />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="Predictions"
        component={Predictions}
        options={{
          tabBarLabel: 'Predictions',
          tabBarIcon: ({color, focused}) => (
            <View>{focused ? <LiveFocused /> : <LiveIcon />}</View>
          ),
        }}
      />
      <Tab.Screen
        name="Refresh"
        component={News}
        options={{
          tabBarLabel: 'Refresh',
          tabBarIcon: ({color}) => (
            <View>
              <ExploreIcon />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
