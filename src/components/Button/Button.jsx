import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
export default ({text}) =>{
    return (
        <TouchableOpacity style={styles.button}><Text style={styles.buttonTxT}>{text}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#f69929",
        padding:10,
        borderRadius:20,
        width:"95%"
    },
    buttonTxT:{
        color:"white",
        fontWeight:"700",
        fontSize:20,
        textAlign:"center"
    }
})