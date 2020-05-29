import "here-js-api/scripts/mapsjs-core";
import "here-js-api/scripts/mapsjs-service";
import "here-js-api/scripts/mapsjs-ui";
import "here-js-api/scripts/mapsjs-mapevents";
import "here-js-api/scripts/mapsjs-clustering";

import React from "react";
import { API_KEY } from "../env/.env";

const Map = () => {
  console.log(API_KEY);
  return <div id="map"></div>;
};

export default Map;
