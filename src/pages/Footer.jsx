import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center  flex flex-col items-center space-y-3">
      <p>© {new Date().getFullYear()} Pooja Library. All Rights Reserved.</p>

      <a
        href="https://instagram.com/_deepk__shrma"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-pink-400 hover:text-pink-500"
      >
        <FaInstagram /> <span>@_deepk__shrma</span>
      </a>

      {/* <p className="text-sm">Made by Deepak Sharma</p> */}
    </footer>
  );
}
