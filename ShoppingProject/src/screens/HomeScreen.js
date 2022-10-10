import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function HomeScreen({navigation}) {
  const onPressHandler = () => {
    // navigation.navigate('Profile');
  };

  return (
    <View style={styles.body}>
      {/* <Icon name="md-beer" type="ionicon" color="#887700" /> */}
      <Text style={styles.text}>Dashboard Screen</Text>

      {/* <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable> */}
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
