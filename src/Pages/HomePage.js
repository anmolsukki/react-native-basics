import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from 'apsl-react-native-button';

class HomePage extends React.Component {
  render() {
    return (
      <View>
        <Button style={styles.btnStyle} textStyle={styles.textStyles} onPress={() => this.props.navigation.push('TodoPage')}>
          Todo List
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#df7861',
    borderColor: 'transparent',
    borderRadius: 20,
    width: '95%',
    marginTop: 15,
    alignSelf: 'center',
    height: 40,
  },
  textStyles: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default HomePage;
