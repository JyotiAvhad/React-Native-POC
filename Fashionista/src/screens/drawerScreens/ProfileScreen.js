import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function ProfileScreen({navigation}) {
  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Profile Screen</Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
