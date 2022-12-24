import React from "react";
import HomeBody from "../../components/home-body/home-body";
import HomeRight from "../../components/home-right/home-right";

import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="home-left">
        <HomeBody />
      </div>
      <div className="home-right">
        <HomeRight />
      </div>
    </div>
  );
};

export default HomePage;
