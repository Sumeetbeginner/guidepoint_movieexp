import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  const isMovieFavorite = isFavorite(movie.imdbID);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent the click event from bubbling up to the Link component

    if (isMovieFavorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  const posterUrl =
    movie.Poster !== "N/A" ? movie.Poster : "https://cdn.displate.com/artwork/270x380/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <div className="movie-poster-container">
        <img
          src={posterUrl}
          alt={`${movie.Title} poster`}
          className="movie-poster"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://cdn.displate.com/artwork/270x380/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"; 
          }}
        />

        <button
          className={`favorite-button ${isMovieFavorite ? "favorited" : ""}`}
          onClick={handleFavoriteClick}
          aria-label={
            isMovieFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isMovieFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
