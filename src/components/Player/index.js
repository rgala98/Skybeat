import React from "react";
import Sidebar from "../Sidebar";

import "./player.css";
import Body from "../Body";
import Footer from "../Footer";

const Player = ({ spotify }) => {
  return (
    <div>
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body spotify={spotify} />
        </div>

        <Footer spotify={spotify} />
      </div>
    </div>
  );
};

export default Player;
