import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const { isSignedIn, role } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#A89BC6] text-lg mb-4">Please sign in to view your profile</p>
          <Link to="/signin" className="text-[#7C3AED] hover:text-[#F59E0B] font-semibold transition">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Header Banner */}
      <div className="mb-12">
        <div className="h-40 bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] rounded-2xl relative mb-8">
          {/* Avatar Overlapping Banner */}
          <div className="absolute left-6 -bottom-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] border-4 border-[#0F0A1E] flex items-center justify-center text-6xl">
            👤
          </div>
        </div>

        <div className="ml-40 mt-4">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-1">Priya Sharma</h1>
          <p className="text-[#A89BC6] mb-4">priya@email.com • Member since January 2024</p>
          <button className="px-6 py-2 border border-[rgba(124,58,237,0.3)] text-[#A89BC6] rounded-lg hover:border-[#7C3AED] hover:text-[#F3F0FF] transition">
            ✏️ Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-2 mb-8 border-b border-[rgba(124,58,237,0.2)]">
          {["overview", "courses", "certificates", "settings"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold transition border-b-2 capitalize ${
                activeTab === tab
                  ? "text-[#7C3AED] border-[#7C3AED]"
                  : "text-[#A89BC6] border-transparent hover:text-[#F3F0FF]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Courses Enrolled", value: "12", icon: "📚" },
                { label: "Hours Learned", value: "156", icon: "⏱️" },
                { label: "Certificates", value: "5", icon: "🏆" },
                { label: "Streak Days", value: "23", icon: "🔥" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6 text-center hover:border-[#7C3AED] transition"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-2xl font-bold text-[#F3F0FF]">{stat.value}</p>
                  <p className="text-[#A89BC6] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Continue Learning */}
            <div>
              <h3 className="text-xl font-bold text-[#F3F0FF] mb-4">Continue Learning</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "React & Next.js", progress: 65, instructor: "Arjun Kumar" },
                  { title: "Python for Data Science", progress: 42, instructor: "Sneha Menon" }
                ].map((course, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6 hover:border-[#7C3AED] transition"
                  >
                    <h4 className="font-bold text-[#F3F0FF] mb-2">{course.title}</h4>
                    <p className="text-[#A89BC6] text-sm mb-4">by {course.instructor}</p>
                    <div className="w-full h-2 bg-[#0F0A1E] rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-[#7C3AED] to-[#F59E0B]"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <p className="text-[#F3F0FF] text-sm font-semibold">{course.progress}% Complete</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-bold text-[#F3F0FF] mb-4">Achievements</h3>
              <div className="flex flex-wrap gap-4">
                {["🌟", "🎯", "📚", "🚀", "💯"].map((badge, idx) => (
                  <div
                    key={idx}
                    className="w-16 h-16 bg-[#1E1538] border-2 border-[rgba(124,58,237,0.3)] rounded-full flex items-center justify-center text-3xl hover:border-[#7C3AED] transition cursor-pointer"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* My Courses Tab */}
        {activeTab === "courses" && (
          <div>
            <div className="flex gap-2 mb-6">
              {["In Progress", "Completed", "Wishlist"].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 bg-[rgba(124,58,237,0.1)] text-[#A89BC6] rounded-lg hover:bg-[rgba(124,58,237,0.2)] transition text-sm"
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl overflow-hidden hover:border-[#7C3AED] transition"
                >
                  <div className="h-32 bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/40" />
                  <div className="p-4">
                    <h4 className="font-bold text-[#F3F0FF] mb-2">Course Title</h4>
                    <p className="text-[#A89BC6] text-sm mb-3">Instructor Name</p>
                    <div className="w-full h-2 bg-[#0F0A1E] rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#F59E0B]" style={{width: "60%"}} />
                    </div>
                    <button className="w-full mt-3 px-4 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition text-sm font-semibold">
                      Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6 hover:border-[#7C3AED] transition"
              >
                <h4 className="text-lg font-bold text-[#F3F0FF] mb-2">React Mastery Certificate</h4>
                <p className="text-[#A89BC6] text-sm mb-4">Issued on March 15, 2024</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition text-sm font-semibold">
                    📥 Download PDF
                  </button>
                  <button className="flex-1 px-4 py-2 border border-[#7C3AED] text-[#7C3AED] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition text-sm font-semibold">
                    📤 Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6 max-w-2xl">
            {/* Edit Profile */}
            <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6">
              <h4 className="text-lg font-bold text-[#F3F0FF] mb-4">Edit Profile</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
                />
                <textarea
                  placeholder="Bio"
                  className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED] h-24"
                />
                <button className="w-full px-4 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Change Password */}
            <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6">
              <h4 className="text-lg font-bold text-[#F3F0FF] mb-4">Change Password</h4>
              <div className="space-y-4">
                <input type="password" placeholder="Current Password" className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]" />
                <input type="password" placeholder="New Password" className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]" />
                <input type="password" placeholder="Confirm Password" className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]" />
                <button className="w-full px-4 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold">
                  Update Password
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-red-400 mb-2">Danger Zone</h4>
              <p className="text-[#A89BC6] text-sm mb-4">Permanently delete your account and all data</p>
              <button className="w-full px-4 py-2 bg-red-900/50 text-red-400 border border-red-700/50 rounded-lg hover:bg-red-900/70 transition font-semibold">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
