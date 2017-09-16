import { h, render } from 'preact';

import Interface from './Interface.jsx';

const mount = document.createElement('div');
document.body.appendChild(mount);

render(<Interface/>, mount);
