import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           <h2>Hellow World React</h2>
          </p>
         
        </header>
      </div>
    );
  }
}

export default Header;
