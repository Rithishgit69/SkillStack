export default function Trending() {
  const trendingCourses = [
    { title: "Generative AI & LLMs Masterclass", students: "9.8k", rating: 4.9, price: "₹1799" },
    { title: "Complete React & Next.js Developer 2025", students: "48.2k", rating: 4.9, price: "₹1299" },
    { title: "Cybersecurity & Ethical Hacking", students: "14.3k", rating: 4.7, price: "₹1299" },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-2">🔥 Trending This Week</h1>
          <p className="text-[#A89BC6]">Most popular courses gaining momentum right now</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trendingCourses.map((course, idx) => (
            <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl overflow-hidden hover:border-[#7C3AED] transition group">
              <div className="h-40 bg-gradient-to-br from-[#7C3AED]/40 to-[#F59E0B]/40 relative">
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🔥 TRENDING
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F3F0FF] line-clamp-2">{course.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#A89BC6] text-sm">👥 {course.students} students</span>
                  <span className="text-[#F59E0B]">★ {course.rating}</span>
                </div>
                <div className="pt-4 border-t border-[rgba(124,58,237,0.2)] flex items-center justify-between">
                  <span className="text-xl font-bold text-[#F59E0B]">{course.price}</span>
                  <button className="px-4 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition text-sm font-semibold">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
