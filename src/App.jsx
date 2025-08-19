import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-purple-700">📚 Pooja Library</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#gallery" className="hover:text-purple-600">Gallery</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </nav>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white p-4 space-y-2">
            <a href="#about" className="block" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#gallery" className="block" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="block" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center px-4">
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold">
          Welcome to Pooja Library
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          A peaceful place for reading, learning, and growing your knowledge.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-purple-700">About Us</h3>
        <p className="text-lg leading-relaxed">
          Pooja Library is a community-driven space dedicated to readers and learners.
          Our collection ranges from ancient scriptures to modern-day knowledge, creating
          a bridge between tradition and innovation.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <h3 className="text-3xl font-semibold mb-10 text-center text-purple-700">Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <motion.div key={img} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`https://source.unsplash.com/400x300/?library,books,${img}`}
                alt="Library pic"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-purple-700">Contact Us</h3>
        <p className="text-lg mb-6">Want to know more? Reach us on WhatsApp!</p>
        <a
          href="https://wa.me/919876543210" // replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-10">
        <p>© {new Date().getFullYear()} Pooja Library. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
