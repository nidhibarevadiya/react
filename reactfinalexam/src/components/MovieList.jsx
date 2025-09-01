import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/moviesSlice";
import { Link } from "react-router-dom";

export default function MovieList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.movies);

  useEffect(() => { dispatch(fetchPopularMovies()); }, [dispatch]);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>Popular Movies</h2>
      <div className="row">
        {data.map((m) => (
          <div className="col-md-3 mb-3" key={m.id}>
            <div className="card">
              <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} className="card-img-top" alt={m.title} />
              <div className="card-body">
                <h6>{m.title}</h6>
                <Link to={`/movie/${m.id}`} className="btn btn-primary btn-sm">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
