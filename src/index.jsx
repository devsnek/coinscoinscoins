import { h, render } from 'preact';

import Interface from './Interface';

const mount = document.createElement('div');
document.body.appendChild(mount);

render(<Interface/>, mount);
