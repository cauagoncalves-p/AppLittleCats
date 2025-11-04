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
                <CardPets stylesProps={{width:190, height:200}} stylesIMG={{width:170, height:220}} stylesText={{fontSize:25}} text="Tom" stylesViewIMG={{right:-50, top:-80}} image={require("../assets/ImageCardsPets/gato1.jpg")} colorGradiente="#e4d3ff" colorGradiente1="white"/>
                <CardPets stylesProps={{width:190, height:200}} stylesIMG={{width:190, height:250}} stylesText={{fontSize:25}} text="Milke" stylesViewIMG={{right:-70, top:-100}} image={require("../assets/ImageCardsPets/dog2.jpg")} colorGradiente="#ffdce4" colorGradiente1="white"/>
                <CardPets stylesProps={{width:190, height:200}} stylesIMG={{width:180, height:220}} stylesText={{fontSize:25}} text="Helena" stylesViewIMG={{right:-50, top:-70}} image={require("../assets/ImageCardsPets/coelho1.jpg")} colorGradiente="#d7f5c4" colorGradiente1="white"/>
                <CardPets stylesProps={{width:190, height:200}} stylesIMG={{width:180, height:250}} stylesText={{fontSize:25}} text="Sara & Deni" stylesViewIMG={{right:-40, top:-110}} image={require("../assets/ImageCardsPets/gato2.jpg")} colorGradiente="#d0defb" colorGradiente1="white"/>
                <CardPets stylesProps={{width:190, height:200}} stylesIMG={{width:160, height:250}} stylesText={{fontSize:25}} text="Shasa" stylesViewIMG={{right:-50, top:-90}} image={require("../assets/ImageCardsPets/dog1.jpg")} colorGradiente="#fee0ca" colorGradiente1="white"/>
                <CardPets stylesProps={{width:190, height:200}} stylesIMG={{width:170, height:220}} stylesText={{fontSize:25}} text="Joyce" stylesViewIMG={{right:-50, top:-80}} image={require("../assets/ImageCardsPets/gato1.jpg")} colorGradiente="#d6fbfc" colorGradiente1="white"/>
            </View>

            <View>
                
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