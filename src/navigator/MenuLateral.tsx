import React from 'react';

import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreens } from '../screens/SettingScreens';



const Drawer = createDrawerNavigator()


export const MenuLateral = () => {

    const { width } = useWindowDimensions()


    return (

        <Drawer.Navigator
            // drawerContent={ (props: DrawerContentComponentProps )=> <MenuInterno {...props} /> } 
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingScreens" component={SettingScreens} />
        </Drawer.Navigator>
    )
}


// const MenuInterno = ( {...props} )=>{
  
    
    
//     return (
//         <Text>menu interno</Text>
//     )
// }

