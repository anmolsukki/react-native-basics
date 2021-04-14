import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const FindScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>Find Screen</Text>
      <Button title="Click Here" onPress={() => Alert.alert('Button Clicked')} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});

export default FindScreen;
