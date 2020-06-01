import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [distance, setDistance] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)

    })();

  });

  setTimeout(() => {
    let distanc = calc(latitude, longitude, -22.864039, -46.033042)
    setDistance(distanc)

    if (distance < 20) {
      Alert.alert("Veiculo se aproximando")
    }

  }, 10000);


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  function calc(lat1, lon1, lat2, lon2) {
    let R = 6371
    let dLat = (lat2 - lat1) * (Math.PI / 180)
    let dLon = (lon2 - lon1) * (Math.PI / 180)

    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = R * c

    return d
  }

  return (
    <View style={{ padding: 100 }} >
      <Text >{text}</Text>

      <Text>{distance}</Text>
    </View>
  );
}
