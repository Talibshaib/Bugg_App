import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function Compo1() {
  return (
    <ScrollView horizontal={true} >
      <View style={styles.main}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/762559/pexels-photo-762559.jpeg?auto=compress&cs=tinysrgb&w=400',
          }}
          style={styles.bgphoto}>
          <View style={styles.smain}>
            <Text style={styles.bptext}>Make your home Chrismas ready!</Text>
            <Text style={styles.ltext}>
              Get trees, lights, decoration kits & more
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btext}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.main}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/14622417/pexels-photo-14622417.jpeg?auto=compress&cs=tinysrgb&w=400',
          }}
          style={styles.bgphoto}>
          <View style={styles.smain}>
            <Text style={styles.bptext}>Make your home Chrismas ready!</Text>
            <Text style={styles.ltext}>
              Get chocolates, cookies, pesties & lot more...
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btext}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 6,
  },
  bgphoto: {
    height: 200,
    width: 320,
    resizeMode: 'cover',
    borderRadius: 15, 
    overflow: 'hidden',
  },
  smain: {
    flex: 1,
    gap: 10,
    margin: 10,
    justifyContent: 'space-between',
    width: 160,
  },
  button: {
    flex: 0,
    width: 80,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btext: {
    color: 'black',
  },
  bptext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  ltext: {
    color: 'white',
    fontStyle: 'italic',
    marginTop: -40,
  },
});
