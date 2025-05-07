import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList.jsx';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Default search term for initial load
  const defaultSearch = 'marvel';
  const API_KEY = '2ce912f'; 
  
  useEffect(() => {
    const fetchMovies = async (term) => {
      if (!term) {
        term = defaultSearch;
      }
      
      setIsLoading(true);
      setError(null);
      
      try {
        // console.log(API_KEY);
        // console.log(`https://www.omdbapi.com/?t=${encodeURIComponent(term)}&apikey=${API_KEY}`);
        
        
        const response = await fetch(
          `http://www.omdbapi.com/?&apikey=${API_KEY}&s=${encodeURIComponent(term)}
`
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError(data.Error || 'No results found');
        }
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Debounce search to avoid too many API calls
    const timeoutId = setTimeout(() => {
      fetchMovies(searchTerm);
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);
  
  return (
    <div className="home-page">
      <div className="search-container">
        <h2>Discover Movies</h2>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      <MovieList movies={movies} isLoading={isLoading} error={error} />
    </div>
  );
};

export default HomePage;