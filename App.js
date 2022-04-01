import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import {store} from './src/redux';
import Home from './src/screens/Home';
import ContactDetails from './src/screens/ContactDetails';
import AddContact from './src/screens/AddContact';

const Stack = createNativeStackNavigator();

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)