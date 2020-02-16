import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

function AppTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
}

export default AppTabs;
