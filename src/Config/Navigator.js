import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../Pages/HomePage';
import TodoPage from '../Pages/TodoPage';
import BottomTabNavigator from '../Pages/BottomTabNavigator';
import CustomButton from '../Pages/CustomButton';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Homepage} />
        <Stack.Screen options={{ gestureEnabled: true, title: 'Todo List' }} name="TodoPage" component={TodoPage} />
        <Stack.Screen options={{ gestureEnabled: true, headerShown: false }} name="BottomTabNavigator" component={BottomTabNavigator} />
        <Stack.Screen options={{ gestureEnabled: true, title: 'Custom Button' }} name="CustomButton" component={CustomButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
