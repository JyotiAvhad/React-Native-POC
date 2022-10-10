import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
// import SplashScreen from 'react-native-splash-screen';

// import screens
// import SplashScreen from './src/SplashScreen';
import DeliveryScreen from './src/DeliveryScreen';
import DiningScreen from './src/DiningScreen';
import OffersScreen from './src/OffersScreen';
import MoneyScreen from './src/MoneyScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

const TabStackNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dining"
        component={DiningScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Money"
        component={MoneyScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {

  // SplashScreen.hide()

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* <Drawer.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Drawer.Screen name="Log In" component={TabStackNavigator} />
        <Drawer.Screen name="Shop by Offers" component={TabStackNavigator} />
        <Drawer.Screen name="Orders" component={TabStackNavigator} />
        <Drawer.Screen name="Contact Us" component={TabStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
