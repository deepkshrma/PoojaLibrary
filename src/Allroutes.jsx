import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Memories from "./pages/Memories";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import ScrollToTop from "./pages/ScrollToTop";
import Latest from "./pages/Latest";


function Allroutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Allroutes;
