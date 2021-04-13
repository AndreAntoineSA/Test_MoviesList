import React from "react";
import like from "./like.svg";

function Card(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.category}</h3>
      <div>
        <button>
          <img src={like} alt="like"></img>
        </button>
        <h5>{props.likes}</h5>
        {props.likes !== 0 && (
          <span>{props.likes === 1 ? "Like" : "Likes"}</span>
        )}
      </div>
      <div className="flex">
        <button>
          <img src={like} alt="like"></img>
        </button>
        <h5>{props.disLikes}</h5>
        {props.disLikes !== 0 && (
          <span>{props.disLikes === 1 ? "Dislike" : "Dislikes"}</span>
        )}
      </div>
      <button>Delete</button>
    </div>
  );
}

export default Card;
