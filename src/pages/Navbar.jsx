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
import logoimage from "../assets/images/mandir.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Variants for stagger animation
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // stagger each item
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

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
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-[#F9832B] to-orange-600 text-transparent bg-clip-text text-shadow-lg cursor-pointer">
              Pooja Library
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link
            to="/"
            className="hover:text-[#F9832B] transition flex items-center gap-1"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/gallery"
            className="hover:text-[#F9832B] transition flex items-center gap-1"
          >
            <FaImages /> Gallery
          </Link>
          <Link
            to="/about"
            className="hover:text-[#F9832B] transition flex items-center gap-1"
          >
            <FaInfoCircle /> About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#F9832B] transition flex items-center gap-1"
          >
            <FaPhoneAlt /> Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
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
                {[
                  { to: "/", label: "Home", icon: <FaHome /> },
                  { to: "/gallery", label: "Gallery", icon: <FaImages /> },
                  { to: "/about", label: "About", icon: <FaInfoCircle /> },
                  { to: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
                ].map((item, i) => (
                  <motion.div
                    key={item.to}
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-700 hover:text-[#F9832B] transition"
                    >
                      {/* icon with little bounce */}
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {item.icon}
                      </motion.span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
