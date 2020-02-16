import React from 'react';
import {Provider} from 'react-redux';

import MainNavigation from './src/navigation';
import store from './src/state/store';

console.log(store);

function App() {
	return (
		<Provider store={store}>
			<MainNavigation />
		</Provider>
	);
}

export default App;
