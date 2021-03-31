import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity, Modal, ToastAndroid } from 'react-native';

const TodoPage = () => {
  const [goal, setGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalHandler = (enteredGoal) => {
    setGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    if (goal === '') {
      ToastAndroid.show('Enter Valid Goal !', ToastAndroid.SHORT);
    } else {
      setCourseGoal((currentGoal) => [...currentGoal, { id: Math.random().toString(), value: goal }]);
      setIsAddMode(false);
      setGoal('');
    }
  };

  const deleteHandler = (goalId) => {
    setCourseGoal((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <Modal visible={isAddMode} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" style={styles.inputStyle} onChangeText={goalHandler} />
          <View style={styles.btnContainer}>
            <View style={styles.btnStyle}>
              <Button title="CANCEL" color="red" onPress={() => setIsAddMode(false)} />
            </View>
            <View style={styles.btnStyle}>
              <Button title="ADD" onPress={addGoalHandler} />
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={courseGoal}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => deleteHandler(itemData.item.id)}>
            <View style={styles.listItems}>
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  listItems: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10,
    borderWidth: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  btnStyle: {
    width: '40%',
  },
});

export default TodoPage;
