import React, { Component } from 'react';
import './styles/footer.css'
import { NavLink } from 'react-router-dom'
import footerLinks from '../images/footer-links.svg'

class Footer extends Component {
  render() {
    const { currentUser } = this.props

    return (
      <div id='footer-container'>
        {Object.keys(currentUser).length === 0 ?
          <React.Fragment>
          <h1>Sign up to get started</h1>
          <div className='buttons'>
            <NavLink className='navlink' to='/login'>
              <button className='log-or-sign-in-footer'>Log In</button>
            </NavLink>
            <NavLink className='navlink' to='/signup'>
              <button className='log-or-sign-in-footer'>Sign Up</button>
            </NavLink>
          </div>
          </React.Fragment>
          :
          <React.Fragment>
          <h1>Get Started!</h1>
          <div className='buttons'>
            <NavLink className='navlink' to='/search'>
              <button className='log-or-sign-in-footer solo'>Find an event near you</button>
            </NavLink>
          </div>
          </React.Fragment>
        }
        <img className='footer-links' src={footerLinks} alt='footer-links'/>
      </div>
    );
  }
}

export default Footer
