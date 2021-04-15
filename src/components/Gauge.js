import React from "react";

function Gauge(props) {
  const calculatePercent = (a, b) => {
    return (Number(a) / Number(b)) * 100;
  };
  let widthLike = calculatePercent(props.like, props.dislike);
  let widthDislike = calculatePercent(props.dislike, props.like);

  return (
    <div className="w-full flex">
      <div
        className="float-left bg-red-100 pl-4"
        style={{ width: widthLike + "%" }}
      >
        like
      </div>
      <div
        class="float-left w-1/5 bg-blue-100 pl-4"
        style={{ width: widthDislike + "%" }}
      >
        dislike
      </div>
    </div>
  );
}

export default Gauge;
