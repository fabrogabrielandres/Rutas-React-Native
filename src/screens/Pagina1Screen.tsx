import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { RootStackParms } from '../navigator/StackNavigator';
import { styles } from '../theme/AppTheme';



interface Props extends DrawerScreenProps<RootStackParms, "Pagina1Screen"> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Toogle"
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        }
        )
    }, [])


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

            <View style={{
                flexDirection: "row"
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("PersonaScreen", {
                        id: 1,
                        nombre: "pedro"
                    })}
                    style={{ ...styles.botonGrande, backgroundColor: "purple" }}
                >
                    <Text
                        style={styles.botonGrandeText}
                    >pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("PersonaScreen", {
                        id: 2,
                        nombre: "maria"
                    })}
                    style={{ ...styles.botonGrande, backgroundColor: "orange" }}
                >
                    <Text
                        style={
                            styles.botonGrandeText
                        }
                    >maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
