import "here-js-api/scripts/mapsjs-core";
import "here-js-api/scripts/mapsjs-service";
import "here-js-api/scripts/mapsjs-ui";
import "here-js-api/scripts/mapsjs-mapevents";
import "here-js-api/scripts/mapsjs-clustering";

import React from "react";

const { REACT_APP_API_KEY } = process.env;

const Map = () => {
  return <div id="map"></div>;
};

export default Map;
