import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import Player from './containers/Player';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Player/>, document.getElementById('root'));
registerServiceWorker();
