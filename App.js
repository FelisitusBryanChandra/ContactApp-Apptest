import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './src/redux';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)