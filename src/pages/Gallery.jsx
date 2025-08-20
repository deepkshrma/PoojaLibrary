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

import mandir from "../assets/images/mandir.jpg";
import mistan1 from "../assets/images/mistan1.jpg";
import mistan2 from "../assets/images/mistan2.jpg";
import jio from "../assets/images/jio.jpg";
import inside1 from "../assets/images/inside1.jpg";
import inside2 from "../assets/images/inside2.jpg";
import inside3 from "../assets/images/inside3.jpg";
import inside4 from "../assets/images/inside4.jpg";
import inside5 from "../assets/images/inside-main.jpg";
export default function Gallery() {
  const images = [
    mandir,
    outsideFront,
    inside4,
    libraryDesk,
    inside1,
    inside2,
    inside5,
    inside3,
    jio,
  ];
  const nearbyImages = [mistan1, mistan2];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      {/* Main Auto-play Video */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        {/* <h2 className="text-4xl font-bold text-center text-[#F9832B] mb-6">
          🎥
        </h2> */}

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

        <motion.p
          className="text-center mt-2 text-2xl font-extrabold"
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
          library overview
        </motion.p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <motion.p
          className="text-center mt-2 text-2xl font-extrabold"
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
          Gallery
        </motion.p>
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
        <motion.p
          className="text-center mt-2 text-2xl font-extrabold"
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
          Nearby Attractions
        </motion.p>
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
            <motion.p
              className="text-center mt-2 text-2xl font-extrabold"
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
              Ganpati mistan bhandar
            </motion.p>
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
    </div>
  );
}
