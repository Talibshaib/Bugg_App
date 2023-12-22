import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Nav from './src/component/Nav';
import Compo1 from './src/component/Compo1';
import Compo2 from './src/component/Compo2';
import PassGen from './src/component/PassGen';
import Test from './src/component/Test';
import Buttons from './src/component/Buttons';
// import YourComponent from './src/component/Test';

export default function App() {
  return (
    <SafeAreaView>
      {/* <ScrollView > */}
      <View>
        <Nav />
        {/* <Compo1 /> */}
        {/* <Compo2 /> */}
        {/* <PassGen /> */}
        {/* <Test /> */}
        {/* <Buttons /> */}

        {/* <YourComponent /> */}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
