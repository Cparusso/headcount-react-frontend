import React, { Component } from 'react'
import './styles/banner.css'
import { NavLink } from 'react-router-dom'

class Banner extends Component {

  render() {
    const { currentUser } = this.props

    return (
      <div className='image-overlay'>
        <div className='banner-container'>
          <h1>headcount</h1>
          <h4>Helping you help others</h4>
          {Object.keys(currentUser).length === 0 ?
            <div className='banner-buttons'>
              <NavLink className='navlink' to='/login'>
                <button className='log-or-sign-in'>Log In</button>
              </NavLink>
              <NavLink className='navlink' to='/signup'>
                <button className='log-or-sign-in'>Sign Up</button>
              </NavLink>
            </div>
            :
            <h4 className='welcome-message' >Welcome back, {currentUser.name}!</h4>
          }
        </div>
      </div>
    );
  }
}

export default Banner;
