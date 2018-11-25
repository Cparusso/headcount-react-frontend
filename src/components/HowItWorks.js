import React, { Component } from 'react'
import './styles/how-it-works.css'

import search from '../images/search-icon.svg'
import committed from '../images/committed.svg'
import repeat from '../images/repeat.svg'

class HowItWorks extends Component {
  render() {
    return (
      <div className='instructions'>
        <div className='instructionCard'>
          <div className='content'>
            <h2>Search</h2>
            <h4>Find an opportunity to help out at an organization near you</h4>
          </div>
          <div className='image'>
            <img src={search} alt='search-icon'/>
          </div>
        </div>
        <div className='instructionCard'>
          <div className='content'>
            <h2>Commit</h2>
            <h4>Commit to making a difference in your community</h4>
          </div>
          <div className='image'>
            <img src={committed} alt='committed-icon'/>
          </div>
        </div>
        <div className='instructionCard'>
          <div className='content'>
            <h2>Repeat</h2>
            <h4>Save your favorite organizations to be notified the next time they have an event</h4>
          </div>
          <div className='image'>
            <img src={repeat} alt='repeat-icon'/>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
