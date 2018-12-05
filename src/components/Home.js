import React, { Component } from 'react';
import Banner from './Banner'
import HowItWorks from './HowItWorks'
import MissionSection from './MissionSection'
import Footer from './Footer'

class Home extends Component {
  render() {
    const { currentUser } = this.props

    return (
      <div>
        <Banner currentUser={currentUser} />
        <HowItWorks />
        <MissionSection />
        <Footer currentUser={currentUser} />
      </div>
    );
  }
}

export default Home;
