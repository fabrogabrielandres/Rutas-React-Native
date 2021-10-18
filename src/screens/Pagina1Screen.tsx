import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { View, Button } from 'react-native'
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {




    return (
        <View style={styles.globalMargin}>

            <Button
                title={"Ir a pagina 2"}
                onPress={() => navigation.navigate("Pagina2Screen")}
            />

        </View>
    )
}
