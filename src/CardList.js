import React, { useState, useEffect } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import Pagination from "../src/components/Pagination";
import next from "../src/images/next.svg";
import previous from "../src/images/previous.svg";
import plus from "../src/images/plus.svg";
import minus from "../src/images/minus.svg";

function CardList(props) {
  const [defaultState, setDefaultState] = useState(props.movies);
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
  function handleDelete(input) {
    let index = defaultState.findIndex((element) => element.id === input);
    let newArray = [...defaultState];
    newArray.splice(index, 1);
    setDefaultState(newArray);
  }
  function showMore() {
    setVisible((value) => value + 3);
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
        <div className="">
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
            </span>{" "}
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
          // disabledLeft={visible ? (visible <= 1 ? true : false) : false}
          // disabledRight={
          //   visible ? (visible === pagination ? true : false) : false
          // }
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
        >
          {/* <span>
            {pagination}&nbsp;{visible}{" "}
            {pagination % visible ? pagination % visible : 0}
          </span> */}
        </Pagination>
      )}
    </div>
  );
}

CardList.propTypes = {
  movies: PropTypes.array.isRequired,
};

CardList.defaultProps = {
  movies: [
    {
      id: "1",
      title: "Oceans 8",
      category: "Comedy",
      likes: 4,
      dislikes: 1,
    },
    {
      id: "2",
      title: "Midnight Sun",
      category: "Comedy",
      likes: 2,
      dislikes: 0,
    },
    {
      id: "3",
      title: "Les indestructibles 2",
      category: "Animation",
      likes: 3,
      dislikes: 1,
    },
    {
      id: "4",
      title: "Sans un bruit",
      category: "Thriller",
      likes: 6,
      dislikes: 6,
    },
    {
      id: "5",
      title: "Creed II",
      category: "Drame",
      likes: 16,
      dislikes: 2,
    },
    {
      id: "6",
      title: "Pulp Fiction",
      category: "Thriller",
      likes: 11,
      dislikes: 3,
    },
    {
      id: "7",
      title: "Pulp Fiction",
      category: "Thriller",
      likes: 12333,
      dislikes: 32,
    },
    {
      id: "8",
      title: "Seven",
      category: "Thriller",
      likes: 2,
      dislikes: 1,
    },
    {
      id: "9",
      title: "Inception",
      category: "Thriller",
      likes: 2,
      dislikes: 1,
    },
    {
      id: "10",
      title: "Gone Girl",
      category: "Thriller",
      likes: 22,
      dislikes: 12,
    },
  ],
};
export default CardList;
