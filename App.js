import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/pages/splash';
import Login from './src/pages/login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{header: () => {}}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{header: () => {}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
