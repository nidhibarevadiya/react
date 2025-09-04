import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

const Navbar = ({ user }) => {
  return (
    <div>
      <div>
        <nav className="bg-slate-700 text-white flex justify-around p-4 text-xl font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          {!user ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={() => signOut(auth)}>Logout</button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
