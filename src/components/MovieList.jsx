import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="no-results">
        <p>No movies found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;