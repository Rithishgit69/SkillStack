export default function Categories() {
  const categories = [
    { icon: "💻", title: "Web Development", courses: 234, color: "from-blue-600 to-blue-400" },
    { icon: "📱", title: "Mobile Apps", courses: 156, color: "from-purple-600 to-purple-400" },
    { icon: "📊", title: "Data Science", courses: 189, color: "from-green-600 to-green-400" },
    { icon: "🤖", title: "AI/ML", courses: 142, color: "from-pink-600 to-pink-400" },
    { icon: "🎨", title: "Design", courses: 98, color: "from-indigo-600 to-indigo-400" },
    { icon: "💼", title: "Business", courses: 167, color: "from-yellow-600 to-yellow-400" },
    { icon: "☁️", title: "Cloud Computing", courses: 112, color: "from-cyan-600 to-cyan-400" },
    { icon: "🔒", title: "Cybersecurity", courses: 84, color: "from-red-600 to-red-400" },
    { icon: "🎮", title: "Game Development", courses: 76, color: "from-orange-600 to-orange-400" },
    { icon: "🎬", title: "Video Production", courses: 65, color: "from-rose-600 to-rose-400" },
    { icon: "📚", title: "Digital Marketing", courses: 143, color: "from-amber-600 to-amber-400" },
    { icon: "🏭", title: "IT Operations", courses: 87, color: "from-slate-600 to-slate-400" },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">Explore by Category</h1>
          <p className="text-[#A89BC6]">Choose from 1000+ courses across 12 different categories</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#1E1538] to-[#0F0A1E] border border-[rgba(124,58,237,0.2)] rounded-xl p-8 hover:border-[#7C3AED] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] transition group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{cat.icon}</div>
              <h3 className="text-xl font-bold text-[#F3F0FF] mb-2 group-hover:text-[#7C3AED] transition">
                {cat.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-[#A89BC6] text-sm">{cat.courses} Courses</span>
                <span className="text-[#7C3AED] font-bold">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
