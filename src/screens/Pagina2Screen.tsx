import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import { View, Text, Button } from 'react-native'
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> { };


export const Pagina2Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "atras",
            
        })
    }, [])



    return (
        <View style={styles.globalMargin}>
            <Text
                style={styles.title}
            >Pagina2Screen</Text>

            <Button
                title="ir pagina 3"
                onPress={() => navigation.navigate("Pagina3Screen")}
            />
        </View>
    )
}
