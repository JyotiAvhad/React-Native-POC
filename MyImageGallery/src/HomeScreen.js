import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StatusBar
} from 'react-native';
import Images from './Images';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const HomeScreen = props => {
  return (
    <ScrollView>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <StatusBar barStyle='light-content'  backgroundColor="#000"/>
        {Images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              props.navigation.navigate('DisplayImageScreen', {url: image.url})
            }>
            <Image
              source={image.url}
              style={{
                height: deviceHeight / 3,
                width: deviceWidth / 3 - 5,
                borderRadius: 10,
                margin: 2,
              }}></Image>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;