import React, { Component } from 'react';
import Banner from './Banner'
import HowItWorks from './HowItWorks'
import MissionSection from './MissionSection'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <HowItWorks />
        <MissionSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
