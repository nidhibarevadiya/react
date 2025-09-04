import { useState } from "react";
import { auth, googleProvider, githubProvider } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGithubRegister = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-50 to-green-100 px-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account 🚀
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
            className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
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
            className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:outline-none border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition duration-300"
        >
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Register */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <FcGoogle className="text-xl" /> Register with Google
          </button>
          <button
            type="button"
            onClick={handleGithubRegister}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <FaGithub className="text-xl text-gray-700" /> Register with GitHub
          </button>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
