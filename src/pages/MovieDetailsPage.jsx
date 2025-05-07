import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const API_KEY = '2ce912f'; // Replace with your actual API key
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error || 'Movie details not found');
        }
      } catch (err) {
        setError('Failed to fetch movie details. Please try again later.');
        console.error('Error fetching movie details:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMovieDetails();
  }, [id]);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleFavoriteToggle = () => {
    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster
      });
    }
  };
  
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading movie details...</p>
      </div>
    );
  }
  
  if (error || !movie) {
    return (
      <div className="error-container">
        <p className="error-message">{error || 'Movie not found'}</p>
        <button onClick={handleGoBack} className="back-button">Go Back</button>
      </div>
    );
  }
  
  const isMovieFavorite = isFavorite(movie.imdbID);
  
  return (
    <div className="movie-details-page">
      <button onClick={handleGoBack} className="back-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      
      <div className="movie-details-container">
        <div className="movie-poster-section">
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.png'} 
            alt={`${movie.Title} poster`} 
            className="movie-detail-poster"
          />
          <button 
            className={`favorite-button2 detail-favorite ${isMovieFavorite ? 'favorited' : ''}`}
            onClick={handleFavoriteToggle}
            aria-label={isMovieFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <svg viewBox="0 0 24 24" fill={isMovieFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {isMovieFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
        
        <div className="movie-info-section">
          <h1 className="movie-title">{movie.Title} <span className="movie-year">({movie.Year})</span></h1>
          
          <div className="movie-meta">
            <span className="movie-rating">{movie.Rated}</span>
            <span className="movie-runtime">{movie.Runtime}</span>
            <span className="movie-genre">{movie.Genre}</span>
            <span className="movie-released">Released: {movie.Released}</span>
          </div>
          
          <div className="movie-ratings">
            {movie.Ratings && movie.Ratings.map((rating, index) => (
              <div key={index} className="rating-item">
                <span className="rating-source">{rating.Source}:</span>
                <span className="rating-value">{rating.Value}</span>
              </div>
            ))}
          </div>
          
          <div className="movie-plot">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>
          
          <div className="movie-credits">
            <div className="credit-item">
              <h3>Director</h3>
              <p>{movie.Director}</p>
            </div>
            
            <div className="credit-item">
              <h3>Writers</h3>
              <p>{movie.Writer}</p>
            </div>
            
            <div className="credit-item">
              <h3>Actors</h3>
              <p>{movie.Actors}</p>
            </div>
          </div>
          
          {movie.Awards !== 'N/A' && (
            <div className="movie-awards">
              <h3>Awards</h3>
              <p>{movie.Awards}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;