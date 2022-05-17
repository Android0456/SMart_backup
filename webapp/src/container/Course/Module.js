import React from "react";
import TheModule from "./TheModule";

function Module(props) {
  return (
    <div>
      {props.modules.map(function (item) {
        return (
          <TheModule
            module={item.module}
            topic={item.topic}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Module;
