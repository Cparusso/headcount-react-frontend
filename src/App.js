import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Search from './components/Search'
import User from './components/User'
import Business from './components/Business'
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
      userEvents: [],
      usersEvents: [],
    }
  }

  fetchUsers = () => {
    fetch('http://localhost:4000/users/1')
    .then(resp => resp.json())
    .then(usersEvents => {
      this.setState({
        usersEvents: usersEvents.events
      })
    })
    // this.setState({
    //   usersEvents: [...this.state.usersEvents, newEvent]
    // }, () => console.log('%c state:', 'color: purple', this.state.usersEvents))
  }

  componentDidMount() {
    fetch('http://localhost:4000/events')
    .then(resp => resp.json())
    .then(allEvents => {
      this.setState({
        allEvents
      })
    })

    fetch('http://localhost:4000/users/1')
    .then(resp => resp.json())
    .then(usersEvents => {
      this.setState({
        usersEvents: usersEvents.events
      })
    })

    fetch('http://localhost:4000/user_events')
    .then(resp => resp.json())
    .then(userEvents => {
      this.setState({
        userEvents
      })
    })

    fetch('http://localhost:4000/business_events')
    .then(resp => resp.json())
    .then(businessEvents => {
      this.setState({
        businessEvents
      })
    })

    fetch('http://localhost:4000/businesses')
    .then(resp => resp.json())
    .then(businesses => {
      this.setState({
        businesses
      })
    })
  }

  render() {
    const { userEvents, allEvents, businessEvents, businesses, usersEvents } = this.state

    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/search' render={() => <Search fetchUsers={this.fetchUsers} presentPage='search' usersEvents={usersEvents} userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />} />
          <Route path='/user' render={() => <User presentPage='user' usersEvents={usersEvents} userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />} />
          <Route path='/business' render={() => <Business presentPage='business' usersEvents={usersEvents} userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />} /> />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
