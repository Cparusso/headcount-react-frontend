import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Search from './components/Search'
import User from './components/User'
import Business from './components/Business'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allEvents: [],
      businessEvents: [],
      businesses: [],
      usersEvents: [],
      currentUser: {},
      currentBusiness: {},
      jwt: '',
      highlight: {},
    }
  }

  signIn = (jwt, user) => {
    this.getSessionData()
    this.setState({
      jwt: jwt,
      currentUser: user
    }, () => {
      this.fetchUsers(this.state.currentUser)
      this.getSessionData()
    })
  }

  fetchUsers = (currentUser) => {
    console.log(currentUser)
    fetch(`http://localhost:4000/users/${currentUser.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.state.jwt}`
      },
    })
    .then(resp => resp.json())
    .then(usersEvents => {
      if (usersEvents) {
        this.setState({
          usersEvents: usersEvents.events
        })
      }
    })
  }

  getSessionData = () => {
    fetch('http://localhost:4000/events', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.state.jwt}`
      },
    })
    .then(resp => resp.json())
    .then(allEvents => {
      this.setState({
        allEvents
      })
    })

    fetch('http://localhost:4000/business_events', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.state.jwt}`
      },
    })
    .then(resp => resp.json())
    .then(businessEvents => {
      this.setState({
        businessEvents
      })
    })

    fetch('http://localhost:4000/businesses', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.state.jwt}`
      },
    })
    .then(resp => resp.json())
    .then(businesses => {
      this.setState({
        businesses
      }, () => console.log(this.state.businesses))
    })
  }

  updateCurrentBusiness = (currentBusiness) => {
    this.setState({
      currentBusiness
    })
  }

    setHighlight = (highlight) => {
      this.setState({
        highlight
      }, () => console.log(this.state.highlight))
    }

  render() {
    const { allEvents, businessEvents, businesses, usersEvents, currentUser, jwt, currentBusiness, highlight } = this.state

    return (
      <BrowserRouter>
        <Nav currentUser={currentUser} />
        <Switch>
          <Route path='/home' render={() => <Home currentUser={currentUser} />} />
          <Route path='/search' render={() => <Search highlight={highlight} setHighlight={this.setHighlight} updateCurrentBusiness={this.updateCurrentBusiness} currentUser={currentUser} fetchUsers={this.fetchUsers} presentPage='search' usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} jwt={jwt} />} />
          <Route path='/user' render={() => <User highlight={highlight} setHighlight={this.setHighlight} updateCurrentBusiness={this.updateCurrentBusiness} currentUser={currentUser} jwt={jwt} fetchUsers={this.fetchUsers} presentPage='user' usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />} />
          <Route path='/business' render={() => <Business highlight={highlight} setHighlight={this.setHighlight} currentBusiness={currentBusiness} updateCurrentBusiness={this.updateCurrentBusiness} fetchUsers={this.fetchUsers} presentPage='business' usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} currentUser={currentUser} />} />
          <Route path='/login' render={() => <LogIn signIn={this.signIn} />} />
          <Route path='/signup' render={() => <SignUp signIn={this.signIn} />} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
