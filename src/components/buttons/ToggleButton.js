import React, { useState } from "react";

function ToggleButton(props) {
  const [isOnLike, setIsOnLike] = useState(false);
  const [isOnDislike, setIsOnDislike] = useState(false);

  const handleClickLike = () => {
    setIsOnLike(true);
    setIsOnDislike(false);
    props.handleLike(props.id, props.likes, props.disLikes);
  };
  const handleClickDislike = () => {
    setIsOnLike(false);
    setIsOnDislike(true);
    props.handleDislike(props.id, props.likes, props.disLikes);
  };

  return (
    <div className="w-20 h-10 mb-5">
      <div className="flex">
        <button
          className={`w-10 overflow-hidden border focus:outline-none h-15 ${
            isOnLike && "bg-gray-300"
          }`}
          disabled={isOnLike}
          onClick={handleClickLike}
        >
          <img src={props.likeSvg} alt={props.likeSvg}></img>
          <h5 className="">{props.likes}</h5>
        </button>
        <button
          className={`w-10 overflow-hidden border focus:outline-none h-15 ${
            isOnDislike && "bg-gray-300"
          }`}
          disabled={isOnDislike}
          onClick={handleClickDislike}
        >
          <img src={props.dislikeSvg} alt={props.dislikeSvg}></img>
          <h5 className="">{props.disLikes}</h5>
        </button>
      </div>
    </div>
  );
}

export default ToggleButton;
