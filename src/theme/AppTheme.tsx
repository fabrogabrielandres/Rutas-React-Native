import { StyleSheet } from 'react-native';




export const styles = StyleSheet.create({

    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30
    },
    botonGrande: {
        backgroundColor: "red",
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        margin: 2
    },
    botonGrandeText:{
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    },
    avatarContainer:{
        marginTop:10,
        display:'flex',
        alignItems:"center"
    },
    avatar:{
        height:150,
        width:150,
        borderRadius:100
    }

})
