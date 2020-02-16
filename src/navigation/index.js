import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

function MainNavigation() {
	return (
		<NavigationContainer>
			<MainStack />
		</NavigationContainer>
	);
}

export default MainNavigation;
