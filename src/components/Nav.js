import React, { Component } from 'react'
import logoWithBackground from '../images/hc-icon-bg.svg'
import './styles/nav.css'

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='nav left'>
          <img id='logo-with-bg' src={logoWithBackground} alt='hc-icon' />
          <h1>headcount</h1>
        </div>
        <div className='nav right'>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </div>
      </div>
    );
  }
}

export default Nav;
