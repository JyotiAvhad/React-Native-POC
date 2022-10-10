import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function SplashScreen({navigation}) {

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Food</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'#000',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
