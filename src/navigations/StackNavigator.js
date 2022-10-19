import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash/SplashScreen';
import TabNavigator from './Tab';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AppStack"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Details"
        component={MatchDetails}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
