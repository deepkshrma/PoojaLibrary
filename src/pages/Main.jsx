import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaParking,
  FaVideo,
  FaSnowflake,
  FaRestroom,
  FaChair,
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
      {/* <motion.h3 className="text-center mt-4 text-2xl font-bold flex items-center justify-center gap-2 cursor-pointer">
      
        <Link to="/latest">
          <motion.span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F97316, #FACC15, #ec4899, #8b5cf6, #22d3ee, #3b82f6)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Latest from Library
          </motion.span>
        </Link>
      </motion.h3> */}

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

        {/*  Attractive CTA Section below Facilities */}
        <div className="mt-16">
          <h6 className="text-xl font-semibold text-gray-500 mb-6 pl-6">
            Explore More with Pooja Library
          </h6>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {[
              { name: "Gallery", path: "/gallery" },
              { name: "Memories", path: "/memories" },
              { name: "Contact", path: "/contact" },
              { name: "About", path: "/about" },
            ].map((btn, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={btn.path}
                  className="block text-center px-6 py-3 rounded-xl text-lg font-semibold 
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
    </div>
  );
}
