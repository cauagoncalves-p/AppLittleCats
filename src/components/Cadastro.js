import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native"
import { TextInput } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
export default () =>{
    const navigation = useNavigation();
    const [password, setPassword] = useState(false)
    const [confiPassword, confisetPassword] = useState(false)
    return (
       <SafeAreaView style={styles.container}>
           <View style={{alignItems:"center", gap:10, marginTop:"20%"}}>
                <Text style={{fontSize:30, color:"#f69929", fontWeight:"600"}}>Sign Up</Text>
                <Text>Uma comida para você adotar seu melhor parceiro</Text>
           </View>

           <View>
                <View style={{gap:20}}>
                    <TextInput  placeholder="Nome"
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"  style={{backgroundColor:"white", borderEndEndRadius:5,borderStartEndRadius:5, borderTopEndRadius:5,borderStartStartRadius:5, borderColor:"black", borderWidth:1}}/>
                    
                    <TextInput  placeholder="E-mail"
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"  style={{backgroundColor:"white", borderEndEndRadius:5,borderStartEndRadius:5, borderTopEndRadius:5,borderStartStartRadius:5, borderColor:"black", borderWidth:1}}/>
                    
                    <TextInput  placeholder="Informe sua senha"
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent" secureTextEntry={!password} right={<TextInput.Icon icon={password ? "eye" : "eye-off"} onPress={() => setPassword(!password)}/>} style={{backgroundColor:"white", borderEndEndRadius:5,borderStartEndRadius:5, borderTopEndRadius:5,borderStartStartRadius:5, borderColor:"black", borderWidth:1}}/>
                    
                    <TextInput  placeholder="Confirme sua senha"
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent" secureTextEntry={!confiPassword} right={<TextInput.Icon icon={confiPassword ? "eye" : "eye-off"} onPress={() => confisetPassword(!confiPassword)}/>} style={{backgroundColor:"white", borderEndEndRadius:5,borderStartEndRadius:5, borderTopEndRadius:5,borderStartStartRadius:5, borderColor:"black", borderWidth:1}}/>
                </View>
           </View>

           <View style={{alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor:"#f69929", width:"100%", padding:15, borderRadius:10}}><Text style={{textAlign:"center", color:"white", fontSize:20}}>Cria conta</Text></TouchableOpacity>
           </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:20,
        gap:30
    }
})