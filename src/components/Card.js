import React from "react";
import likeSvg from "../images/like.svg";
import dislikeSvg from "../images/dislike.svg";
import deleteSvg from "../images/delete.svg";
import Button from "./buttons/Button";
import Gauge from "./Gauge";
import ToggleButton from "./buttons/ToggleButton";

// TODO Add proptypes, docs,
function Card(props) {
  return (
    <div className="flex justify-center shadow overflow-hidden content-center mb-2">
      <div className="flex flex-col">
        <h5 className="p-2 text-center text-mono text-xl text-overflow-hidden text-yellow-700 ">
          {props.title}
        </h5>
        <h2 className="p-0.5 px-2 text-center text-mono ">{props.category}</h2>
        <div className="w-3/4 m-1">
          <Gauge like={props.likes} dislike={props.disLikes}></Gauge>
        </div>

        {/* Like */}
        <div className="flex flex-wrap px-auto mt-4 mb-5">
          <ToggleButton
            likeSvg={likeSvg}
            dislikeSvg={dislikeSvg}
            handleLike={props.handleLike}
            handleDislike={props.handleDislike}
            likes={props.likes}
            disLikes={props.disLikes}
            id={props.id}
          />
          {/* <div className="flex-auto">
            <Button
              src={likeSvg}
              onClick={props.handleLike}
              count={props.likes}
            />
          </div> */}

          {/* Dislike */}
          {/* <div className="flex-auto">
            <Button
              src={dislikeSvg}
              onClick={props.handleDislike}
              count={props.disLikes}
            />
          </div> */}
          {/* Delete */}
          <div className="border">
            <Button src={deleteSvg} onClick={props.handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
