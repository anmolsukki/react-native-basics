import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const CustomButton = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Button</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: Dimensions.get('window').width / 1.5,
    borderRadius: 25,
    marginTop: Dimensions.get('window').height > 600 ? 50 : 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default CustomButton;
