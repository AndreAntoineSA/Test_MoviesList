import React, { useState, useEffect } from "react";

function Gauge(props) {
  const calculatePercent = (a, b) => {
    return (Number(a) / Number(b)) * 100;
  };
  const [styleDislike, setStyleDislike] = useState({});
  const [styleLike, setStyleLike] = useState({});

  let widthLike = calculatePercent(props.like, props.dislike);
  let widthDislike = calculatePercent(props.dislike, props.like);
  useEffect(() => {
    if (widthDislike !== 0) {
      setStyleDislike({ width: widthDislike + "%" });
    } else {
      setStyleDislike({ text: "" });
    }
  }, [widthDislike]);
  useEffect(() => {
    if (widthLike !== 0) {
      setStyleLike({ width: widthLike + "%" });
    } else {
      setStyleLike({ text: "" });
    }
  }, [widthLike]);
  return (
    <div className="w-full h-1 flex">
      <div
        className={`float-left pl-4 ${
          widthLike === 0 ? "bg-red-100" : "bg-blue-100"
        }`}
        style={styleLike}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div
        class={`float-left  pl-4 ${
          widthDislike === 0 ? "bg-blue-100 " : "bg-red-100"
        }`}
        style={styleDislike}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default Gauge;
