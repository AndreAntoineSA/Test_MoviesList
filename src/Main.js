import React from "react";
import "./Main.css";

function Main(props) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex">{props.children}</div>
    </div>
  );
}

export default Main;
