import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
         Login Form 👋
        </h2>

        {/* Email */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <FcGoogle className="text-xl" /> Login with Google
          </button>
          <button
            type="button"
            onClick={handleGithubLogin}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <FaGithub className="text-xl text-gray-700" /> Login with GitHub
          </button>
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
