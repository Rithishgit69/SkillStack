export default function Careers() {
  const jobs = [
    { role: "Senior Full-Stack Developer", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
    { role: "Product Manager", dept: "Product", location: "Remote", type: "Full-time" },
    { role: "Educational Content Creator", dept: "Content", location: "Remote", type: "Full-time" },
    { role: "DevOps Engineer", dept: "Engineering", location: "San Francisco, CA", type: "Full-time" },
    { role: "UX/UI Designer", dept: "Design", location: "Remote", type: "Full-time" },
    { role: "Data Analyst", dept: "Analytics", location: "San Francisco, CA", type: "Full-time" },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">Join Our Team 🚀</h1>
          <p className="text-[#A89BC6] text-lg">Help us build the future of online education</p>
        </div>

        {/* Company Culture Card */}
        <div className="bg-gradient-to-r from-[#7C3AED]/20 to-[#F59E0B]/20 border border-[rgba(124,58,237,0.3)] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-4">Why Join SkillStack?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-[#A89BC6]">
            <div>✨ Work on products used by 50K+ learners</div>
            <div>💡 Innovate in the edtech space</div>
            <div>🌍 Remote-friendly, global team</div>
            <div>📈 Competitive salary & benefits</div>
            <div>🎓 Continuous learning & growth</div>
            <div>🤝 Collaborative, supportive culture</div>
          </div>
        </div>

        {/* Open Positions */}
        <h2 className="text-2xl font-bold text-[#F3F0FF] mb-6">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-6 hover:border-[#7C3AED] hover:bg-[#1a0f38] transition group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#F3F0FF] group-hover:text-[#7C3AED] transition mb-2">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-[#A89BC6]">
                    <span>🏢 {job.dept}</span>
                    <span>📍 {job.location}</span>
                    <span className="px-2 py-1 bg-[rgba(124,58,237,0.1)] text-[#7C3AED] rounded">
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
