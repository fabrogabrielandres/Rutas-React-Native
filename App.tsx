import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    // <View >

    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})
