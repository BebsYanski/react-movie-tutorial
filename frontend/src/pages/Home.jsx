import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
      url: "https://example.com/inception.jpg",
    },
    {
      id: 2,
      title: "The Matrix",
      release_date: "1999-03-31",
      url: "https://example.com/matrix.jpg",
    },
    {
      id: 3,
      title: "Interstellar",
      release_date: "2014-11-07",
      url: "https://example.com/interstellar.jpg",
    },
  ]);

  function handleSearchSubmit(event) {
    event.preventDefault();
    // Implement the logic to search for movies based on the input value
    if (searchTerm.trim() === "") {
      // If the search term is empty, reset to the default movies
      setFilteredMovies([...movies]);
    } else {
      // Filter movies based on the search term
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredMovies(filtered);
    }
  }

  return (
    <div className="home">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <h1>Movies</h1>
      <div className="movie-list">
        {filteredMovies.length > 0
          ? filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
