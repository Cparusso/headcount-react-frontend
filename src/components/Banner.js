import React, { Component } from 'react'
import './styles/banner.css'
import { NavLink } from 'react-router-dom'

class Banner extends Component {

  render() {
    return (
      <div>
        <div className='banner-container'>
          <h1>headcount</h1>
          <h4>Helping you help others</h4>
          <div className='banner-buttons'>
            <NavLink className='navlink' to='/user'>
              <button className='log-or-sign-in'>Log In</button>
            </NavLink>
            <button className='log-or-sign-in'>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
