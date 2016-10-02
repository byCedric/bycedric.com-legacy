import * as React from 'react';
import { render } from 'react-dom';

import MyComponent from 'app/components/my';

/**
 * Render the application into the `body > #app` element.
 */
render(<MyComponent />, document.getElementById('app'));
