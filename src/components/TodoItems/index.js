import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text} from 'react-native';

import {
  getTodos,
  toggleTodo,
  deleteTodo
} from '../../state/actions/todo-actions';

import styles from './styles';

function TodoItems(props) {
  const {getTodos, todos} = props;

  useEffect(function fetchTodosFromAPI() {
    getTodos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, {getTodos, toggleTodo, deleteTodo})(
  TodoItems
);
