import React from 'react';
import { StyleSheet, Text, View , TouchableHighlight} from 'react-native';
import { Linking } from 'expo'
import {pushNotification} from 'src\PushNotification.js'

const  handlePress = () => {
 return Linking.openURL('https://www.google.com/maps/search/?api=1&query=centurylink+field')
}


export default function App() {
  return(
    <View style={Styles.header}>
      <TouchableHighlight onPress={handlePress}>
          <Text>Open</Text>
      </TouchableHighlight>
    </View>
  ) 
}

const Styles = StyleSheet.create({
  header: {
    marginTop: 200
  }
})



