import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from './src/context/Context';
import Login from './src/screens/Login';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
