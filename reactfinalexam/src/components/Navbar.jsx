import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MovieLibrary</Link>
        <div>
          <Link className="nav-link d-inline" to="/">Popular</Link>
          <Link className="nav-link d-inline" to="/search">Search</Link>
          <Link className="nav-link d-inline" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
