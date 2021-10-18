import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import { styles } from '../theme/AppTheme';


interface Props extends StackScreenProps<any, any> { };


export const Pagina3Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text
            style={styles.title}
            >Pagina3Screen</Text>

            <Button
                title="regresar atras"
                onPress={() => { navigation.goBack() }}
            />
            <Button
                title="pop to top"
                onPress={() => { navigation.popToTop() }}
            />

        </View>
    )
}
