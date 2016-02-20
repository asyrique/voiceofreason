import App from './app.jsx';
import Nav from './nav.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
const Base = new Firebase('https://voiceofreason.firebaseio.com/');

ReactDOM.render(<App/>, document.getElementById('root'));
