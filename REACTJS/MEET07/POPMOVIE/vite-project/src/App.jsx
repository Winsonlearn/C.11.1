import { useState, useEffect } from "react";
import { OMDB_API_KEY } from "./config";
function Logo() {
  return (
    <div className="logo">
      <span role="img">🔎</span>
      <h1>Movie</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function BoxMovies({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieItem({ movie, onSelectMovieId }) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovieId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🔎</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieList({ movies, onSelectMovieId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          onSelectMovieId={onSelectMovieId}
        />
      ))}
    </ul>
  );
}

function Loader() {
  return (
    <div className="loader">
      <div className="loading-bar">
        <div className="bar">🔎</div>
      </div>
    </div>
  );
}

function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title : title,
    Year : year,
    Released : released,
    Poster : poster,
    imdbRating,
    Runtime : runtime,
    Plot : plot,
    Genre : genre,
    Actors : actors,
    Director : director,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedId}`
      );
      const data = await response.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &#x2715;
            </button>
            <img src={poster} alt={`${title} poster`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                <span>🕰️</span>
                <span>{released}</span>
              </p>
              <p>
                <span>⌛️</span>
                <span>{runtime}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{imdbRating}</span>
              </p>
            </div>
          </header>

          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Year : {year}</p>
            <p>Genre : {genre}</p>
            <p>Starring : {actors}</p>
            <p>Directed by : {director}</p>
          </section>
        </>
      )}
    </div>
  );
}


function App() {
  const [query, setQuery] = useState("oppenheimer");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initialData = JSON.parse(localStorage.getItem("data") || "[]");
  const [history, setHistory] = useState(initialData);

  function handleSelectMovieId(id) {
    setSelectedMovie((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedMovie(null);
  }

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${OMDB_API_KEY}`
        );

        const data = await res.json();
        setMovies(data.Search);
        setIsLoading(false);
        if(query.length >3){
          const updatedHistory = [...history, query].slice(-10);
          setHistory(updatedHistory);
          localStorage.setItem("data", JSON.stringify(updatedHistory));
          console.log(updatedHistory);
        }

       
      } catch (err) {
        console.log(err);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      return;
    }
    

    fetchMovie();
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <BoxMovies>
          {isLoading ? 
            <Loader /> :
            <MovieList movies={movies} onSelectMovieId={handleSelectMovieId} />
          }
        </BoxMovies>
        <BoxMovies>
          {selectedMovie &&
          <MovieDetails selectedId={selectedMovie} onCloseMovie={handleCloseMovie} />
          }
        </BoxMovies>
      </Main>
    </>
  );
}

export default App;
