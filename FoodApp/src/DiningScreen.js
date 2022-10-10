import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  SectionList,
  Image
} from 'react-native';

const DATA = [
  {
    title: 'Pizza',
  },
  {
    title: 'Biryani',
  },
  {
    title: 'Ice Cream',
  },
  {
    title: 'Momos',
  },
  {
    title: 'Burger',
  },
  {
    title: 'Mithai',
  },
  {
    title: 'Chinese',
  },
  {
    title: 'BBQ',
  },
];

// const [images, setimages] = useState([
//   require('../assets/fl1.png'),
//   require('../assets/fl1.png'),
//   require('../assets/fl1.png'),
//   // require('./assets/image3.jpg'),
//   // require('./assets/image4.jpg'),
//   // require('./assets/image5.jpg'),
//   // require('./assets/image6.jpg'),
//   // require('./assets/image7.jpg'),
//   // require('./assets/image8.jpg')
// ]);

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

// const ListItem = ({item}) => {
//   return (
//     <View style={styles.itemView}>
//       <Image
//         style={styles.itemPhoto}
//         resizeMode="cover"
//       />
//       <Text style={{fontSize:14}}>{item.text}</Text>
//     </View>
//   );
// };

export default function DiningScreen({navigation}) {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Discover restaurants for</Text>
      <SafeAreaView style={styles.container}>
        <FlatList numColumns={4}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // onEndReached
        />
      </SafeAreaView>

      <Text style={styles.text}>Curated Collections</Text>


{/* <FlatList
    data={images}
    key={"2"}
    numColumns={2}
    renderItem={({ item }) => (
      <Image
        source={item}
        style={{
          width: 180,
          height: 220,
          borderWidth: 2,
          borderColor: "#c35547",
          resizeMode: "contain",
          margin: 6,
        }}
        keyExtractor={(item) => item.id}
      />
    )}
  /> */}

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding:10,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  body: {
    flex: 1,
   
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 5,
  },
  itemView: {
    margin: 10,
  },
  itemPhoto: {
    width: 100,
    height: 100,
    backgroundColor: '#C7F6B6',
  },
  itemText: {
    left: 20,
  },
});
