import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import ReactMapboxGl, { Marker, Popup } from "react-mapbox-gl";
import apiHandler from "../api/apiHandler";
import markerImg from "../img/marker.png";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

//<Map style="mapbox://styles/mapbox/streets-v8"/>

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 2.351027,
      lat: 48.855,
      zoom: 11,
      item: undefined,
      items: [],
    };
  }

  componentDidMount() {
    // const map = new mapboxgl.Map({
    //   container: this.mapContainer,
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [this.state.lng, this.state.lat],
    //   zoom: this.state.zoom,
    // });

    apiHandler
      .getItems()
      .then((apiRes) => {
        this.setState({ items: apiRes });
      })
      .catch((apiError) => console.log(apiError));
  }

  // markerClick = (item) => {
  // this.setState({item})
  // }

  render() {
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v8"
          containerStyle={{
            height: "100vh",
            width: "100vw",
          }}
          center={[2.351027, 48.855]}
        >
          {this.state.items.map((marker, _id) => (
            <Marker
              key={marker._id}
              coordinates={marker.location.coordinates}
              anchor="bottom"
              /* onClick={() => {
                this.markerClick(marker._id);
              }} */
            >
              <img src={markerImg} style={{ width: 100, height: 100 }} />
            </Marker>
          ))}
        </Map>
      </div>
    );
  }
}

export default Home;
