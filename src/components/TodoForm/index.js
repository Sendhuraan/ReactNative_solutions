import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, TextInput} from 'react-native';

import {addTodo} from '../../state/actions/todo-actions';

import styles from './styles';

class TodoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todo: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(text) {
		this.setState({
			todo: text
		});
	}

	handleSubmit() {
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: ''
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="Type to enter todo"
					value={this.state.todo}
					onChangeText={this.handleChange}
				/>
				<Button onPress={this.handleSubmit} title="Add Todo"></Button>
			</View>
		);
	}
}

export default connect(null, {addTodo})(TodoForm);
