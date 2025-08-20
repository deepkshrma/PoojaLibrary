import { FaPhoneAlt, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-6 py-20">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center 
        bg-gradient-to-r from-yellow-400 via-[#F9832B] to-orange-600 
        text-transparent bg-clip-text drop-shadow-md"
      >
        Contact Us
      </motion.h1>

      {/* Map Embed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mb-6 shadow-lg rounded-xl overflow-hidden"
      >
        <iframe
          title="library-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.399719527607!2d75.5406002111778!3d27.08068965275348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c57ecb680638b%3A0x3bdc6fe53672db64!2spooja%20library!5e0!3m2!1sen!2sin!4v1755666314813!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* View Larger Map Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <a
          href="https://maps.app.goo.gl/G8aZLB4hKzWNaAz1A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F9832B] text-white px-6 py-3 rounded-lg 
          shadow-md font-semibold hover:bg-orange-600 transition"
        >
          📍 View Larger Map
        </a>
      </motion.div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
        >
          <FaPhoneAlt className="text-[#F9832B] text-4xl mb-3 animate-bounce" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Call Us</h3>
          <p className="text-lg font-medium">+91 9079297875</p>
          <p className="text-lg font-medium">+91 6367007879</p>
        </motion.div>

        {/* WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
        >
          <FaWhatsapp className="text-green-500 text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">WhatsApp</h3>
          <a
            href="https://wa.me/916367007879"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#F9832B] font-semibold hover:underline"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center md:col-span-2 hover:shadow-2xl transition"
        >
          <FaMapMarkedAlt className="text-[#F9832B] text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Location</h3>
          <p className="text-lg font-medium">
            📍 Pooja Library, Punana, Jaipur, Rajasthan 303701
          </p>
        </motion.div>
      </div>
    </div>
  );
}
