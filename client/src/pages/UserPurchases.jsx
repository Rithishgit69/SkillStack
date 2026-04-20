import { useEffect, useState } from "react";
import { getUserPurchases, getCourses } from "../services";
import { Link } from "react-router-dom";

function UserPurchases() {
  const [purchases, setPurchases] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const purchasesData = await getUserPurchases();
      const coursesData = await getCourses();
      setPurchases(purchasesData.courses || []);
      setAllCourses(coursesData);
      setLoading(false);
    }
    fetchData();
  }, []);

  function getCourse(courseId) {
    return allCourses.find((c) => c._id === courseId);
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-[#A89BC6]">Loading your courses...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-[#F3F0FF] mb-2">My Learning Path</h1>
        <p className="text-[#A89BC6]">Continue your learning journey</p>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto">
        {purchases.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-[#F3F0FF] mb-2">No courses yet</h2>
            <p className="text-[#A89BC6] mb-6">Start learning by enrolling in a course</p>
            <Link 
              to="/"
              className="inline-block px-6 py-3 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] font-semibold transition"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchases.map((purchase) => {
              const course = getCourse(purchase.courseId);
              if (!course) return null;
              return (
                <div
                  key={purchase._id}
                  className="bg-[#1E1538] border border-[rgba(124,58,237,0.18)] rounded-xl overflow-hidden hover:border-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition group"
                >
                  {/* Course Image */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/40">
                    <img
                      src={course.imageURL}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x200?text=" + encodeURIComponent(course.title);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1E] to-transparent"></div>
                  </div>

                  {/* Course Info */}
                  <div className="p-5 space-y-4">
                    <h3 className="text-lg font-bold text-[#F3F0FF] line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-[#A89BC6] text-sm line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-[rgba(124,58,237,0.2)]">
                      <span className="text-[#F59E0B] font-bold">✓ Enrolled</span>
                      <span className="text-2xl font-bold text-[#F59E0B]">
                        ${course.price}
                      </span>
                    </div>

                    <button className="w-full bg-[#7C3AED] text-[#F3F0FF] py-2 rounded-lg hover:bg-[#6D28D9] font-semibold transition">
                      Start Learning
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPurchases;
