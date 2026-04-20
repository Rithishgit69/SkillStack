export default function Certificates() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">🏆 Professional Certificates</h1>
          <p className="text-[#A89BC6] text-lg">Earn recognized credentials that boost your career</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "How Certificates Work",
              icon: "✓",
              points: [
                "Complete all course modules and assignments",
                "Pass the final assessment with 70%+ score",
                "Receive a digital certificate upon completion",
                "Add certificate to your professional profile",
                "Share your achievement on social media"
              ]
            },
            {
              title: "Certificate Benefits",
              icon: "⭐",
              points: [
                "Recognized by industry professionals",
                "Shareable on LinkedIn and job profiles",
                "Downloadable as PDF with unique ID",
                "Verification link for employers",
                "Part of your learning portfolio"
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{section.icon}</div>
                <h3 className="text-2xl font-bold text-[#F3F0FF]">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.points.map((point, pidx) => (
                  <li key={pidx} className="flex items-start gap-3">
                    <span className="text-[#7C3AED] mt-1">→</span>
                    <span className="text-[#A89BC6]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sample Certificates */}
        <div>
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-8 text-center">Sample Certificate Designs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] rounded-xl p-8 h-64 flex items-center justify-center text-center">
                <div>
                  <div className="text-white text-4xl mb-2">🎓</div>
                  <p className="text-white font-bold">Certificate of Completion</p>
                  <p className="text-white/80 text-sm mt-2">Professional Achievement Verified</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
