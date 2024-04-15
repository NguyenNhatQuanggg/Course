import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from '../Screens/HomeScreens';
import MyCourseScreens from '../Screens/MyCourseScreens';
import ProfileScreens from '../Screens/ProfileScreens';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import HomeNagivation from './HomeNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.PRIMARY,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreens}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={22} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color }}>Home</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="My Course"
                component={MyCourseScreens}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" size={22} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color }}>MyCourse</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreens}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={22} color={color} />
                    ),
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color }}>Profile</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}