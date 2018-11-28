import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Search from './components/Search'
import User from './components/User'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

class App extends Component {
  state = {
    allEvents: [],
    businessEvents: [],
    businesses: [],
    userEvents: [],
  }

  componentDidMount() {
    fetch('http://localhost:4000/events')
    .then(resp => resp.json())
    .then(allEvents => {
      this.setState({
        allEvents
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
    const { userEvents, allEvents, businessEvents, businesses } = this.state

    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/search' render={() => <Search presentPage='search' userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />} />
          <Route path='/user' render={() => <User presentPage='user' userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
