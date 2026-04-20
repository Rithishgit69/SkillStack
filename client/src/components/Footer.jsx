import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#0F0A1E] border-t border-[rgba(124,58,237,0.18)] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] rounded-lg"></div>
              <span className="text-xl font-bold text-[#F3F0FF]">SkillStack</span>
            </div>
            <p className="text-[#A89BC6]">Empowering learners worldwide with quality education</p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-[#F3F0FF] font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-[#A89BC6]">
              <li><Link to="/browse" className="hover:text-[#F3F0FF] transition">Browse Courses</Link></li>
              <li><Link to="/trending" className="hover:text-[#F3F0FF] transition">Trending</Link></li>
              <li><Link to="/certificates" className="hover:text-[#F3F0FF] transition">Certifications</Link></li>
              <li><Link to="/categories" className="hover:text-[#F3F0FF] transition">Categories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#F3F0FF] font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[#A89BC6]">
              <li><Link to="/about" className="hover:text-[#F3F0FF] transition">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-[#F3F0FF] transition">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-[#F3F0FF] transition">Careers</Link></li>
              <li><Link to="/press" className="hover:text-[#F3F0FF] transition">Press</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#F3F0FF] font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-[#A89BC6]">
              <li><Link to="/privacy" className="hover:text-[#F3F0FF] transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#F3F0FF] transition">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-[#F3F0FF] transition">Cookie Policy</Link></li>
              <li><Link to="/contact" className="hover:text-[#F3F0FF] transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="border-t border-[rgba(124,58,237,0.18)] pt-8 flex justify-between items-center">
          <p className="text-[#A89BC6]">© 2024 SkillStack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-[#1E1538] rounded-lg flex items-center justify-center hover:bg-[rgba(124,58,237,0.2)] transition">
              f
            </a>
            <a href="#" className="w-10 h-10 bg-[#1E1538] rounded-lg flex items-center justify-center hover:bg-[rgba(124,58,237,0.2)] transition">
              𝕏
            </a>
            <a href="#" className="w-10 h-10 bg-[#1E1538] rounded-lg flex items-center justify-center hover:bg-[rgba(124,58,237,0.2)] transition">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
