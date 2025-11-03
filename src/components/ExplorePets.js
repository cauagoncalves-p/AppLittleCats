import React from "react"
import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import  Icon  from "react-native-vector-icons/FontAwesome";
import CardPets from "./CardPets/CardPets";
export default () =>{
const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row", padding:20, alignItems:"center"}}>
                <View style={{borderWidth:1, borderColor:"#ccc", paddingTop:15, paddingBottom:15, paddingLeft:10, paddingRight:10, borderRadius:50}}>
                    <TouchableOpacity  onPress={() => navigation.goBack()}><Icon name="arrow-left" size={30}/></TouchableOpacity>
                </View>

                <View style={styles.viewHeader}>
                    <Text style={styles.txtTille}>Explore Pets</Text>
                    <Text style={styles.txtTilleSub}>São Paulo, Brazilian </Text>
                </View>
            </View>

            <View style={styles.CardPetsviewMain}>
                <CardPets stylesProps={{width:180, height:200}} colorGradiente="black" colorGradiente1="white"/>
                <CardPets stylesProps={{width:180, height:200}}/>
                <CardPets stylesProps={{width:180, height:200}}/>
                <CardPets stylesProps={{width:180, height:200}}/>
                <CardPets stylesProps={{width:180, height:200}}/>
                <CardPets stylesProps={{width:180, height:200}}/>
            </View>
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
        fontSize:15
    },
    viewHeader:{
        alignItems:"center", 
        flex:1
    },
    CardPetsviewMain:{
        flexWrap:"wrap",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20
    }
})