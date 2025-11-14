import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 1️⃣ Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="TravelTwins" className="w-10 h-10 rounded-full" />
            <span className="text-white text-xl font-bold">TravelTwins</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Find your travel twin. Go where you belong. Discover destinations and connect with people who share your passion for adventure.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-aqua transition">Home</Link>
            </li>
            <li>
              <Link to="/discover" className="hover:text-aqua transition">Discover</Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-aqua transition">Community</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-aqua transition">About</Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/help" className="hover:text-aqua transition">Help Center</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-aqua transition">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-aqua transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-aqua transition">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-aqua transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-aqua transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-aqua transition">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-aqua transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-aqua">TravelTwins</span>. All rights reserved.
      </div>
    </footer>
  );
}
