import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SignUp extends Component {

  signup = (event) => {
    event.preventDefault()

    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name: event.target.name.value,
          username: event.target.username.value,
          password: event.target.password.value,
          bio: event.target.bio.value,
          imageUrl: event.target.imageUrl.value
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
        <form onSubmit={(event) => this.signup(event)} >
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <label>
            Bio:
            <input type="text" name="bio" />
          </label>
          <label>
            imageUrl:
            <input type="text" name="imageUrl" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Already have an account?</p>
        <NavLink className='log-or-sign-in-footer navlink' to='/login'>Log in!</NavLink>
      </div>
    );
  }
}

export default SignUp
