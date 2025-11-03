import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import  Icon  from "react-native-vector-icons/FontAwesome";
import { Button, TextInput } from "react-native-paper";
import CardPetsCategoria from "./CardPets/CardPetsCategoria";
import CardPets from "./CardPets/CardPets";
import { useNavigation } from "@react-navigation/native";
export default () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row", padding:20, alignItems:"center", justifyContent:"space-between"}}>
                <View>
                    <Text style={styles.txtTille}>Let's fiend a </Text>
                    <Text style={styles.txtTilleSub}>Little friends </Text>
                </View>
                <View style={{borderWidth:1, borderColor:"#ccc", paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:10, borderRadius:50}}>
                    <TouchableOpacity  onPress={() => navigation.openDrawer()}><Icon name="navicon" size={30}/></TouchableOpacity>
                </View>
            </View>

            <View style={{padding:20}}>
              <TextInput
                style={styles.textinput}
                placeholder="Search here..."
                mode="flat"
                underlineColor="transparent"
                activeUnderlineColor="transparent"
                left={<TextInput.Icon icon="magnify" />}/>
            </View>

            <View style={styles.viewCategoria}>
                <Text style={styles.viewCategoriaTXT1}>Categoria</Text>
                <Text style={styles.viewCategoriaTXT2}>View all</Text>
            </View>

            <View style={{padding:20, flexDirection:"row", gap:20}}>
                <CardPetsCategoria nome={"Cats"} image={require("../assets/ImageMain/icons-gato.jpg")}/>
                <CardPetsCategoria nome={"Dogs"} image={require("../assets/ImageMain/icons-dog.jpg")}/>
                <CardPetsCategoria nome={"Birds"} image={require("../assets/ImageMain/icons-birds.jpg")}/>
                <CardPetsCategoria nome={"Fish"} image={require("../assets/ImageMain/icons-fish.jpg")}/>
            </View>

            <View style={{padding:20, flexDirection:"row"}}>
                <CardPets text="Brook" image={require("../assets/ImageCardsPets/dog1.jpg")} txtdistanca="1.2 km away"/>
            </View>
            
            <Button onPress={() => navigation.navigate('ExplorePets')}> clique</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    txtTille:{
        fontSize:25
    },
    txtTilleSub:{
        fontSize:35, 
        fontWeight:"600"
    },
    textinput:{
        borderWidth:1,
        backgroundColor:"white",
        borderColor:"#ccc", 
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderEndStartRadius:10,
        borderEndEndRadius:10,
    }, 
    viewCategoria:{
        flexDirection:"row",
        justifyContent:"space-between", 
        padding:20
    },
    viewCategoriaTXT1:{
        fontWeight:"400",
        fontSize:18
    },
    viewCategoriaTXT2:{
        color:"#ccc",
        fontSize:17
    }
})