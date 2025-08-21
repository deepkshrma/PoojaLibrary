import { motion } from "framer-motion";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";

import anniVideo from "../assets/videos/annivideo.mp4";
import memory1 from "../assets/images/memory1.jpg";
import memory2 from "../assets/images/inu4.jpg";
import memory3 from "../assets/images/inu3.jpg";

// Anniversary photos (replace with real ones)
import anni1 from "../assets/images/anni1.jpg";
import anni2 from "../assets/images/outside-main.jpg";
import anni3 from "../assets/images/front-night.jpg";

export default function Memories() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold text-purple-700 mb-6"
      >
        Our Journey Since <span className="text-indigo-600">21 Aug 2022</span>
      </motion.h2>

      <p className="text-lg text-gray-700 mb-12">
        A small start that became a place where students find focus, discipline, and growth 📚
      </p>

      {/* 🔹 Timeline Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {/* Inauguration */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <FaBookOpen className="text-3xl text-purple-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-purple-700">2022</h3>
          <p className="text-gray-600">Library inaugurated 🎉</p>
        </div>

        {/* 3rd Anniversary */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <FaCalendarAlt className="text-3xl text-indigo-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-purple-700">2025</h3>
          <p className="text-gray-600">Celebrating 3 years 🎊</p>
        </div>
      </div>

      {/* 🔹 Inauguration Memories */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-xl font-bold text-purple-700 mb-6">
          📸 Inauguration Memories (2022)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[memory1, memory3].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt="Library Inauguration"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔹 Anniversary Memories */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold text-purple-700 mb-6">
          🎉 3rd Anniversary (2025)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[anni2, anni1, anni3].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt="Anniversary Celebration"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Anniversary Video */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-purple-700 mb-4">
            🎉 3rd Anniversary Celebration
          </h4>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              src={anniVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
