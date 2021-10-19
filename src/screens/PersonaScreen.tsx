import React, { useEffect } from 'react';

import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';
import { RootStackParms } from '../navigator/StackNavigator';


interface Props extends StackScreenProps<RootStackParms, "PersonaScreen"> { };



export const PersonaScreen = ( {route,navigation}: Props) => {
    
    useEffect(() => {
        navigation.setOptions({
            title:route.params.nombre
        })
        
    }, [])

    return (
        <View>
            <Text style={styles.title}>{JSON.stringify(route.params,null,3)}</Text>
        </View>
    )
}

