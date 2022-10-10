import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={require('../assets/img3.png')}
        resizeMode="cover"
        style={styles.imageStyle}>
        <View style={styles.viewMain}>
          <View style={styles.viewFirst}>
            <Text style={styles.title}>F A N C Y</Text>

            <Text style={styles.subTitle}>Best Fashion Shopping App</Text>
          </View>

          <View style={styles.viewSecond}>
            <Pressable
              style={styles.buttonStyleWhite}
              onPress={() => navigation.navigate('DrawerNavigationRoutes')}
            >
              <View style={styles.viewIcon}>
                <AntDesignIcon name="mail" color={'#000'} size={18} />
                <Text style={styles.buttonTextStyleBlack}>
                  Sign Up with Email
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.buttonStyleBlack}
              // onPress={() => navigation.navigate('Details')}
            >
              <View style={styles.viewIcon}>
                <FontAwesomeIcon name="facebook" color={'#fff'} size={18} />
                <Text style={styles.buttonTextStyleWhite}>
                  Continue with Facebook
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  viewMain: {
    backgroundColor: '#00000040',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    height:'100%',
    marginVertical: 10,
  },

  viewFirst: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  viewSecond: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    alignContent: 'center',
  },

  viewIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 80,
  },

  subTitle: {
    fontSize: 14,
    color: '#fff',
  },

  buttonStyleWhite: {
    height: 54,
    width: '100%',
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  buttonStyleBlack: {
    height: 54,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  buttonTextStyleWhite: {
    color: '#fff',
    fontWeight: '700',
    marginStart: 10,
  },

  buttonTextStyleBlack: {
    color: '#000',
    fontWeight: '700',
    marginStart: 10,
  },

  imageStyle: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
