import React, {useEffect} from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import Screens
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/drawerScreens/HomeScreen';
import ProfileScreen from './src/screens/drawerScreens/ProfileScreen';
import DrawerNavigatorRoutes from './src/screens/DrawerNavigationRoutes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  
//   useEffect(() => {
//     setTimeout(function () {
//       // SplashScreen.hide();
//     }, 3000);
//   }, []);

  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* SplashScreen which will come once for 5 Seconds */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{headerShown: false}}
      />
      {/* Auth Navigator: Include Login and Signup */}
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      {/* Navigation Drawer as a landing page */}
      <Stack.Screen
        name="DrawerNavigationRoutes"
        component={DrawerNavigatorRoutes}
        // Hiding header for Navigation Drawer
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>



    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     {/* <Drawer.Screen name="Homeede" component={TabStack} /> */}
    //     <Drawer.Screen name="home" component={TabNavigator} />
    //     <Drawer.Screen name="profile" component={ProfileScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //   initialRouteName="splash">

    //     <Stack.Screen
    //     name="splash"
    //     component={SplashScreen}
    //     options={{headerShown: false}} />

    //     <Stack.Screen
    //     name="login"
    //     component={LoginScreen}
    //     options={{headerShown: false}} />

    //   </Stack.Navigator>
    // </NavigationContainer>

   
  );
}

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false}}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({size, color}) => (
//             <Icon name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({size, color}) => (
//             <Icon name="user" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

/////////////////////

// const Auth = () => {
//   // Stack Navigator for Login and Sign up Screen
//   return (
//     <Stack.Navigator initialRouteName="LoginScreen">
//       <Stack.Screen
//         name="LoginScreen"
//         component={LoginScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="RegisterScreen"
//         component={RegisterScreen}
//         options={{
//           title: 'Register', //Set Header Title
//           headerStyle: {
//             backgroundColor: '#307ecc', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         {/* SplashScreen which will come once for 5 Seconds */}
//         <Stack.Screen
//           name="SplashScreen"
//           component={SplashScreen}
//           // Hiding header for Splash Screen
//           options={{headerShown: false}}
//         />
//         {/* Auth Navigator: Include Login and Signup */}
//         <Stack.Screen
//           name="Auth"
//           component={Auth}
//           options={{headerShown: false}}
//         />
//         {/* Navigation Drawer as a landing page */}
//         <Stack.Screen
//           name="DrawerNavigationRoutes"
//           component={DrawerNavigationRoutes}
//           // Hiding header for Navigation Drawer
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
