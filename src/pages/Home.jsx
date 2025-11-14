import React from "react";
import heroImg from "../assets/hero.jpg";
import discoverImg from "../assets/discover.jpg";

export default function Home() {
  return (
    <div className="text-[#2E2E2E] font-inter">
      {/* ✨ HERO SECTION */}
      <section
        className="relative h-screen w-full bg-cover bg-center flex items-end justify-center -mt-[72px]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Hero Text at Bottom */}
        <div className="relative z-10 text-center text-white pb-20 px-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Find your <span className="text-aqua">travel twin</span>.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Go where you belong. Explore with people who share your vibe.
          </p>
          <a
            href="#discover"
            className="inline-block bg-aqua hover:bg-ocean text-white font-semibold px-10 py-3 rounded-full text-lg transition transform hover:scale-105 shadow-lg"
          >
            Discover Destinations
          </a>
        </div>
      </section>

      {/* 🌍 DISCOVER SECTION */}
      <section
        id="discover"
        className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6 gap-10"
      >
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-4xl font-bold text-ocean leading-snug">
            Explore breathtaking destinations 🌍
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover real experiences from travelers around the world. See where your
            travel twin has been and get inspired for your next adventure. Plan trips,
            find your vibe, and connect with people who love the journey as much as you do.
          </p>
          <button className="bg-ocean text-white px-6 py-3 rounded-lg font-semibold hover:bg-aqua transition transform hover:scale-105">
            Start Exploring
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={discoverImg}
            alt="Discover places"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* 🗺️ FEATURED DESTINATIONS */}
      <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-ocean mb-4">
            Featured Destinations
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            From beaches to cities, explore top destinations your travel twin has already visited.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Bali, Indonesia",
              img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Swiss Alps",
              img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Paris, France",
              img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Tokyo, Japan",
              img: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Dubai, UAE",
              img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "New Zealand",
              img: "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=800&q=80",
            },
          ].map((place, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 duration-300"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="text-white text-lg font-semibold drop-shadow-md">
                  {place.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
