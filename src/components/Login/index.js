import React from 'react';
import {View, TextInput, Button} from 'react-native';

import styles from './styles';

function Login(props) {
	const {navigation} = props;

	return (
		<View style={styles.container}>
			<TextInput placeholder="Username" />
			<TextInput placeholder="Password" />
			<Button
				title="Go to Dashboard"
				onPress={() => {
					navigation.navigate('AppTabs');
				}}
			/>
		</View>
	);
}

export default Login;
