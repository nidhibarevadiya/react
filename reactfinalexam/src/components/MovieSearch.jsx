import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../redux/moviesSlice";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.movies);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value) dispatch(searchMovies(e.target.value));
  };

  return (
    <div className="container mt-4">
      <input type="text" value={query} onChange={handleSearch} className="form-control" placeholder="Search movies..." />
      {loading && <p>Searching...</p>}
      <div className="row mt-3">
        {data.map((m) => (
          <div className="col-md-3 mb-3" key={m.id}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} className="card-img-top" alt={m.title} />
              <div className="card-body">
                <h6>{m.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
