import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFAFA] dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-ocean dark:text-aqua mb-6 text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-ocean text-white py-3 rounded-md font-semibold hover:bg-aqua transition"
          >
            Log In
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition"
        >
          Continue with Google
        </button>

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-ocean dark:text-aqua font-semibold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
