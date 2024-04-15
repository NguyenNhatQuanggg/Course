import React, { createContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Apps/Navigation/TabNavigation';
import LoginScreen from './Apps/Screens/LoginScreen';
import { client } from './Apps/Utils/KindConfig';
import { useFonts } from 'expo-font';
import HomeNavigation from './Apps/Navigation/HomeNavigation';

export const AuthContext = createContext();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf')
  });


  const [auth, setAuth] = useState(false);

  useEffect(() => {
    checkAuthenticate();
  }, []);

  const checkAuthenticate = async () => {
    const isAuthenticated = await client.checkAuth();
    setAuth(isAuthenticated);
  };

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ setAuth, handleLogout }}>
      <NavigationContainer>
        {auth ? <HomeNavigation /> : <LoginScreen />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}