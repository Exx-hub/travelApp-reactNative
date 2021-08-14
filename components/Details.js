import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Details({navigation, route}) {
  // console.log(route.params.item.title);
  return (
    <View>
      <Text>{route.params.item.title}</Text>
      <Button onPress={() => navigation.navigate('ALVIN')} title="Back" />
    </View>
  );
}
