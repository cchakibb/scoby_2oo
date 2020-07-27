import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 2.351027, 
      lat: 48.855,
      zoom: 11.7
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div style={{position: "absolute", top: "170px", right: "0", left: "0",
bottom: "0", zIndex:"0"}} ref={el => this.mapContainer = el} />
        <h1>MAPBOX MAP HERE</h1>
        <p>On home /</p>
      </div>
    )
  }
}

export default Home
