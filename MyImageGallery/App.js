import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import DisplayImageScreen from './src/DisplayImageScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Photos',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500',
            },
          }}
        />

        <Stack.Screen
          name="DisplayImageScreen"
          component={DisplayImageScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;