import * as React from 'react';
import * as Mocha from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ToolbarComponent, { styles } from 'app/components/toolbar';

describe('components/toolbar', () => {
	it('#render - without errors', () => {
		const component = shallow(<ToolbarComponent />);

		expect(component).to.be.ok;
	});

	it('#render - the root element with class name `c-toolbar`', () => {
		const component = shallow(<ToolbarComponent />);
		const hasClass = component.first().hasClass(styles.cToolbar);

		expect(hasClass).to.be.true;
	});
});
