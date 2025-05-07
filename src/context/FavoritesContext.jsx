import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  // Initialize favorites state from localStorage or empty array
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add movie to favorites
  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  // Remove movie from favorites
  const removeFavorite = (imdbID) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter((movie) => movie.imdbID !== imdbID)
    );
  };

  // Check if a movie is in favorites
  const isFavorite = (imdbID) => {
    return favorites.some((movie) => movie.imdbID === imdbID);
  };

  // Provide functions and state to the components
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};