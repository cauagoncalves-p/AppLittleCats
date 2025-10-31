import React from "react"
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default () =>{
    return (
       <SafeAreaView style={styles.container}>
            <Text style={styles.txt}>Login</Text>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    txt:{
        fontSize:16
    }
})