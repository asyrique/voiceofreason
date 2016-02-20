import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.jsx';

module.exports = class App extends React.Component {
  render() {
    return (<div>
              <Nav/>
              <div className="container">
              </div>
            </div>);
  }
};
