import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../components/Login';
import AppTabs from './AppTabs';

const Stack = createStackNavigator();

function MainStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="AppTabs" component={AppTabs} />
		</Stack.Navigator>
	);
}

export default MainStack;
