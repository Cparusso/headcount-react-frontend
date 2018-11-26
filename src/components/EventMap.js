import React, { Component } from 'react'
import './styles/event-map.css'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import icon from '../images/hc-icon.svg'


let myIcon = L.icon({
  iconUrl: icon,
  iconSize: [38, 95],
  iconAnchor: [19, 95],
  popupAnchor: [0, -74],
});

class EventMap extends Component {
  state = {
    location: {
      lat: 10.705373,
      lng: -34.013874
    },
    haveUserLocation: false,
    zoom: 1.3,
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
              <Marker position={position} icon={myIcon} >
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
