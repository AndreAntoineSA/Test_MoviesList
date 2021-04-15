import React from "react";

function Button(props) {
  return (
    <div className="pt-2 w-10 h-10 mb-5">
      <button
        className="w-10  overflow-hidden  focus:outline-none h-15 "
        onClick={props.onClick}
        disabled={props.isOnOFF}
      >
        <img src={props.src} alt={props.label}></img>
        <h5 className="">{props.count}</h5>
      </button>
    </div>
  );
}

export default Button;
