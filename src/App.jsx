import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { FavoritesProvider } from './context/FavoritesContext';
import './App.css';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/movie/:id" element={<MovieDetailsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;