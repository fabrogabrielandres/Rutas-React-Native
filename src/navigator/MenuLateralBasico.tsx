import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreens } from '../screens/SettingScreens';
import { DrawerLayout } from 'react-native-gesture-handler';



export type RootStackParms = {
  StackNavigator: undefined,
  SettingScreens: { id: number, nombre: string },
}


const Drawer = createDrawerNavigator<RootStackParms>();

export const MenuLateralBasico = () => {

  let { width } = useWindowDimensions()
  console.log(width);


  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width < 770 ? "front" : "permanent"
      }
      }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreens" component={SettingScreens} />
    </Drawer.Navigator >
  )
}

