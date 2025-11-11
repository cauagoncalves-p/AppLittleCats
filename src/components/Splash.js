import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TextInput } from "react-native-paper"
import Button from "./Button/Button"

export default () =>{
    return (
       <SafeAreaView style={styles.container}>
            <View style={{height:"100%"}}>
                <Text style={{fontSize:40, fontWeight:"900", width:"70%"}}>Find Youd Best <Text style={{color:"#ef9926"}}>Companion </Text>With Us</Text>
                <View style={{marginTop:50}}>
                    <Image source={require("../assets/ImageSplash/Picture.png")} style={{width:400, height:550}}/>
                </View>
                <Button text="Get Starting" rota="Home" style={styles.button}/>
            </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20, 
        backgroundColor:"white",
        height:"100%"
    },
    txt:{
        fontSize:16
    },
    button:{
        position:"absolute",
        bottom:0,
        alignSelf:"center"

    }
})