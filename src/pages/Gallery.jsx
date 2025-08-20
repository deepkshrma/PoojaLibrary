import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
// Import videos
import mainVideo from "../assets/videos/mainvideo.mp4";
import nearbyVideo from "../assets/videos/nearby.mp4";

// Import images
import inu2 from "../assets/images/ina2.jpg";
import inu3 from "../assets/images/inu3.jpg";
import outsideFront from "../assets/images/outside-front.jpg";
import libraryDesk from "../assets/images/bannerimage.jpg";
import libraryBookshelf from "../assets/images/mandir.jpg";
import mistan1 from "../assets/images/outside-front.jpg";
import mistan2 from "../assets/images/outside-front.jpg";

export default function Gallery() {
  const images = [inu2, inu3, outsideFront, libraryDesk, libraryBookshelf];
  const nearbyImages = [mistan1, mistan2];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      {/* Main Auto-play Video */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center text-[#F9832B] mb-6">
          🎥
        </h2>

        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-lg w-full h-96 object-cover"
            src={mainVideo}
          />
        </div>

        <p className="text-center mt-2 text-gray-700 font-medium">
          Our Library Overview
        </p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-3xl font-semibold text-[#F9832B] mb-6 text-center">
          📷 Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Library Image ${idx + 1}`}
              className="rounded-xl shadow-lg object-cover h-64 w-full"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>

      {/* Nearby Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h3 className="text-3xl font-semibold text-[#F9832B] mb-6 text-center">
          🍛 Nearby Attractions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video */}
          <div className="rounded-xl shadow-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="w-full h-72 object-cover"
              src={nearbyVideo}
            />
            <p className="text-center mt-2 text-gray-700 font-medium">
              Mistan Bhandar
            </p>
          </div>

          {/* Nearby Images */}
          <div className="grid grid-cols-2 gap-4">
            {nearbyImages.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Nearby ${idx + 1}`}
                className="rounded-xl shadow-lg object-cover h-32 w-full"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-10 flex flex-col items-center space-y-3">
        <p>© {new Date().getFullYear()} Pooja Library. All Rights Reserved.</p>
        <a
          href="https://instagram.com/_deepk__shrma"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-pink-400 hover:text-pink-500"
        >
          <FaInstagram /> <span>@_deepk__shrma</span>
        </a>
        <p className="text-sm">Made by Deepak Sharma</p>
      </footer>
    </div>
  );
}
