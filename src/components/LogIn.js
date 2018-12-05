import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class LogIn extends Component {
  logIn = (event) => {
    event.preventDefault()

    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: event.target.username.value,
          password: event.target.password.value,
        }
      })
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.user) {
        window.localStorage.setItem('jwt', resp.jwt)
        this.props.signIn(resp.jwt, resp.user)
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.logIn(event)} >
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="text" name="password" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Don't have an account yet?</p>
        <NavLink className='log-or-sign-in-footer navlink' to='/signup'>Sign up!</NavLink>
      </div>
    );
  }
}

export default LogIn
