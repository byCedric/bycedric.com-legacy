import * as React from 'react';
import * as Mocha from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MyComponent, { styles } from 'app/components/my';

describe('components/my', () => {
	it('#render - without errors', () => {
		const component = shallow(<MyComponent />);

		expect(component).to.be.ok;
	});

	it('#render - the root element with class name `c-my`', () => {
		const component = shallow(<MyComponent />);
		const hasClass = component.first().hasClass(styles.cMy);

		expect(hasClass).to.be.true;
	});
});
