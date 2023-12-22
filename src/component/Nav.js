import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect, useId, useState} from 'react';

export default function Nav() {
  const [newUsae, setNewUser] = useState([]);
  const [loader, setLoader] = useState(true);

  const userData = async () => {
    try {
      const respond = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const data = await respond.json();
      setNewUser(data);
      console.log(date);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <View style={styles.main}>
      <Text style={styles.htext}>List Of Student</Text>
      <View>
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={newUsae}
          renderItem={({item}) => (
            <View style={styles.mainbox}>
              <View style={styles.imgbox}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: item.image,
                  }}
                  style={styles.img}
                />
              </View>
              <View style={styles.sbox}>
                <Text style={styles.bdata}>Bio Data</Text>
                <Text style={styles.bdata}>
                  {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                </Text>
              </View>
              <View style={styles.tbox}>
                <Text style={styles.tdata}>{item.name}</Text>
                <Text style={styles.tdata}>{item.email}</Text>
                <Text style={styles.tdata}>{item.mobile}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#445D48',
  },
  mainbox: {
    backgroundColor: '#272829',
    marginHorizontal: 20,
    borderRadius: 6,
    height: 250,
  },
  htext: {
    fontSize: 26,
    marginBottom: 10,
    fontFamily: 'Montserrat-Medium',
    color: '#FDE5D4',
  },
  img: {
    height: 110,
    width: '100%',
    borderRadius: 6,
  },
  imgbox: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopEndRadius: 6,
    borderTopLeftRadius: 6,
  },
  sbox: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bdata: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: '#FDE5D4',
  },
  tbox: {
    padding: 6,
  },
  tdata: {
    fontFamily: 'Montserrat-Medium',
    marginBottom: 4,
    color: '#FDE5D4',
  },
});
