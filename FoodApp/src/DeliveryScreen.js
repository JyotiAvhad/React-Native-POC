import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  SectionList,
  SafeAreaView,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

//imports files
import Cards from '../components/Cards';

const images = [
  {src: require('../assets/fl1.png')},
  {src: require('../assets/fl2.png')},
  {src: require('../assets/fl3.png')},
  {src: require('../assets/fl4.png')},
  {src: require('../assets/fl5.png')},
];

const ListItem = ({item}) => {
  return (
    <View style={styles.itemView}>
      <Image
        style={styles.itemPhoto}
        resizeMode="cover"
        source={item.uri
        // require('../assets/fl3.png')
        // {uri: item.uri,}
        }
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default function DeliveryScreen({navigation}) {
  // const onPressHandler = () => {
  //   navigation.navigate('Screen_B');
  // };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.container}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={2}
            showPagination
            data={images}
            renderItem={({item}) => (
              <Image
                source={item.src}
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  resizeMode: 'contain',
                  // height: 100,
                  // width: 00
                }}
              />
            )}
          />
        </View>

        <View style={styles.container}>
          <Image
            style={styles.imgBg}
            source={require('../assets/offerCard.png')}
          />
        </View>

        <Text style={styles.baseText}>Eat what makes you happy</Text>

        <SafeAreaView style={{flex: 1}}>
          <SectionList
            horizontal={true}
            sections={SECTIONS}
            renderItem={({item}) => {
              return <ListItem item={item} />;
            }}
          />
        </SafeAreaView>

        {/* <View style={{marginTop: 10}}>
          <Text style={styles.baseText}>Recommended for you</Text>
        </View> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: 220,
  },
  imgBg: {
    height: 160,
    width: '100%',
    marginTop: 20,
    backgroundColor: '#fff',
  },
  baseText: {
    left:5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  itemView: {
    margin: 10,
  },
  itemPhoto: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
  itemText: {
    left: 20,
  },
});

const SECTIONS = [
  {
    // title: 'Eat what makes you happy',
    data: [
      {
        text: 'Healthy',
        uri: require('../assets/fl1.png'),
      },
      {
        text: 'Pizza',
        uri: require('../assets/fl2.png'),
      },

      {
        text: 'Burger',
        uri: require('../assets/fl3.png'),
      },
      {
        text: 'Chaat',
        uri: require('../assets/fl4.png'),
      },
      {
        text: 'Sandwich',
        uri: require('../assets/fl1.png'),
      },
      {
        text: 'Rolls',
        uri: require('../assets/fl5.png'),
      },
    ],
  },
];
