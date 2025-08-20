import { motion } from "framer-motion";

export default function Latest() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* 🔹 Header Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-[#F9832B] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest Events & Updates
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay connected with the latest images and videos  <b>Pooja Library</b>.
        </p>
      </section>

      {/* 🔹 Coming Soon Section */}
      <section className="py-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-4xl md:text-5xl font-bold text-transparent 
                     bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
        >
          🚀 Coming Soon...
        </motion.div>
        <p className="mt-4 text-gray-600 text-center">
          This section will include <b>Images, Videos, and Information</b>{" "}
          about our latest library.
        </p>
      </section>

      {/* 🔹 Future Layout Idea */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        {/* Image Gallery Placeholder */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-[#F9832B] mb-4">
            📸 Image Gallery
          </h3>
          <p className="text-gray-500"> photos will be displayed here.</p>
        </div>

        {/* Video Placeholder */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-[#F9832B] mb-4">
            🎥 Event Videos
          </h3>
          <p className="text-gray-500">Videos from library will appear here.</p>
        </div>

        {/* Information Placeholder */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-[#F9832B] mb-4">
            📰 Information
          </h3>
          <p className="text-gray-500">
            Latest details will be shared here.
          </p>
        </div>
      </section>
    </div>
  );
}
