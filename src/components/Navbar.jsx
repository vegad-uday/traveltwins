import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import logo from "../assets/logo.png";
import defaultAvatar from "../assets/default-avatar.png";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // 🔹 Auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsub();
  }, []);

  // 🔹 Theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
  };

  const profilePhoto =
    user?.photoURL && user.photoURL.trim() !== "" ? user.photoURL : defaultAvatar;

  return (
    <nav className="bg-gray-900 dark:bg-gray-950 border-b border-gray-800 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-[95%] mx-auto flex items-center justify-between px-4 py-3">
        {/* 🔹 Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TravelTwins" className="w-9 h-9 rounded-full" />
          <span className="text-white text-lg font-semibold tracking-tight">
            TravelTwins
          </span>
        </Link>

        {/* 🔹 Right Side: Auth / Profile */}
        <div className="flex items-center gap-4 relative">
          {user ? (
            <div className="relative">
              {/* Profile Avatar */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                <img
                  src={profilePhoto}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-600 object-cover hover:ring-2 hover:ring-aqua transition"
                />
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-gray-800 dark:bg-gray-900 text-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-700">
                    <span className="block text-sm font-semibold">
                      {user.displayName || "Traveler"}
                    </span>
                    <span className="block text-xs text-gray-400 truncate">
                      {user.email}
                    </span>
                  </div>
                  <ul className="py-2 text-sm">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-700 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 hover:bg-gray-700 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trips"
                        className="block px-4 py-2 hover:bg-gray-700 transition"
                        onClick={() => setDropdownOpen(false)}
                      >
                        My Trips
                      </Link>
                    </li>

                    {/* 🌙 Theme Toggle */}
                    <li className="border-t border-gray-700">
                      <button
                        onClick={toggleTheme}
                        className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-700 transition"
                      >
                        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                      </button>
                    </li>
                  </ul>
                  <div className="border-t border-gray-700">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 transition"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-gray-300 hover:text-aqua transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm bg-aqua text-gray-900 px-3 py-1.5 rounded-md font-medium hover:bg-ocean hover:text-white transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
