import React, { Component } from 'react'
import './styles/banner.css'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class Banner extends Component {
  state = {
    lat: 40.705373,
    lng: -74.013874,
    zoom: 16,
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      <div className='banner-container'>
        <h1>headcount</h1>
        <h4>Helping you help others</h4>
        <div className='banner-buttons'>
          <button className='log-or-sign-in'>Log In</button>
          <button className='log-or-sign-in'>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Banner;
