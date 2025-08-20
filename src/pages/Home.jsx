import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaArrowUp, FaWifi, FaParking, FaNewspaper, FaVideo, FaSnowflake, FaTint, FaUtensils } from "react-icons/fa";
import bannerimage from "../assets/images/front-night.jpg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navbar */}
      {/* <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-[#F9832B]">📚 Pooja Library</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#F9832B] transition">About</a>
            <a href="#facilities" className="hover:text-[#F9832B] transition">Facilities</a>
            <a href="#gallery" className="hover:text-[#F9832B] transition">Gallery</a>
            <a href="#contact" className="hover:text-[#F9832B] transition">Contact</a>
          </nav>
          <button
            className="md:hidden text-2xl text-purple-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-purple-100 p-4 space-y-3 text-center">
            <a href="#about" className="block text-[#F9832B] font-medium" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#facilities" className="block text-[#F9832B] font-medium" onClick={() => setMenuOpen(false)}>Facilities</a>
            <a href="#gallery" className="block text-[#F9832B] font-medium" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="block text-[#F9832B] font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header> */}

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4"
        style={{ backgroundImage: `url(${bannerimage})` }}
      >
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to Pooja Library
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl max-w-xl drop-shadow">
          A peaceful place for reading, learning, and growing your knowledge.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#F9832B]">About Us</h3>
        <p className="text-lg leading-relaxed">
          Pooja Library is a community-driven space dedicated to readers and learners.
          Our collection ranges from ancient scriptures to modern-day knowledge, creating
          a bridge between tradition and innovation.
        </p>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
        <h3 className="text-3xl font-semibold mb-10 text-center text-[#F9832B]">Our Facilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[ 
            { icon: <FaTint size={32} className="text-blue-500" />, title: "Water Cooler" },
            { icon: <FaSnowflake size={32} className="text-cyan-500" />, title: "Air Conditioned" },
            { icon: <FaWifi size={32} className="text-green-500" />, title: "Free WiFi" },
            { icon: <FaParking size={32} className="text-indigo-500" />, title: "Parking Space" },
            { icon: <FaNewspaper size={32} className="text-yellow-500" />, title: "Newspapers" },
            { icon: <FaVideo size={32} className="text-red-500" />, title: "CCTV Cameras" },
            { icon: <FaUtensils size={32} className="text-pink-500" />, title: "Nearby Mistan Bhandar" }
          ].map((facility, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4"
            >
              {facility.icon}
              <h4 className="text-xl font-semibold text-gray-700">{facility.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <h3 className="text-3xl font-semibold mb-10 text-center text-[#F9832B]">Gallery</h3>
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
        <h3 className="text-3xl font-semibold mb-6 text-[#F9832B]">Contact Us</h3>
        <p className="text-lg mb-6">Want to know more? Reach us on WhatsApp!</p>
        <a
          href="https://wa.me/916367007879"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-3">
        <a
          href="https://wa.me/916367007879"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <FaWhatsapp size={28} />
        </a>
        <button
          onClick={scrollToTop}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition flex items-center justify-center"
        >
          <FaArrowUp size={24} />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-10 flex flex-col items-center space-y-3">
        <p>© {new Date().getFullYear()} Pooja Library. All Rights Reserved.</p>
        <a href="https://instagram.com/_deepk__shrma" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-pink-400 hover:text-pink-500">
          <FaInstagram /> <span>@_deepk__shrma</span>
        </a>
        <p className="text-sm">Made by Deepak Sharma</p>
      </footer>
    </div>
  );
}
