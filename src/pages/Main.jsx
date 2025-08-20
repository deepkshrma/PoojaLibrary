import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaParking,
  FaNewspaper,
  FaVideo,
  FaSnowflake,
  FaRestroom,
  FaChair,
  FaTint,
  FaUtensils,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerimage from "../assets/images/front.jpg";

export default function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}

      <section
        className="h-[60vh] md:h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4 "
        style={{ backgroundImage: `url(${bannerimage})` }}
      ></section>

      {/* Facilities Section */}
      <section
        id="facilities"
        className="py-10 bg-gradient-to-r from-purple-50 to-purple-100"
      >
        <motion.h3
          className="text-center   mb-6 text-3xl font-extrabold"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #F97316, #FACC15, #ec4899, #8b5cf6, #22d3ee, #3b82f6)",
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
          Facilities
        </motion.h3>
        {/* 🔹 Mobile par bhi 2-2 cards ek saath */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaSnowflake size={40} className="text-cyan-500" />,
              title: "Air Conditioned",
            },
            {
              icon: <FaWifi size={40} className="text-green-500" />,
              title: "Free WiFi",
            },
            {
              icon: <FaChair size={40} className="text-orange-500" />,
              title: "Comfortable Sitting",
            },
            {
              icon: <FaRestroom size={40} className="text-purple-500" />,
              title: "Washroom",
            },
            {
              icon: <FaParking size={40} className="text-indigo-500" />,
              title: "Parking Space",
            },
            {
              icon: <FaVideo size={40} className="text-red-500" />,
              title: "CCTV Cameras",
            },
          ].map((facility, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4 hover:scale-105 transition"
            >
              {/* 👉 Icon par hi motion effect */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
              >
                {facility.icon}
              </motion.div>

              <h4 className="text-lg font-semibold text-gray-700">
                {facility.title}
              </h4>
            </div>
          ))}
        </div>

        {/* 🔹 Attractive CTA Section below Facilities */}
        <div className="mt-16 ">
          <h6 className="text-xl font-semibold text-gray-500 mb-6 pl-6">
            Explore More with Pooja Library
          </h6>
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
