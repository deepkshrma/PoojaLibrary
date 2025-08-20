// src/Layout.jsx
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
