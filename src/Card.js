import React from "react";
import likeSvg from "../src/images/like.svg";
import dislikeSvg from "../src/images/dislike.svg";
import deleteSvg from "../src/images/delete.svg";
import Button from "../src/components/buttons/Button";
// import Gauge from "../src/components/Gauge";
import "../src/style/Card.css";

// TODO Add proptypes, docs,
function Card(props) {
  return (
    <div className="flex justify-center shadow overflow-hidden content-center">
      <div>
        <h5 className="p-2 text-center text-mono text-xl text-yellow-700">
          {props.title}
        </h5>
        <h2 className="p-0.5 px-2 text-mono ">{props.category}</h2>
        {/* Graph */}
        {/* <Gauge></Gauge> */}
        {/* Like */}
        <div className="flex">
          <Button
            src={likeSvg}
            onClick={props.handleLike}
            count={props.likes}
          />
          {/* Dislike */}
          <Button
            src={dislikeSvg}
            onClick={props.handleDislike}
            count={props.disLikes}
          />
          {/* Delete */}
          <Button src={deleteSvg} onClick={props.handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Card;
