# Movie Explorer App

A responsive React application that allows users to browse movies, search for specific titles, and manage favorites.

## Features

- **Movie Browsing**: Browse a collection of movies from the OMDb API
- **Search Functionality**: Search for movies by title in real-time
- **Favorites Management**: Add and remove movies from favorites with local storage persistence
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Movie Details**: View detailed information about each movie on a dedicated page

## Note : I didn't used .env for API KEY as its a assignment

## Demo

[Live Demo](https://guidepoint-movieexp.vercel.app/)

## Technologies Used

- React.js (functional components with hooks)
- React Router for navigation
- Context API for state management
- Pure CSS for styling (mobile-first approach)
- LocalStorage for data persistence
- OMDb API for movie data

## Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm 

### Installation

1. Clone the repository:
   ```
   cd guidepoint_movieexp
   ```

2. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.


## Project Structure

```
movie-explorer/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── placeholder-movie.png
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── MovieCard.js
│   │   ├── MovieCard.css
│   │   ├── MovieList.js
│   │   ├── MovieList.css
│   │   ├── SearchBar.js
│   │   └── SearchBar.css
│   ├── context/
│   │   └── FavoritesContext.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── HomePage.css
│   │   ├── FavoritesPage.js
│   │   ├── FavoritesPage.css
│   │   ├── MovieDetailsPage.js
│   │   └── MovieDetailsPage.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Assumptions & Notes

- This application uses a mobile-first approach for responsive design
- Favorites are persisted in localStorage, so they'll remain between browser sessions
- The API has a limit of 1000 requests per day for free accounts
- Default search term "avengers" is used for initial load
- The app handles various error states and loading indicators for better UX

## Future Improvements

- Add pagination for search results
- Implement filtering by genre, year, etc.
- Add user authentication to sync favorites across devices
- Integrate with a movie recommendation API
- Add dark/light theme toggle
- Add unit and integration tests

## License

MIT

---

Created as part of a Frontend Intern assignment. This project demonstrates skills in React component architecture, state management, routing, API integration, and responsive design.