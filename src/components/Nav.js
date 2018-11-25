import React, { Component } from 'react'
import logoWithBackground from '../images/hc-icon-bg.svg'
import { NavLink } from 'react-router-dom'
import './styles/nav.css'

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <NavLink className='navlink' to='/'>
          <div className='nav left'>
            <img id='logo-with-bg' src={logoWithBackground} alt='hc-icon' />
              <h1>headcount</h1>
          </div>
        </NavLink>
        <div className='nav right'>
          <NavLink className='navlink' to='/search'>Search</NavLink>
          <NavLink className='navlink' to='/about'>About</NavLink>
          <NavLink className='navlink' to='/'>Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
