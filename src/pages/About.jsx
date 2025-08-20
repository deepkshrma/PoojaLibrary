// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaBookReader, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function About() {
  const startDate = new Date("2022-08-21");
  const today = new Date();

  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col justify-center items-center px-6 py-16">
      {/* Heading */}
      <motion.p
        className="text-center mt-2 text-3xl font-extrabold"
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
        About Pooja Library
      </motion.p>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full mt-8">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
        >
          <FaBookReader className="text-[#F9832B] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p>
            Bringing city-level library facilities to village, making a clean and
            self-study space for students.
          </p>
        </motion.div>

        {/* Since */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
        >
          <FaCalendarAlt className="text-[#F9832B] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Since 2022 🎉</h3>
          <p>
            Opened on <strong>21st August 2022</strong>, our library has been
            running for{" "}
            <span className="font-bold text-[#F9832B]">
              {diffYears} years {diffMonths} months ({diffDays}+ days)
            </span>
            , providing a cozy and inspiring space for Students.
          </p>
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center md:col-span-2"
        >
          <FaUsers className="text-[#F9832B] text-5xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Community</h3>
          <p>
            A welcoming space for students, readers, and dreamers — where knowledge
            connects us all.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
