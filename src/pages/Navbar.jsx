import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaImages,
  FaInfoCircle,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import logoimage from "../assets/images/front-night.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logoimage}
            alt="Pooja Library Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-[#F9832B] to-orange-600 text-transparent bg-clip-text">
            Pooja Library
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-[#F9832B] transition flex items-center gap-1">
            <FaHome /> Home
          </Link>
          <Link to="/gallery" className="hover:text-[#F9832B] transition flex items-center gap-1">
            <FaImages /> Gallery
          </Link>
          <Link to="/about" className="hover:text-[#F9832B] transition flex items-center gap-1">
            <FaInfoCircle /> About
          </Link>
          <Link to="/contact" className="hover:text-[#F9832B] transition flex items-center gap-1">
            <FaPhoneAlt /> Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#F9832B]"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Dropdown Menu */}
            <motion.aside
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full right-4 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 p-6"
            >
              <nav className="space-y-5 text-lg font-medium">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#F9832B] transition"
                >
                  <FaHome /> Home
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#F9832B] transition"
                >
                  <FaImages /> Gallery
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#F9832B] transition"
                >
                  <FaInfoCircle /> About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#F9832B] transition"
                >
                  <FaPhoneAlt /> Contact
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
