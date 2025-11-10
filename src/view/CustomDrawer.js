import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <Image
            source={require('../assets/ImageCardsPets/dog1.jpg')}
            style={styles.image}
          />
          <Text style={styles.titulo}>Cafeteria do TH</Text>
        </View>

      <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Botão clicado!')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#FFF5EE', 
    marginBottom:20
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#D2691E',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    padding:40
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
