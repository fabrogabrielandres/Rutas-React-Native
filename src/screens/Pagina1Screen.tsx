import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { View, Button, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {




    return (
        <View style={styles.globalMargin}>
            <Text
                style={styles.title}
            >Pagina1Screen</Text>

            <Button
                title={"Ir a pagina 2"}
                onPress={() => navigation.navigate("Pagina2Screen")}
            />

            <Text>Navegar con argumentos</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("PersonaScreen", {
                    id: 1,
                    nombre: "pedro"
                })}
                
            >
                <Text>pedro</Text>
            </TouchableOpacity>

        </View>
    )
}
