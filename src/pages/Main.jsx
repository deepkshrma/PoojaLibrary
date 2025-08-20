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
      {/* Facilities Section */}
      <section
        id="facilities"
        className="py-16 bg-gradient-to-r from-purple-50 to-purple-100"
      >
        <h3 className="text-3xl font-semibold mb-10 text-center text-[#F9832B]">
          Our Facilities
        </h3>
        {/* 🔹 Mobile par bhi 2-2 cards ek saath */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaSnowflake size={70} className="text-cyan-500" />,
              title: "Air Conditioned",
            },
            {
              icon: <FaWifi size={70} className="text-green-500" />,
              title: "Free WiFi",
            },
            {
              icon: <FaParking size={70} className="text-indigo-500" />,
              title: "Parking Space",
            },
            {
              icon: <FaTint size={70} className="text-blue-500" />,
              title: "Water Cooler",
            },
            {
              icon: <FaNewspaper size={70} className="text-yellow-500" />,
              title: "Newspapers",
            },
            {
              icon: <FaVideo size={70} className="text-red-500" />,
              title: "CCTV Cameras",
            },
            // {
            //   icon: <FaUtensils size={32} className="text-pink-500" />,
            //   title: "Nearby Mistan Bhandar",
            // },
          ].map((facility, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4"
            >
              {facility.icon}
              <h4 className="text-lg font-semibold text-gray-700">
                {facility.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* 🔹 Attractive CTA Section below Facilities */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-semibold text-gray-700 mb-6">
            Explore More with Pooja Library
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
              { name: "About", path: "/about" },
            ].map((btn, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -5, 0], // upar niche halka float
                  boxShadow: [
                    "0px 4px 12px rgba(249, 131, 43, 0.2)",
                    "0px 6px 16px rgba(249, 131, 43, 0.4)",
                    "0px 4px 12px rgba(249, 131, 43, 0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5, // thoda stagger
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={btn.path}
                  className="px-6 py-3 rounded-xl text-lg font-semibold 
                     shadow-md bg-gradient-to-r from-orange-400 to-pink-500 
                     text-white hover:opacity-90 transition"
                >
                  {btn.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Buttons
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3">
        <a
          href="https://wa.me/916367007879"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp size={28} />
        </a>
      </div> */}
    </div>
  );
}
