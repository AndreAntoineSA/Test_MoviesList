import React, { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

function CardList(props) {
  const [movieList, setMovieList] = useState("" || props.movies);
  const [category, setCategory] = useState("");
  const movieCategories = [
    ...new Set(props.movies.map((movieCategory) => movieCategory.category)),
  ];

  function handleChange(e) {
    setCategory(e.target.value);
    let categoryList = props.movies.filter((element) => {
      return element.category === category;
    });
    setMovieList(categoryList.length > 0 ? categoryList : props.movies);
  }
  return (
    <div>
      {/* Select Option to filter by category*/}
      <div>
        <label htmlFor="category-select">Choose a category:</label>

        <select
          name="movie-categories"
          id="category-select"
          value={category}
          onChange={handleChange}
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
      </div>

      {/* Display all the the movies as a list of cards*/}
      {movieList.map((child, index) => {
        return (
          <Card
            key={index}
            title={child.title}
            category={child.category}
            likes={child.likes}
            disLikes={child.dislikes}
          ></Card>
        );
      })}
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
