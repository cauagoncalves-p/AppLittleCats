import React, { use, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image} from "react-native"
import { TextInput } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
export default () =>{
    const navigation = useNavigation();
    const [password, setPassword] = useState(false)
    return (
       <SafeAreaView style={styles.container}>
           <View style={{alignItems:"center", gap:10, marginTop:"20%"}}>
                <Text style={{fontSize:30, color:"#f69929", fontWeight:"600"}}>Sign In</Text>
                <Text>Uma comida para você adotar seu melhor parceiro</Text>
           </View>

           <View style={{flexDirection:"row", justifyContent:"space-around", marginVertical:20}}>
                <TouchableOpacity style={{backgroundColor:"#f5f9fe", width:"45%", padding:15, borderRadius:10}}>
                    <View style={{flexDirection:"row", gap:20, alignItems:"center"}}>
                        <Image source={require("../assets/ImageLogin/facebook.png")} style={{width:25, height:25}}/>
                        <Text>Facebook</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"#f5f9fe", width:"45%", padding:15, borderRadius:10}}>
                    <View style={{flexDirection:"row", gap:20, alignItems:"center"}}>
                        <Image source={require("../assets/ImageLogin/google.png")} style={{width:25, height:25}}/>
                        <Text>Google</Text>
                    </View>
                </TouchableOpacity>
           </View>

           <View>
                <View style={{gap:20}}>
                    <TextInput  placeholder="Search here..."
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"  style={{backgroundColor:"white", borderEndEndRadius:5,borderStartEndRadius:5, borderTopEndRadius:5,borderStartStartRadius:5, borderColor:"black", borderWidth:1}}/>

                    <TextInput  placeholder="Search here..."
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent" secureTextEntry={!password} right={<TextInput.Icon icon={password ? "eye" : "eye-off"} onPress={() => setPassword(!password)}/>} style={{backgroundColor:"white", borderEndEndRadius:5,borderStartEndRadius:5, borderTopEndRadius:5,borderStartStartRadius:5, borderColor:"black", borderWidth:1}}/>
                </View>
                <Text style={{textAlign:"right", marginTop:5}}>Forgot Password</Text>
           </View>

           <View style={{alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor:"#f69929", width:"100%", padding:15, borderRadius:10}}><Text style={{textAlign:"center", color:"white", fontSize:20}}>Login</Text></TouchableOpacity>
                <View style={{flexDirection:"row", gap:10, alignSelf:"flex-start", marginTop:10}}>
                    <Text>Don't hava a account?</Text>
                    <Text onPress={() => navigation.navigate('Cadastro')} style={{color:"#3461fd"}}>Sign Up</Text>
                </View>
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