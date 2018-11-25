import React, { Component } from 'react'
import './styles/event-map.css'

import iconPin from '../images/hc-icon.svg'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

class EventMap extends Component {
  state = {
    location: {
      lat: 40.705373,
      lng: -74.013874
    },
    haveUserLocation: false,
    zoom: 1,
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUserLocation: true,
        zoom: 15
      })
    }, () => {
      fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then(location => {
        this.setState({
          location: {
            lat: location.latitude,
            lng: location.longitude
          },
          haveUserLocation: true,
          zoom: 13
        })
      })
    })
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng]

    return (
      <div>
        <Map className='map' center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          {
            this.state.haveUserLocation ?
              <Marker position={position} >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            : ''
          }
        </Map>
      </div>
    );
  }
}

export default EventMap;
