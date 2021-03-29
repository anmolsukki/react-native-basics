import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView } from 'react-native';

const TodoPage = () => {
  const [goal, setGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalHandler = (enteredGoal) => {
    setGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    setCourseGoal((currentGoal) => [...currentGoal, goal]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.inputStyle} onChangeText={goalHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoal.map((data, index) => (
          <View style={styles.listItems} key={index}>
            <Text>{data}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  listItems: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10,
    borderWidth: 1,
  },
});

export default TodoPage;
