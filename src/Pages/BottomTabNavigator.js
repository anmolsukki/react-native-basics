import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './BottomTabScreen/HomeScreen';
import ChatScreen from './BottomTabScreen/ChatScreen';
import FindScreen from './BottomTabScreen/FindScreen';
import PostScreen from './BottomTabScreen/PostScreen';
import SettingScreen from './BottomTabScreen/SettingScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ ...styles.customTabBarCenter, ...styles.shadow }}>
    <View style={styles.customTabBarView}>{children}</View>
  </TouchableOpacity>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { position: 'absolute', bottom: 25, left: 20, right: 20, elevation: 0, backgroundColor: '#ffffff', borderRadius: 15, height: 90 },
        ...styles.styles,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../Assets/Icons/home.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Find"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../Assets/Icons/search.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
              <Text>Find</Text>
            </View>
          ),
        }}
        component={FindScreen}
      />
      <Tab.Screen
        name="Post"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../Assets/Icons/plus.png')}
              resizeMode="contain"
              style={{ width: 30, height: 30, tintColor: focused ? '#748c94' : '#ffffff' }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        component={PostScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../Assets/Icons/settings.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
              <Text>Settings</Text>
            </View>
          ),
        }}
        component={SettingScreen}
      />
      <Tab.Screen
        name="Chat"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../Assets/Icons/chat.png')}
                resizeMode="contain"
                style={{ width: 25, height: 25, tintColor: focused ? '#e32f45' : '#748c94' }}
              />
              <Text>Chat</Text>
            </View>
          ),
        }}
        component={ChatScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  customTabBarCenter: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customTabBarView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e32f45',
  },
});

export default BottomTabNavigator;
