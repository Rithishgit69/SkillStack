import { Link } from "react-router-dom";

export default function Browse() {
  const categories = [
    { name: "Web Development", icon: "💻", courses: 234 },
    { name: "Mobile Apps", icon: "📱", courses: 156 },
    { name: "Data Science", icon: "📊", courses: 189 },
    { name: "AI/ML", icon: "🤖", courses: 142 },
    { name: "Design", icon: "🎨", courses: 98 },
    { name: "Business", icon: "💼", courses: 167 },
  ];

  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">Discover Courses</h1>
        <p className="text-[#A89BC6] text-lg">Browse through 1000+ courses across different categories</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="md:col-span-1">
          <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6 sticky top-20">
            <h3 className="text-lg font-bold text-[#F3F0FF] mb-4">Filters</h3>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-[#F3F0FF] mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.name} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#A89BC6] text-sm">{cat.name}</span>
                    <span className="text-[#A89BC6] text-xs ml-auto">({cat.courses})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-[#F3F0FF] mb-3">Level</h4>
              <div className="space-y-2">
                {levels.map((level) => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-[#A89BC6] text-sm">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="text-sm font-semibold text-[#F3F0FF] mb-3">Price Range</h4>
              <input type="range" min="0" max="2000" className="w-full" />
              <div className="flex justify-between text-[#A89BC6] text-xs mt-2">
                <span>₹0</span>
                <span>₹2000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Category Grid */}
        <div className="md:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/browse?category=${category.name}`}
                className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-8 hover:border-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-[#F3F0FF] group-hover:text-[#7C3AED] transition">{category.name}</h3>
                <p className="text-[#A89BC6] text-sm mt-2">{category.courses} Courses</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
