import React from "react";
import { Link } from "react-router-dom";
import Map from "../Map";

const Home = () => {
  return (
    <div className="home-page">
      <input
        type="text"
        className="home-page__search-bar"
        placeholder="Search Keywords"
      />
      <Map />
      <Link to="/preview">
        <button className="home-page__nearby-deals">
          Nearby Go Feed Me Deals
        </button>
      </Link>
    </div>
  );
};

export default Home;
