import * as React from 'react';
import * as Mocha from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import AppLayout, { styles } from 'app/layouts/app';

describe('layouts/app', () => {
	it('#render - without errors', () => {
		const component = shallow(<AppLayout />);

		expect(component).to.be.ok;
	});

	it('#render - the root element with class name `l-app`', () => {
		const component = shallow(<AppLayout />);
		const hasClass = component.first().hasClass(styles.lApp);

		expect(hasClass).to.be.true;
	});
});
