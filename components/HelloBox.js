import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelloBox() {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>Hello, world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});