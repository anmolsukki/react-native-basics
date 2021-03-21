import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.BtnContainer}>
        <Text style={styles.btnStyle}>Todo List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BtnContainer: {
    backgroundColor: 'darkorange',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnStyle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
