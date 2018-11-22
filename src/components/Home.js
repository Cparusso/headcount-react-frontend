import React, { Component } from 'react';
import Nav from '../components/Nav'
import Banner from '../components/Banner'

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
      </div>
    );
  }
}

export default Home;
