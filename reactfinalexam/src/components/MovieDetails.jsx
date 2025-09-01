import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "YOUR_TMDB_API_KEY";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
      .then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <p><strong>Release:</strong> {movie.release_date}</p>
      <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
    </div>
  );
}
