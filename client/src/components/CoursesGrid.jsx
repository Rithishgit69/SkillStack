import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { purchaseCourse } from "../services";
import { MOCK_COURSES } from "../data/mockCourses";

export function CoursesGrid({ courses = MOCK_COURSES }) {
  const { isSignedIn, role } = useAuth();
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredCourses = filter === "all" ? courses : courses.filter(c => c.category === filter);

  async function handleEnroll(courseId) {
    if (!isSignedIn || role !== "user") {
      setMessage("Please sign in as a student to enroll");
      return;
    }
    
    const res = await purchaseCourse(courseId);
    if (res.error) {
      setMessage(`Error: ${res.error}`);
    } else {
      setMessage("✓ Enrolled successfully!");
    }
    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl font-bold text-[#F3F0FF]">Featured Courses</h2>
          
          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes("Error") 
                ? "bg-red-900/30 text-red-400" 
                : "bg-green-900/30 text-green-400"
            }`}>
              {message}
            </div>
          )}

          {/* Filter Tabs */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg transition ${
                filter === "all"
                  ? "bg-[#7C3AED] text-[#F3F0FF]"
                  : "border border-[rgba(124,58,237,0.3)] text-[#A89BC6] hover:text-[#F3F0FF]"
              }`}
            >
              All Courses
            </button>
            {["Web Development", "Mobile Apps", "Data Science"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg transition ${
                  filter === cat
                    ? "bg-[#7C3AED] text-[#F3F0FF]"
                    : "border border-[rgba(124,58,237,0.3)] text-[#A89BC6] hover:text-[#F3F0FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#A89BC6] text-lg">No courses available yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Link
                to={`/courses/${course.id}`}
                key={course.id}
                className="block"
              >
                <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.18)] rounded-xl overflow-hidden hover:border-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-40 bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/40 overflow-hidden flex-shrink-0">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x200?text=" + encodeURIComponent(course.title);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E] to-transparent"></div>
                    
                    {course.bestseller && (
                      <div className="absolute top-3 left-3 bg-[#F59E0B]/90 text-[#0F0A1E] px-3 py-1 rounded-full text-xs font-bold">
                        BESTSELLER
                      </div>
                    )}
                    
                    <div className="absolute top-3 right-3 bg-[#7C3AED]/90 text-[#F3F0FF] px-3 py-1 rounded-full text-xs font-bold">
                      {course.level}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-[#F3F0FF] line-clamp-2 h-14 group-hover:text-[#7C3AED] transition">
                      {course.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-[#A89BC6] text-sm">by {course.instructor}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[#F59E0B]">★</span>
                        <span className="text-[#F59E0B] text-sm font-semibold">{course.rating}</span>
                        <span className="text-[#A89BC6] text-xs">({course.reviews.toLocaleString()})</span>
                      </div>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-[rgba(124,58,237,0.2)] mt-auto">
                      <div>
                        <span className="text-2xl font-bold text-[#F59E0B]">₹{course.price}</span>
                        {course.originalPrice > course.price && (
                          <span className="ml-2 text-[#A89BC6] line-through text-sm">₹{course.originalPrice}</span>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleEnroll(course.id);
                        }}
                        className="px-4 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold text-sm"
                      >
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
