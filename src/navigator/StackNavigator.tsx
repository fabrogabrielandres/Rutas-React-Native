import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { styles } from '../theme/AppTheme';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            contentStyle:{
                backgroundColor:"white",
            },
        }}
        >
            <Stack.Screen name="Pagina1Screen" options={{title:"title-pa1"}} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{title:"title-pa2"}} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{title:"title-pa3"}} component={Pagina3Screen} />
        </Stack.Navigator>

    )
}
