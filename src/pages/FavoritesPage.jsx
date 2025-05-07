import React, { useContext, useState } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieList from '../components/MovieList.jsx';
import SearchBar from '../components/SearchBar';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter favorites based on search term
  const filteredFavorites = favorites.filter(movie => 
    movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h2>Your Favorite Movies</h2>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      
      {favorites.length === 0 ? (
        <div className="no-favorites">
          <p>You haven't added any favorites yet.</p>
          <p>Browse movies on the home page and click the heart icon to add them here.</p>
        </div>
      ) : (
        <MovieList 
          movies={filteredFavorites} 
          isLoading={false} 
          error={filteredFavorites.length === 0 ? 'No matching favorites found.' : null} 
        />
      )}
    </div>
  );
};

export default FavoritesPage;