import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isSignedIn, role, signOut } = useAuth();
  const location = useLocation();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);

  const categories = [
    "Web Development",
    "Mobile Apps",
    "Data Science",
    "AI/ML",
    "Design",
    "Business"
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-[#1E1538] border-b border-[rgba(124,58,237,0.2)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-[#F3F0FF] font-bold text-lg hidden sm:inline">SkillStack</span>
          </Link>

          {/* Center: Search & Browse */}
          <div className="flex-1 mx-6 flex items-center gap-4 hidden md:flex">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] rounded-full px-4 py-2 pl-10 text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED] transition text-sm"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A89BC6]">🔍</span>
              </div>
            </div>

            {/* Browse Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setBrowseOpen(true)}
                onMouseLeave={() => setBrowseOpen(false)}
                className={`px-3 py-2 rounded-lg transition ${
                  browseOpen
                    ? "text-[#7C3AED] bg-[rgba(124,58,237,0.1)]"
                    : "text-[#A89BC6] hover:text-[#F3F0FF]"
                }`}
              >
                Browse ▼
              </button>

              {browseOpen && (
                <div
                  onMouseEnter={() => setBrowseOpen(true)}
                  onMouseLeave={() => setBrowseOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-lg shadow-xl overflow-hidden"
                >
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/browse?category=${cat}`}
                      className="block px-4 py-2 text-[#A89BC6] hover:bg-[rgba(124,58,237,0.1)] hover:text-[#F3F0FF] transition text-sm"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Icons & Auth */}
          <div className="flex items-center gap-4">
            {/* Wishlist Icon */}
            <button
              title="Wishlist"
              className="text-[#A89BC6] hover:text-[#F59E0B] transition text-xl"
            >
              🤍
            </button>

            {/* Cart Icon with Badge */}
            <div className="relative">
              <button
                title="Shopping Cart"
                className="text-[#A89BC6] hover:text-[#F59E0B] transition text-xl"
              >
                🛒
              </button>
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#F59E0B] text-[#0F0A1E] text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Auth Section */}
            {!isSignedIn ? (
              <div className="flex items-center gap-2 ml-2">
                <Link
                  to="/signin"
                  className="px-3 py-1.5 text-[#A89BC6] hover:text-[#F3F0FF] transition text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-1.5 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition text-sm font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3 ml-2">
                {/* Notification Bell */}
                <div className="relative">
                  <button
                    title="Notifications"
                    className="text-[#A89BC6] hover:text-[#F59E0B] transition text-lg"
                  >
                    🔔
                  </button>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>

                {/* Avatar Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setAvatarOpen(!avatarOpen)}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] flex items-center justify-center text-white font-bold hover:opacity-80 transition"
                  >
                    P
                  </button>

                  {avatarOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-xl shadow-2xl overflow-hidden animate-slide-up">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-[rgba(124,58,237,0.2)]">
                        <p className="text-[#F3F0FF] font-semibold">👤 Priya Sharma</p>
                        <p className="text-[#A89BC6] text-sm">priya@email.com</p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link
                          to="/profile"
                          onClick={() => setAvatarOpen(false)}
                          className="block px-4 py-2 text-[#A89BC6] hover:bg-[rgba(124,58,237,0.1)] hover:text-[#F3F0FF] transition text-sm"
                        >
                          📚 My Learning
                        </Link>
                        <Link
                          to="/wishlist"
                          onClick={() => setAvatarOpen(false)}
                          className="block px-4 py-2 text-[#A89BC6] hover:bg-[rgba(124,58,237,0.1)] hover:text-[#F3F0FF] transition text-sm"
                        >
                          ❤️ Wishlist
                        </Link>
                        <Link
                          to="/certificates"
                          onClick={() => setAvatarOpen(false)}
                          className="block px-4 py-2 text-[#A89BC6] hover:bg-[rgba(124,58,237,0.1)] hover:text-[#F3F0FF] transition text-sm"
                        >
                          🏆 Certificates
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setAvatarOpen(false)}
                          className="block px-4 py-2 text-[#A89BC6] hover:bg-[rgba(124,58,237,0.1)] hover:text-[#F3F0FF] transition text-sm"
                        >
                          ⚙️ Settings
                        </Link>

                        {role === "admin" && (
                          <Link
                            to="/admin/courses"
                            onClick={() => setAvatarOpen(false)}
                            className="block px-4 py-2 text-[#F59E0B] hover:bg-[rgba(245,158,11,0.1)] transition text-sm font-semibold border-t border-[rgba(124,58,237,0.2)] mt-2 pt-2"
                          >
                            🛡️ Admin Panel
                          </Link>
                        )}
                      </div>

                      {/* Logout */}
                      <div className="border-t border-[rgba(124,58,237,0.2)]">
                        <button
                          onClick={() => {
                            signOut();
                            setAvatarOpen(false);
                          }}
                          className="w-full px-4 py-2 text-red-400 hover:bg-red-900/20 transition text-sm font-semibold"
                        >
                          🚪 Log Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
