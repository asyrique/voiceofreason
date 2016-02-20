import React from 'react';

module.exports = class Nav extends React.Component {
  render () {
    return (<nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar=header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Voice of Reason</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">About</a></li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Log In</a></li>
              <li><a href="#">Sign up</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
  }
}
