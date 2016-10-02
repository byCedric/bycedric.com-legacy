import * as React from 'react';
import { render } from 'react-dom';

import AppLayout from 'app/layouts/app';

/**
 * Render the application into the `body > #app` element.
 */
render(<AppLayout />, document.getElementById('app'));
