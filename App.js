import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <NavigationContainer>
      <HomeScreen></HomeScreen>
    </NavigationContainer>
  )
}

export default App;