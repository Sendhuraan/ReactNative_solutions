import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './styles';

function Profile(props) {
	const {navigation} = props;

	return (
		<View style={styles.container}>
			<Text>Profile Screen</Text>
			<Button
				title="Go to Login"
				onPress={() => {
					navigation.navigate('Login');
				}}
			/>
		</View>
	);
}

export default Profile;
