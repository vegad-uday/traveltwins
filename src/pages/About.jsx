import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-ocean dark:text-aqua mb-4">About TravelTwins</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-lg">
        TravelTwins helps you find your travel twin and explore the world together.
      </p>
    </div>
  );
}
