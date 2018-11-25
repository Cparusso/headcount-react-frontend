import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import './styles/user.css'

class User extends Component {
  render() {
    return (
      <div className='user-container'>
        <h1>CHARLIE</h1>
        <UpcomingEvents />
      </div>
    );
  }
}

export default User;
