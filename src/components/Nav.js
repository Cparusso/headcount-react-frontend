import React, { Component } from 'react'
import logoWithBackground from '../images/hc-icon-bg.svg'
import { NavLink } from 'react-router-dom'
import './styles/nav.css'

class Nav extends Component {
  render() {
    const { currentUser } = this.props
    
    return (
      <div className='nav'>
        <div className='left'>
          <NavLink className='navlink' to='/home'>
            <div className='nav left'>
              <img id='logo-with-bg' src={logoWithBackground} alt='hc-icon' />
                <h1>headcount</h1>
            </div>
          </NavLink>
        </div>
        <div className='right'>
          {Object.keys(currentUser).length > 0 ? <NavLink className='navlink' to='/search'>Search</NavLink> : null }
          { Object.keys(currentUser).length > 0 ? <NavLink className='navlink' to='/user'>Profile</NavLink> : null }
          <NavLink className='navlink' to='/about'>About</NavLink>
          <NavLink className='navlink' to='/contact'>Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
