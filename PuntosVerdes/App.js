import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PaginaPrincipal from './screens/PaginaPrincipal';

const Stack=createNativeStackNavigator();

export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="PaginaPrincipal">
      <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}