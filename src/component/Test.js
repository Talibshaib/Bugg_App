import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
} from 'react-native';
import React from 'react';

export default function Test(props) {
  const MyName = 'talib';
  // const BioDate = (place, roll, deegre) => {
  //   return `i live in ${place} my roll is ${roll} and i am pursuing my ${deegre} from RGPV`;
  // };
  const Data = [
    {
      key: '1',
      name: 'talib',
    },
    {
      key: '2',
      name: 'manish',
    },
    {
      key: '3',
      name: 'prince',
    },
    {
      key: '4',

      name: 'ramesh',
    },
    {
      key: '6',
      name: 'kabir',
    },
    {
      key: '7',
      name: 'kartike',
    },
    {
      key: '8',
      name: 'ysh',
    },
    {
      key: '9',
      name: 'Dora',
    },
  ];

  return (
    
    <View style={styles.btn}>
      {/* <Text>MyName</Text> */}
      {/* <Text>{BioDa
        te('bihar', '65', 'b.tech')}</Text> */}
      {/* <FlatList
        style={styles.flat}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Data}
        renderItem={({item}) => {
          return <Text style={styles.text}>{item.name}</Text>;
        }}
      /> */}
      <Button
        title="click"
        onPress={() => {
          console.log('hey den');
          Alert.alert('hey den');
        }}
      />
      <Image
        style={styles.imges}
        source={require('../../assets/images/image1.jpeg')}
      />

      <Text style={styles.textfont}>
        asset, using npx react-native-asset (enhancement over react-native
        link). This will automatically create assets/fonts folder (for android)
        and make a custom font entry in Info.plist (for ios). Now, you can
        create a text style, by adding the newly added font.
      </Text>
      <Text style={styles.textfont2}>
        lorem This will automatically create assets/fonts folder (for android)
        and make a custom font entry in Info.plist (for ios). Now, you can
        create a text style, by adding the newly added font.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    width: 200,
    height: 100,
    color: 'white',
  },
  btn: {
    marginTop: 50,
  },
  textfont: {
    width: 300,
    fontSize: 20,
    fontFamily: 'Roboto-Italic',
  },
  textfont2: {
    width: 300,
    fontSize: 20,
    // fontFamily: 'Roboto-Regular',
  },
  imges: {
    width: 200,
    height: 100,

  },
});
