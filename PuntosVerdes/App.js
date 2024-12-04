import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PaginaPrincipal from './screens/PaginaPrincipal';
import Notificaciones from './screens/Notificaciones';
import IniciarSecion from './screens/IniciarSeción';
import Configuraciones from './screens/Configuraciones'
import Ubicaciones from './screens/Ubicaciones';
const Stack=createNativeStackNavigator();

export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="PaginaPrincipal">
      <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal}/>
      <Stack.Screen name="Notificaciones" component={Notificaciones}/>
      <Stack.Screen name="IniciarSeción" component={IniciarSecion}/>
      <Stack.Screen name="Configuraciones" component={Configuraciones}/>
      <Stack.Screen name="Ubicaciones" component={Ubicaciones}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}