import React from 'react';
import {StyleSheet,Dimensions, View, Text, Pressable} from 'react-native';

const screen = Dimensions.get('window');

export default function AlarmScreen({navigation}) {
 
  return (
    <View style={styles.containerBody}>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    flex: 1,
    backgroundColor:'#262626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockSectionStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 8,
    width: screen.width / 4,
    height: screen.width / 4,
    borderRadius: screen.width / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
