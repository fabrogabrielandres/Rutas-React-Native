import React from 'react';

import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreens } from '../screens/SettingScreens';
import { styles } from '../theme/AppTheme';



const Drawer = createDrawerNavigator()


export const MenuLateral = () => {

    const { width } = useWindowDimensions()


    return (

        <Drawer.Navigator
            drawerContent={ (props)=> <MenuInterno {...props} /> } 
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingScreens" component={SettingScreens} />
        </Drawer.Navigator>
    )
}


const MenuInterno = ( props:DrawerContentComponentProps )=>{
    
    
  
    
    
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    style={
                        styles.avatar
                    }
                    source={{ 
                    uri:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}}
                />
            </View>
        </DrawerContentScrollView>
    )
}

