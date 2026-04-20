export default function About() {
  const team = [
    { name: "Priya Sharma", role: "CEO & Founder", avatar: "👩‍💼" },
    { name: "Arjun Kumar", role: "CTO", avatar: "👨‍💻" },
    { name: "Sneha Menon", role: "Lead Educator", avatar: "👩‍🏫" },
    { name: "Rahul Joshi", role: "Product Manager", avatar: "👨‍📊" },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-[#F3F0FF] mb-4">About SkillStack</h1>
        <p className="text-[#A89BC6] text-xl max-w-2xl mx-auto">
          We're on a mission to democratize education and empower learners worldwide
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Mission */}
        <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-4">Our Mission</h2>
          <p className="text-[#A89BC6] leading-relaxed">
            At SkillStack, we believe that quality education should be accessible to everyone, everywhere. 
            We're building a platform where expert instructors can share their knowledge and learners can 
            develop skills at their own pace.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🎯", title: "Quality First", desc: "Carefully curated courses by industry experts" },
            { icon: "🌍", title: "Accessible", desc: "Affordable education for learners worldwide" },
            { icon: "🚀", title: "Innovation", desc: "Continuously improving the learning experience" }
          ].map((value, idx) => (
            <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="font-bold text-[#F3F0FF] mb-2">{value.title}</h3>
              <p className="text-[#A89BC6] text-sm">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-6 text-center hover:border-[#7C3AED] transition">
                <div className="text-5xl mb-3">{member.avatar}</div>
                <h4 className="font-bold text-[#F3F0FF]">{member.name}</h4>
                <p className="text-[#A89BC6] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-8 text-center">Our Journey</h2>
          <div className="space-y-6">
            {[
              { year: "2020", event: "SkillStack Founded" },
              { year: "2021", event: "Reached 10,000 Learners" },
              { year: "2022", event: "500+ Courses Published" },
              { year: "2024", event: "50,000+ Active Learners" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-24 font-bold text-[#7C3AED]">{item.year}</div>
                <div className="pb-6 border-l border-[rgba(124,58,237,0.3)]">
                  <div className="w-3 h-3 bg-[#7C3AED] rounded-full -ml-2 mt-2 mb-2"></div>
                  <p className="text-[#F3F0FF]">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
