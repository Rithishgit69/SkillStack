export default function Press() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">📰 Press Kit</h1>
          <p className="text-[#A89BC6]">Resources and information for media inquiries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* About Section */}
          <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#F3F0FF] mb-4">About SkillStack</h3>
            <p className="text-[#A89BC6] leading-relaxed mb-4">
              SkillStack is an online learning platform democratizing education for learners worldwide. Founded in 2020, we've grown to serve 50,000+ active learners across 1000+ courses.
            </p>
            <div className="space-y-2 text-[#A89BC6]">
              <p>📍 <strong>HQ:</strong> San Francisco, CA</p>
              <p>📊 <strong>Team:</strong> 50+ professionals</p>
              <p>🌍 <strong>Reach:</strong> 150+ countries</p>
            </div>
          </div>

          {/* Media Assets */}
          <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#F3F0FF] mb-4">Download Media Assets</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-[rgba(124,58,237,0.1)] hover:bg-[rgba(124,58,237,0.2)] text-[#7C3AED] rounded-lg transition font-semibold">
                📥 Logo Pack (PNG, SVG)
              </button>
              <button className="w-full px-4 py-3 bg-[rgba(124,58,237,0.1)] hover:bg-[rgba(124,58,237,0.2)] text-[#7C3AED] rounded-lg transition font-semibold">
                📄 Brand Guidelines
              </button>
              <button className="w-full px-4 py-3 bg-[rgba(124,58,237,0.1)] hover:bg-[rgba(124,58,237,0.2)] text-[#7C3AED] rounded-lg transition font-semibold">
                📸 Product Screenshots
              </button>
            </div>
          </div>
        </div>

        {/* Recent Press */}
        <h2 className="text-2xl font-bold text-[#F3F0FF] mb-6">Recent Press Mentions</h2>
        <div className="space-y-4">
          {[
            { outlet: "TechCrunch", title: "SkillStack Raises $5M Series A", date: "March 2024" },
            { outlet: "Forbes", title: "Top 10 EdTech Startups to Watch", date: "February 2024" },
            { outlet: "The Verge", title: "How AI is Changing Online Learning", date: "January 2024" },
          ].map((article, idx) => (
            <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-6 hover:border-[#7C3AED] transition">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[#7C3AED] font-semibold text-sm">{article.outlet}</p>
                  <p className="text-[#F3F0FF] font-bold mt-1">{article.title}</p>
                </div>
                <span className="text-[#A89BC6] text-sm">{article.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-[#7C3AED]/20 to-[#F59E0B]/20 border border-[rgba(124,58,237,0.3)] rounded-xl p-8 mt-12 text-center">
          <h3 className="text-xl font-bold text-[#F3F0FF] mb-2">Press Inquiries?</h3>
          <p className="text-[#A89BC6] mb-4">Contact our PR team at press@skillstack.com</p>
          <button className="px-6 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
