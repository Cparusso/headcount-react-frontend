import React, { Component } from 'react';
import './styles/footer.css'
import { NavLink } from 'react-router-dom'
import footerLinks from '../images/footer-links.svg'

class Footer extends Component {
  render() {
    return (
      <div id='footer-container'>
        <h1>Sign up to get started</h1>
        <div className='buttons'>
          <NavLink className='navlink' to='/user'>
            <button className='log-or-sign-in-footer'>Log In</button>
          </NavLink>
          <button className='log-or-sign-in-footer'>Sign Up</button>
        </div>
        <img className='footer-links' src={footerLinks} />
      </div>
    );
  }
}

export default Footer
