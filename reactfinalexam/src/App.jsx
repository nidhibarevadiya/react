import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, searchMovies } from "./redux/moviesSlice";

function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies()); 
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query) {
      dispatch(searchMovies(query));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Library</h1>

      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search movies..."
          className="border px-3 py-2 rounded mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((movie) => (
          <div
            key={movie.id}
            className="p-3 border rounded shadow hover:shadow-lg transition"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded mb-2"
              />
            ) : (
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                No Image
              </div>
            )}
            <h2 className="font-semibold">{movie.title}</h2>
            <p className="text-sm text-gray-600">
              ⭐ {movie.vote_average} | 📅 {movie.release_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
