// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaBookReader, FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-center items-center px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-[#F9832B] mb-12 text-center"
      >
        About Pooja Library
      </motion.h1>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* Vision */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
        >
          <FaBookReader className="text-[#F9832B] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p>
            Bringing city-level library facilities to our village, making a
            clean and self-study space for students.
          </p>
        </motion.div>

        {/* Since */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
        >
          <FaCalendarAlt className="text-[#F9832B] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Since 2022</h3>
          <p>
            Opened on <strong>21st August 2022</strong>, our library has grown
            steadily, providing a cozy and inspiring space for Students.
          </p>
        </motion.div>

        {/* Community */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center md:col-span-2"
        >
          <FaUsers className="text-[#F9832B] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Community</h3>
          <p>
            A welcoming space for students, readers, and dreamers — where
            knowledge connects us all.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
