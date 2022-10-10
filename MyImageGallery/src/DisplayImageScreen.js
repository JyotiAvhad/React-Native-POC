import React, {useState, useRef} from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  Button,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Share,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default DisplayImageScreen = ({route, navigation}) => {
  let IMGs = route.params.url;
// share option
  const shareData = async () => {
    try {
        await Share.share({
            message:
                'RN Share Example',
        });
    } catch (error) {
        alert(error.message);
    }
};
// rotation option
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const handlePress=()=>{
//       Animated.timing(fadeAnim, {
//           toValue:1,
//           duration:5000,
//           useNativeDriver:true,
//       }).start();
//  }

//favourite img

  return (
    <View>
      {/* top tab */}
      <View
        style={{
          padding: 8,
          backgroundColor: '#000',
          opacity: 1,
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Icon
          name="arrow-back"
          style={{paddingLeft: 10, color: '#fff'}}
          size={24}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity>
          <Icon
            name="more-vert"
            style={{paddingRight: 10, color: '#fff'}}
            size={24}
            onPress={shareData} title="Share"
          />
        </TouchableOpacity>
      </View>

      {/* img */}
      {/* <Animated.View style={{opacity:fadeAnim,
        transform:[
            {translateY:fadeAnim.interpolate({
                inputRange:[0,1],
                outputRange:[0,-300]
            })},
            {rotate:fadeAnim.interpolate({
                inputRange:[0, 1],
                outputRange:["0deg", "360deg"]
            })}
        ]
    }}>
    </Animated.View> */}

      <TouchableOpacity>
        <ImageBackground
          source={IMGs}
          
          style={{
            height: deviceHeight - 80,
            width: deviceWidth,
            // opacity:fadeAnim,
            // transform:[
            //   {translateY:fadeAnim.interpolate({
            //       inputRange:[0,1],
            //       outputRange:[0,-300]
            //   })},
            //   {rotate:fadeAnim.interpolate({
            //       inputRange:[0, 1],
            //       outputRange:["0deg", "360deg"]
            //   })}
          // ]
          }}>
          </ImageBackground>
      </TouchableOpacity>

      {/* bottom tab */}
      <View
        style={{
          padding: 8,
          backgroundColor: '#000',
          opacity: 1,
          height: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Icon
            name="rotate-right"
            style={{paddingLeft: 10, color: '#fff'}}
            size={24}
            // onPress={handlePress}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="crop"
            style={{color: '#fff'}}
            size={24}
            // onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="favorite-outline"
            style={{color: '#fff'}}
            size={24}
            onPress={() => { 
              <Icon
              name="crop"
              style={{color: '#fff'}}
              size={24}
            />
            }} 
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="restore-from-trash"
            style={{paddingRight: 10, color: '#fff'}}
            size={24}
            onPress={() => { alert("Do you want to delete it...!") }} 
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const containerStyle = StyleSheet.create({
  // container: {
  //   padding: 8,
  //   backgroundColor: '#000',
  // },
  // rowContainer: {
  //   flexDirection: 'row',
  // },
});
