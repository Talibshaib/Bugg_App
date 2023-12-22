import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import * as yup from 'yup';

const passLenghtSchema = yup.object().shape({
  passLength: yup
    .number()
    .min(4, 'min should be 4 character')
    .max(16, 'max is 16 character')
    .required('pass length is required'),
});

export default function PassGen() {
  const [password, setPassword] = useState('');
  const [isPassGen, setIsPassGen] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePass = (passLength: number) => {
    //
    let characterList = '';

    const upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseString = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharSrring = '~@#$%^&*():?/+=';

    if (upperCase) {
      characterList += upperCaseString;
    }
    if (lowerCase) {
      characterList += lowerCaseString;
    }
    if (number) {
      characterList += numbers;
    }
    if (symbol) {
      characterList += specialCharSrring;
    }

    let passResult = createPass(characterList,passLength)
    setPassword(passResult)
    console.log(passResult);
    
  };

  const createPass = (characteristic: String, passLength: number) => {
    //
    let result = '';
    for (let i = 0; i < passLength; i++) {
      const passGenerator = Math.round(Math.random() * passLength);
      result += characteristic.charAt(passGenerator);
    }
    return result;
  };

  const resetPass = () => {
    //
  };

  return (
    <View>
      <Text>PassGen</Text>
      <Text>{password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
