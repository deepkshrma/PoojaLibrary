import { motion } from "framer-motion";
import { FaBookOpen, FaWifi, FaVideo, FaCalendarAlt } from "react-icons/fa";

import memory1 from "../assets/images/inauguration.jpg";
import memory2 from "../assets/images/ina2.jpg";
import memory3 from "../assets/images/inu3.jpg";

export default function Memories() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-purple-700 mb-6"
      >
        Our Journey Since <span className="text-indigo-600">21 Aug 2022</span>
      </motion.h2>

      <p className="text-lg text-gray-700 mb-12">
        A small beginning turned into a vibrant hub for knowledge and community 📚
      </p>

      {/* Timeline Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <FaBookOpen className="text-3xl text-purple-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-purple-700">2022</h3>
          <p className="text-gray-600">Library inaugurated 🎉</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <FaWifi className="text-3xl text-green-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-purple-700">2023</h3>
          <p className="text-gray-600">Free WiFi & AC introduced</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <FaVideo className="text-3xl text-red-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-purple-700">2024</h3>
          <p className="text-gray-600">8 CCTV cameras for security</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6">
          <FaCalendarAlt className="text-3xl text-indigo-600 mx-auto mb-4" />
          <h3 className="font-bold text-xl text-purple-700">2025</h3>
          <p className="text-gray-600">Celebrating 3 years 🎊</p>
        </div>
      </div>

      {/* Memories Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {[memory1, memory2, memory3].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={img} alt="Library Memory" className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
