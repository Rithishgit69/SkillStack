import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserSignup from "./pages/UserSignup";
import AdminSignup from "./pages/AdminSignup";
import UserSignin from "./pages/UserSignin";
import AdminSignin from "./pages/AdminSignin";
import UserPurchases from "./pages/UserPurchases";
import AdminCourses from "./pages/AdminCourses";
import Profile from "./pages/Profile";
import Browse from "./pages/Browse";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Trending from "./pages/Trending";
import Certificates from "./pages/Certificates";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Cookies from "./pages/Cookies";
import Press from "./pages/Press";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <div className="min-h-screen bg-[#0F0A1E]" style={{
      background: "linear-gradient(135deg, #0F0A1E 0%, #1a0f3f 50%, #2d1b4e 100%)",
      backgroundAttachment: "fixed"
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/signup/admin" element={<AdminSignup />} />
        <Route path="/signin/user" element={<UserSignin />} />
        <Route path="/signin/admin" element={<AdminSignin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/purchases" element={<UserPurchases />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        
        {/* Course Detail */}
        <Route path="/courses/:id" element={<CourseDetail />} />
        
        {/* Footer Pages */}
        <Route path="/browse" element={<Browse />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </div>
  );
}

export default App;
