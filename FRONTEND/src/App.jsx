import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/GuestPanel/Home";
import About from "../src/components/GuestPanel/About";
import Blog from "../src/components/GuestPanel/Blog";
import Gallery from "../src/components/GuestPanel/Gallery";
import Career from "../src/components/GuestPanel/Career";
import Contact from "../src/components/GuestPanel/Contact";
import Login from "../src/components/GuestPanel/Login";
import Register from "../src/components/GuestPanel/Register";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
