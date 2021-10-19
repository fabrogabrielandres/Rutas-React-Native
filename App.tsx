import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (

    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateralBasico/>
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})
