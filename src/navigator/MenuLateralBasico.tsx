import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingScreens from '../screens/SettingScreens';



const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreens" component={SettingScreens} />
    </Drawer.Navigator>
  )
}

