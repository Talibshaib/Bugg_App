import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Nav() {
  const [newUsae, setNewUser] = useState([]);
  const [loader, setLoader] = useState(true);

  const userData = async () => {
    try {
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const data = await response.json();
      setNewUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <View>
      <Text>hello</Text>
      <FlatList
        data={newUsae}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            {/* Render other item properties as needed */}
          </View>
        )}
        // Provide a unique key for each item
      />
    </View>
  );
}

const styles = StyleSheet.create({});
