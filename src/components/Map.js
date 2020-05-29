// import "here-js-api/scripts/mapsjs-core";
// import "here-js-api/scripts/mapsjs-service";
// import "here-js-api/scripts/mapsjs-ui";
// import "here-js-api/scripts/mapsjs-mapevents";
// import "here-js-api/scripts/mapsjs-clustering";
import React, { Component } from "react";

const { REACT_APP_API_KEY } = process.env;

export default class Map extends Component {
  mapRef = React.createRef();

  state = {
    // The map instance to use during cleanup
    map: null,
  };

  componentDidMount() {
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: REACT_APP_API_KEY,
    });

    const defaultLayers = platform.createDefaultLayers();

    // Create an instance of the map
    const map = new H.Map(
      this.mapRef.current,
      defaultLayers.vector.normal.map,
      {
        // This map is centered over Toronto
        center: { lat: 43.653908, lng: -79.384293 },
        zoom: 8,
        pixelRatio: window.devicePixelRatio || 1,
      }
    );

    this.setState({ map });
  }

  componentWillUnmount() {
    // Cleanup after the map to avoid memory leaks when this component exits the page
    this.state.map.dispose();
  }

  render() {
    // Set a height on the map so it will display
    return (
      <div ref={this.mapRef} style={{ height: "768px", width: "375px" }} />
    );
  }
}
