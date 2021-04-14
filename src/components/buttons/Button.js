import React from "react";

function Button(props) {
  return (
    <div className="w-20 h-40 space-y-5 p-5">
      <button
        className="w-10 overflow-hidden h-15 "
        onClick={props.onClick}
        disabled={props.isOnOFF}
      >
        <img
          src={props.src}
          alt={props.label}
        ></img>
        <h5 className="">{props.count}</h5>
      </button>
    </div>
  );
}

export default Button;
