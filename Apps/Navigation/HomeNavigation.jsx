import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../Screens/HomeScreens';
import CourseDetailScreen from '../Screens/CourseDetailScreen';
import TabNavigation from './TabNavigation';
import LoginScreen from '../Screens/LoginScreen';

const Stack=createStackNavigator()

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={TabNavigation}/>
          <Stack.Screen name='course-detail' component={CourseDetailScreen} />
      <Stack.Screen name='Logout' component={LoginScreen} />
    </Stack.Navigator>
  )
}