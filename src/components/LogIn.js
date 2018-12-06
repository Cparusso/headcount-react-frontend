import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom'

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
    if (this.props.jwt.length) {
      return <Redirect to='/home' />
    }

    return (
      <div className='contains-form'>
        <form className='form-container' onSubmit={(event) => this.logIn(event)} >
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <input className='log-or-sign-in-form' type="submit" value="Submit" />
        </form>
        <div className='under-form'>
          <NavLink className='log-or-sign-in-footer navlink' to='/signup'>
            <p>Don't have an account yet? Sign up!</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default LogIn
