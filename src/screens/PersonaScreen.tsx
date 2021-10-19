import React, { useEffect } from 'react';

import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';


interface Props extends StackScreenProps<any, any> { };



export const PersonaScreen = ( {route}: Props) => {
    console.log(route.params);
    

    return (
        <View>
            <Text style={styles.title}>{JSON.stringify(route.params,"ddddd",3)}</Text>
        </View>
    )
}

