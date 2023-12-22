import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Compo2() {
  return (
    <View style={styles.main}>
      <View style={styles.box}>
        <View style={styles.ibox}>
          <Image
            source={{
              uri: '',
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.ibox}>
          <Image
            source={{
              uri: '',
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.ibox}>
          <Image
            source={{
              uri: '',
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.ibox}>
          <Image
            source={{
              uri: '',
            }}
            style={styles.img}
          />
        </View>
      </View>

      <View style={styles.textbox}>
        <Text style={styles.boldtext}>Description , m..</Text>
        <Text style={styles.thintext}>n products</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 6,
    flex: 0,
    flexWrap: 'wrap',
    borderRadius: 6,
    overflow: 'hidden',
    //
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: '#D8D9DA',
    borderRadius: 6,
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  ibox: {
    // margin:2,
    width: 52,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  btn: {
    padding: 10,
    borderBlockColor: 'green',
    borderWidth: 0.5,
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 20,
  },
  btntext: {
    color: 'green',
    fontWeight: '700',
  },
  boldtext: {
    fontWeight: '500',
    color: 'black',
    fontSize: 15,
  },
  thintext: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
});
