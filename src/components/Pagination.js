import React from "react";

function Pagination(props) {
  return (
    <div className="flex justify-center">
      <span class="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          type="button"
          onClick={props.onClickLeft}
          disabled={props.disabledLeft}
          class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-700 focus:border-yellow-700"
        >
          <img className="w-4 m-2" src={props.left} alt="previous" />
        </button>
        {props.children}
        <button
          type="button"
          onClick={props.onClickRight}
          disabled={props.disabledRight}
          class="-ml-px relative inline-flex  items-center  rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-yellow-700 focus:border-yellow-700"
        >
          <img className="w-4 m-2" src={props.right} alt="next" />
        </button>
      </span>
    </div>
  );
}

export default Pagination;
