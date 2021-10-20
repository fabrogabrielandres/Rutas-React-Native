import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import {MenuLateral} from './src/navigator/MenuLateral';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (

    <NavigationContainer>
      <MenuLateral/>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico/> */}
    </NavigationContainer>

  )
}

export default App

