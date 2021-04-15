import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import next from "../images/next.svg";
import previous from "../images/previous.svg";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";
import movies from "../lib/movies";

function CardList() {
  const [defaultState, setDefaultState] = useState(movies);
  const [movieList, setMovieList] = useState("" || defaultState);
  const [category, setCategory] = useState("");
  const [layout, setLayout] = useState(12);
  const [visible, setVisible] = useState(0);
  let pagination = Math.ceil(movieList.length / layout);

  const movieCategories = [
    ...new Set(defaultState.map((movieCategory) => movieCategory.category)),
  ];

  useEffect(() => {
    let categoryList = defaultState.filter((element) => {
      return element.category === category;
    });
    setMovieList(categoryList.length > 0 ? categoryList : defaultState);
  }, [category, defaultState]);

  // Function to update like count for a card
  function handleLike(input, like, dislike) {
    let index = defaultState.findIndex((element) => element.id === input);
    const newArray = [...defaultState];
    newArray[index] = {
      ...newArray[index],
      likes: Number(like) + Number(1),
      dislikes: `${
        dislike !== 0 ? Number(Number(dislike) - Number(1)) : Number(0)
      }`,
    };
    setDefaultState(newArray);
  }
  // Function to update dislike count for a card
  function handleDislike(input, like, dislike) {
    let index = defaultState.findIndex((element) => element.id === input);
    const newArray = [...defaultState];
    newArray[index] = {
      ...newArray[index],
      likes: `${like !== 0 ? Number(Number(like) - Number(1)) : Number(0)}`,
      dislikes: Number(dislike) + Number(1),
    };
    setDefaultState(newArray);
  }
  // Function to delete a movie card
  function handleDelete(input) {
    let index = defaultState.findIndex((element) => element.id === input);
    let newArray = [...defaultState];
    newArray.splice(index, 1);
    setDefaultState(newArray);
  }
  return (
    <div className="container mx-auto flex flex-col justify-center">
      {/* Select Option to filter by category*/}
      <div className="my-4">
        <label htmlFor="category-select">Choose a category:</label>
        <select
          name="movie-categories"
          id="category-select"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">--Please choose an option--</option>
          {movieCategories.map((child, index) => {
            return (
              <option key={index} value={child}>
                {child}
              </option>
            );
          })}
        </select>
        {/* Layout */}
        <div>
          <Pagination
            right={plus}
            disabledLeft={layout ? (layout <= 4 ? true : false) : false}
            disabledRight={layout ? (layout >= 12 ? true : false) : false}
            onClickRight={() => {
              setLayout(layout + 4);
            }}
            left={minus}
            onClickLeft={() => {
              setLayout(layout - 4);
            }}
            value={layout}
          >
            <span className="mt-1 px-1">
              {layout}x{layout}&nbsp;Layout
            </span>
          </Pagination>
        </div>
      </div>

      {/* Display all the the movies as a list of cards*/}
      <div
        className={`m-2 grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${
          layout / 2
        } flex-auto gap-2`}
      >
        {movieList.slice(visible, visible + layout).map((child, index) => {
          return (
            <div>
              <Card
                key={index}
                title={child.title}
                category={child.category}
                likes={child.likes}
                disLikes={child.dislikes}
                id={child.id}
                handleDelete={() => {
                  handleDelete(child.id);
                }}
                handleLike={() => {
                  handleLike(child.id, child.likes, child.dislikes);
                }}
                handleDislike={() => {
                  handleDislike(child.id, child.likes, child.dislikes);
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Page */}
      {pagination > 1 && (
        <Pagination
          right={next}
          left={previous}
          disabledLeft={(pagination === 1 && true) || (visible === 0 && true)}
          disabledRight={
            (pagination === 1 && true) ||
            (pagination === pagination % visible && true)
          }
          onClickLeft={() => {
            setVisible(visible - layout);
          }}
          onClickRight={() => {
            setVisible(visible + layout);
          }}
        />
      )}
    </div>
  );
}

export default CardList;
