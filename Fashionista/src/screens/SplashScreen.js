import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';


const SplashScreen = ({ navigation }) => {

  const [isVisible, setiSVissible] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setiSVissible(false);
      navigation.navigate('LoginScreen');
    }, 3000);

  });

  return (
    <View style={styles.screenContainer}>
      <Image
        style={styles.imageStyle}
        source={require('../assets/img2.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  imageStyle: {
    height: '100%',
    width: '100%',
  },

});

export default SplashScreen;

