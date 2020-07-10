
/* eslint-disable prettier/prettier */
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Button,

} from 'react-native';

export default function Principal() {



  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mark}>PetCare</Text>
          <Image
            source={require('../../assets/icons/header.png')}
            style={styles.logo}
          />
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 5
  },
  header: {
    height: 80,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 10,
    marginTop: 5
  },
  mark: {
    fontSize: 38,
    color: 'rgba(250,60,62,0.8)',
    fontWeight: 'bold',
    fontFamily: 'Peenguin'
  },
  logo: {
    height: 60,
    width: 70,
    resizeMode: "stretch",
  },
});
