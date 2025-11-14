import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-gray-900 transition-colors">
      {/* Navbar fixed at top */}
      <Navbar />

      {/* Remove all side padding here */}
      <main className="flex-1 pt-[72px]"> {/* ✅ only top padding */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
