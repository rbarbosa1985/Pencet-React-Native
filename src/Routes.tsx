import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'

const Stack = createStackNavigator();

const Routes = () => {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    
  );
};

export default Routes;