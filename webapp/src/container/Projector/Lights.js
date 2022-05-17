import React from "react";
import LightControl from "./LightControl";

function Lights(props) {
  return (
    <div className="lc">
      <input className="slider" type="range" />

      <LightControl />
    </div>
  );
}

export default Lights;
