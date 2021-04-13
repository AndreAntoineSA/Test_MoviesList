import React from "react";
import "./Main.css";

function Main(props) {
  return (
    <div>
      <h1 className="Title">Movies List Test</h1>
      <div>{props.children}</div>
    </div>
  );
}

export default Main;
