import React from 'react';
import { StyleSheet, Text, View , TouchableHighlight} from 'react-native';
import * as Print from 'expo-print'
import * as FileSystem from 'expo-file-system'
import { AsyncStorage } from 'react-native';
import * as MediaLibrary from 'expo-media-library'


async function createPDF () {
  let TEST = "Luana"
  const document = await Print.printToFileAsync({
    html: "<h1>" + TEST +"<h1>",
    width : 612,
    height : 792,
    base64 : false
  });
  await MediaLibrary.saveToLibraryAsync(document.uri)
  console.log("Done" , document.uri)
}

/*await FileSystem.moveAsync({
    from: document.uri,
    to: AsyncStorage.
  })*/

export default function SavePDF() {
  return(
    <View>
      <TouchableHighlight onPress = {createPDF}>
        <Text style = {Styles.header}>Create PDF</Text>
      </TouchableHighlight>
    </View>
  ) 
}

const Styles = StyleSheet.create({
  header: {
    marginTop: 200
  }
})

