import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/GuestPanel/Home";
import About from "../src/components/GuestPanel/About";
import Blog from "../src/components/GuestPanel/Blog";
import Gallery from "../src/components/GuestPanel/Gallery";
import Career from "../src/components/GuestPanel/Career";
import Contact from "../src/components/GuestPanel/Contact";
import Login from "../src/components/GuestPanel/Login";
import Register from "../src/components/GuestPanel/Register";
// import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

// Admin Routes
import AdminDashboard from "../src/components/Admin/Dashboard";
import AdminBlog from "../src/components/Admin/Blog";
import AdminBudget from "../src/components/Admin/Budget";
import AdminRoom from "../src/components/Admin/Room";
import AdminCareer from "../src/components/Admin/Career";
import AdminJobApplication from "../src/components/Admin/JobApplication";
import AdminSettings from "../src/components/Admin/Settings";
import AdminLogout from "../src/components/Admin/Logout";


function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
          {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/budget" element={<AdminBudget />} />
        <Route path="/admin/room" element={<AdminRoom />} />
        <Route path="/admin/career" element={<AdminCareer />} />
        <Route path="/admin/jobapplication" element={<AdminJobApplication />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/logout" element={<AdminLogout />} />

      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;
