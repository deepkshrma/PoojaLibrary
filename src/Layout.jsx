// src/Layout.jsx
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
