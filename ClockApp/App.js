import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import ClockScreen from './src/ClockScreen';
import AlarmScreen from './src/AlarmScreen';
import TimerScreen from './src/TimerScreen';
import StopwatchScreen from './src/StopwatchScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#686a6e',
          },
          tabBarIndicatorStyle: {backgroundColor: '#f1aa24'},
        }}>
        <Tab.Screen
          name="clock"
          component={ClockScreen}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
              padding: 0,
              margin: 0,
            },
            tabBarPressColor: '#000',
            // tabBarIcon: () => <Icon name="home" color={'red'} size={15} />,
          }}
        />
        <Tab.Screen
          name="alarm"
          component={AlarmScreen}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
              padding: 0,
              margin: 0,
            },
            tabBarPressColor: '#000',
            // tabBarIcon: () => <Icon name="home" color={'red'} size={20} />,
          }}
        />
        <Tab.Screen
          name="timer"
          component={TimerScreen}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
              padding: 0,
              margin: 0,
            },
            tabBarPressColor: '#000',
            // tabBarIcon: () => <Icon name="home" color={'red'} size={20} />,
          }}
        />
        <Tab.Screen
          name="stopwatch"
          component={StopwatchScreen}
          options={{
            tabBarLabelStyle: {
              fontSize: 10,
              padding: 0,
              margin: 0,
            },
            tabBarPressColor: '#000',
            // tabBarIcon: () => <Icon name="home" color={'red'} size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
