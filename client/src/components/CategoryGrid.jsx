const categories = [
  { name: "Web Development", icon: "💻", count: 245 },
  { name: "Mobile Apps", icon: "📱", count: 189 },
  { name: "Data Science", icon: "📊", count: 156 },
  { name: "AI & ML", icon: "🤖", count: 98 },
  { name: "Design", icon: "🎨", count: 203 },
  { name: "Business", icon: "💼", count: 127 },
];

export function CategoryGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F3F0FF] mb-12">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="bg-[#1E1538] border border-[rgba(124,58,237,0.18)] p-6 rounded-2xl text-center hover:border-[#7C3AED] hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition">{cat.icon}</div>
              <h3 className="text-[#F3F0FF] font-semibold mb-1">{cat.name}</h3>
              <p className="text-[#A89BC6] text-sm">{cat.count} courses</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
