import { useParams, useNavigate } from "react-router-dom";
import { MOCK_COURSES } from "../data/mockCourses";
import { useAuth } from "../context/AuthContext";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const course = MOCK_COURSES.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">Course Not Found</h1>
          <button
            onClick={() => navigate("/browse")}
            className="px-6 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition"
          >
            Browse Other Courses
          </button>
        </div>
      </div>
    );
  }

  const curriculum = [
    {
      section: "Section 1: Getting Started",
      lessons: [
        "Introduction to the course",
        "Prerequisites and setup",
        "Course resources and community"
      ]
    },
    {
      section: "Section 2: Core Concepts",
      lessons: [
        "Fundamental principles",
        "Best practices",
        "Common patterns"
      ]
    },
    {
      section: "Section 3: Advanced Topics",
      lessons: [
        "Complex scenarios",
        "Optimization techniques",
        "Real-world applications"
      ]
    },
    {
      section: "Section 4: Projects & Assessment",
      lessons: [
        "Capstone project",
        "Final assessment",
        "Certificate of completion"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              {course.bestseller && (
                <span className="inline-block px-3 py-1 bg-[#F59E0B] text-[#0F0A1E] text-xs font-bold rounded-full mb-3">
                  ⭐ BESTSELLER
                </span>
              )}
              <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">{course.title}</h1>
              <p className="text-lg text-[#A89BC6] mb-4">{course.category}</p>

              {/* Rating & Stats */}
              <div className="flex flex-wrap gap-6 mb-6 text-[#A89BC6]">
                <div className="flex items-center gap-2">
                  <span className="text-[#F59E0B]">★ {course.rating}</span>
                  <span>({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div>👥 {course.students.toLocaleString()} students</div>
                <div>📚 {course.duration}</div>
                <div>📊 {course.level}</div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-[#F3F0FF] mb-3">About Instructor</h4>
                <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {course.instructor[0]}
                  </div>
                  <div>
                    <p className="text-[#F3F0FF] font-semibold">{course.instructor}</p>
                    <p className="text-[#A89BC6] text-sm">Expert Instructor • {course.students.toLocaleString()}+ students</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#F3F0FF] mb-4">What You'll Learn</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Master core concepts and fundamentals",
                  "Build real-world projects from scratch",
                  "Understand best practices and patterns",
                  "Solve complex problems efficiently",
                  "Prepare for industry interviews",
                  "Get recognized with a certificate"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#A89BC6]">
                    <span className="text-[#7C3AED] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#F3F0FF] mb-6">Course Curriculum</h2>
              <div className="space-y-3">
                {curriculum.map((sec, idx) => (
                  <details key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-4 cursor-pointer hover:border-[#7C3AED] transition group">
                    <summary className="flex justify-between items-center font-semibold text-[#F3F0FF] group-hover:text-[#7C3AED]">
                      <span>{sec.section}</span>
                      <span>▶</span>
                    </summary>
                    <ul className="mt-4 space-y-2 text-[#A89BC6] ml-4">
                      {sec.lessons.map((lesson, lidx) => (
                        <li key={lidx} className="flex items-center gap-2">
                          <span className="text-[#7C3AED]">•</span>
                          <span>{lesson}</span>
                          <span className="text-xs text-[#A89BC6] ml-auto">15 min</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-2xl font-bold text-[#F3F0FF] mb-6">Student Reviews</h2>
              <div className="space-y-4">
                {[
                  { name: "Aditya Patel", rating: 5, text: "Outstanding course! Clear explanations and excellent projects." },
                  { name: "Priya Singh", rating: 5, text: "Best investment for learning this skill. Highly recommended!" },
                  { name: "Rahul Desai", rating: 4, text: "Great content, would love more advanced examples." }
                ].map((review, idx) => (
                  <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold text-[#F3F0FF]">{review.name}</p>
                      <span className="text-[#F59E0B]">★ {review.rating}</span>
                    </div>
                    <p className="text-[#A89BC6]">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            {/* Course Card */}
            <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6 sticky top-20 space-y-4">
              {/* Thumbnail */}
              <div className="w-full h-40 bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/40 rounded-lg overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>

              {/* Price */}
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-[#F59E0B]">{course.price}</span>
                  <span className="text-[#A89BC6] line-through">{course.originalPrice}</span>
                </div>
                <p className="text-[#7C3AED] text-sm">Best price for 1 year</p>
              </div>

              {/* Actions */}
              <button className="w-full px-4 py-3 bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] text-[#F3F0FF] rounded-lg font-bold hover:opacity-90 transition">
                Enroll Now
              </button>
              <button className="w-full px-4 py-3 border border-[rgba(124,58,237,0.3)] text-[#7C3AED] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition font-semibold">
                ❤️ Add to Wishlist
              </button>

              {/* What's Included */}
              <div className="bg-[rgba(124,58,237,0.1)] rounded-lg p-4 space-y-2">
                <p className="font-bold text-[#F3F0FF]">What's Included:</p>
                <ul className="text-[#A89BC6] text-sm space-y-1">
                  <li>✓ {course.duration} video content</li>
                  <li>✓ 4 sections with projects</li>
                  <li>✓ Lifetime access</li>
                  <li>✓ Certificate of completion</li>
                  <li>✓ Q&A support</li>
                  <li>✓ 30-day money-back guarantee</li>
                </ul>
              </div>

              {/* Share */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-[rgba(124,58,237,0.1)] text-[#7C3AED] rounded-lg hover:bg-[rgba(124,58,237,0.2)] transition text-sm font-semibold">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Students Also Bought */}
        <div>
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-6">Students Also Bought</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {MOCK_COURSES.slice(0, 4).map(c => (
              <div key={c.id} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg overflow-hidden hover:border-[#7C3AED] transition group cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/40 overflow-hidden">
                  <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition" />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-[#F3F0FF] text-sm line-clamp-2">{c.title}</h4>
                  <p className="text-[#A89BC6] text-xs">{c.instructor}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#F59E0B] font-bold">{c.price}</span>
                    <span className="text-[#F59E0B]">★ {c.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
