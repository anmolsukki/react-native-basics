import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../Pages/HomePage';
import TodoPage from '../Pages/TodoPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Homepage} />
        <Stack.Screen options={{ gestureEnabled: true, title: 'Todo Page' }} name="TodoPage" component={TodoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
