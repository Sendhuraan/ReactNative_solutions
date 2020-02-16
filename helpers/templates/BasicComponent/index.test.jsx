import React from 'react';
import ComponentName from '../ComponentName';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
	const tree = renderer.create(<ComponentName />).toJSON();
	expect(tree).toMatchSnapshot();
});
