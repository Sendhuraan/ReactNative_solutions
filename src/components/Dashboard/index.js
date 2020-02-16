import React from 'react';
import {View, Text} from 'react-native';

import TodoForm from '../TodoForm';
import TodoItems from '../TodoItems';

import styles from './styles';

function Dashboard() {
	return (
		<View style={styles.container}>
			<Text>Dashboard Screen</Text>
			<TodoForm />
			<TodoItems />
		</View>
	);
}

export default Dashboard;
