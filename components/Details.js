import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Details({navigation}) {
  return (
    <View>
      <Text>deets</Text>
      <Button onPress={() => navigation.navigate('ALVIN')} title="Back" />
    </View>
  );
}
