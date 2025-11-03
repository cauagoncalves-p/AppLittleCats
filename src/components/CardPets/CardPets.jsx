import React, { useState } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const CardPets =  ({ text, image,txtdistanca, stylesProps,colorGradiente ,colorGradiente1}) => {
  const [colorHeart, setColorHeart] = useState(false);
  return (
      <LinearGradient style={[styles.gradient, stylesProps]}  colors={[colorGradiente || '#fee0ca', colorGradiente1 || '#ffffff']}  start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }} locations={[0,0.7]}>
        <View style={styles.viewIcon}>
          <Icon
            style={styles.icon}
            onPress={() => setColorHeart(!colorHeart)}
            name="heart"
            color={colorHeart ? '#191f24' : 'white'}
            size={30}
          />
        </View>

        <View style={{flexDirection:"row", position:"relative"}}>
          <View style={{width:100, gap:10}}>
            <Text style={styles.TxtName}>{text}</Text>
            <Text>{txtdistanca}</Text>
          </View>

          <View style={{position: "absolute", right:-20, top:-100}}>
            <Image
              source={image} style={styles.sizeImg}
            />
          </View>
        </View>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 250,
    width: 300,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius:30,
    padding: 20,
    marginBottom:20
  },
  viewIcon: {
    borderRadius: '50%',
    width: 50,
    padding: 10,
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.05)'
  },
  TxtName: {
    fontFamily: 'robotocondensedbold',
    fontSize: 30,
  },
  sizeImg:{
    width:200,
    height:310
  }
});

export default CardPets;