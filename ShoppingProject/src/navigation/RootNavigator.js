import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const TabStackNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Screen name="Homeede" component={TabStack} /> */}
        <Drawer.Screen name="HomeScreen" component={TabStackNavigator} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

