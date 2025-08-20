import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
  onClick={scrollToTop}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  whileHover={{ scale: 1.2, y: -5 }}
  whileTap={{ scale: 0.95 }}
  className="fixed bottom-6 right-6 p-3 rounded-full
             bg-gradient-to-r from-orange-400 to-pink-500
             text-white shadow-lg hover:shadow-xl"
>
  <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <MdKeyboardDoubleArrowUp size={34}/>
  </motion.div>
</motion.button>

  );
}
