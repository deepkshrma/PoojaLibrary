import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowUp,
  FaWifi,
  FaParking,
  FaNewspaper,
  FaVideo,
  FaSnowflake,
  FaTint,
  FaUtensils,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerimage from "../assets/images/front-night.jpg";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4"
        style={{ backgroundImage: `url(${bannerimage})` }}
      >
        <motion.h1
          className="text-center mt-2 text-3xl md:text-4xl font-extrabold"
          style={{
            backgroundImage: "linear-gradient(90deg,#FACC15, #F9832B, #EA580C)",
            backgroundSize: "400% 400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Welcome to Pooja Library
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl drop-shadow">
          A peaceful place for reading, learning, and growing your knowledge.
        </p>
      </section>

      {/* Facilities Section */}
      <section
        id="facilities"
        className="py-16 bg-gradient-to-r from-purple-50 to-purple-100"
      >
        <h3 className="text-3xl font-semibold mb-10 text-center text-[#F9832B]">
          Our Facilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaSnowflake size={32} className="text-cyan-500" />,
              title: "Air Conditioned",
            },
            {
              icon: <FaWifi size={32} className="text-green-500" />,
              title: "Free WiFi",
            },
            {
              icon: <FaParking size={32} className="text-indigo-500" />,
              title: "Parking Space",
            },
            {
              icon: <FaTint size={32} className="text-blue-500" />,
              title: "Water Cooler",
            },
            {
              icon: <FaNewspaper size={32} className="text-yellow-500" />,
              title: "Newspapers",
            },
            {
              icon: <FaVideo size={32} className="text-red-500" />,
              title: "CCTV Cameras",
            },
            {
              icon: <FaUtensils size={32} className="text-pink-500" />,
              title: "Nearby Mistan Bhandar",
            },
          ].map((facility, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4"
            >
              {facility.icon}
              <h4 className="text-xl font-semibold text-gray-700">
                {facility.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Motion Buttons after Facilities */}
        <div className="mt-12 flex justify-center gap-6">
          {[
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
            { name: "About", path: "/about" },
          ].map((btn, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.1 }}>
              <Link
                to={btn.path}
                className="px-6 py-3 rounded-xl text-lg font-semibold shadow-md bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:opacity-90 transition"
              >
                {btn.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3">
        <a
          href="https://wa.me/916367007879"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp size={28} />
        </a>
        <button
          onClick={scrollToTop}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition flex items-center justify-center"
        >
          <FaArrowUp size={24} />
        </button>
      </div>
    </div>
  );
}
