import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ text, image }) => {
  const [colorHeart, setColorHeart] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.colorView}>
        <View style={styles.viewIcon}>
          <Icon
            style={styles.icon}
            onPress={() => setColorHeart(!colorHeart)}
            name="heart"
            color={colorHeart ? '#191f24' : 'white'}
            size={30}
          />
        </View>

        <View style={{flexDirection:"row"}}>
          <View style={{width:100}}>
            <Text style={styles.TxtName}>Brook</Text>
            <Text>1.2 km away</Text>
          </View>

          <View>
            <Image
              source={require('../../assets/ImageCardsPets/dog1.jpg')} style={styles.sizeImg}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorView: {
    backgroundColor: '#fee0ca',
    height: 250,
    width: 250,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
  },
  viewIcon: {
    backgroundColor: '#e4cfc2',
    borderRadius: '50%',
    width: 50,
    padding: 10,
    alignItems: 'center',
  },
  TxtName: {
    fontFamily: 'robotocondensedbold',
    fontSize: 30,
  },
  sizeImg:{
    height:100,
    width:100,
  }
});
