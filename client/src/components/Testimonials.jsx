const testimonials = [
  {
    quote: "SkillStack transformed my career. The courses are comprehensive and the instructors are phenomenal.",
    author: "Sarah Chen",
    role: "Full Stack Developer"
  },
  {
    quote: "Best investment I made in my education. The quality of content is unmatched.",
    author: "Marcus Johnson",
    role: "Data Scientist"
  },
  {
    quote: "I went from zero to hero in web development thanks to these amazing courses.",
    author: "Emily Rodriguez",
    role: "Product Manager"
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F3F0FF] mb-4">What Learners Say</h2>
          <p className="text-[#A89BC6] text-lg">Join thousands of successful students</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={idx}
              className="bg-[#1E1538] border border-[rgba(124,58,237,0.18)] p-8 rounded-2xl space-y-4"
            >
              <p className="text-[#A89BC6] italic">"{test.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] rounded-full"></div>
                <div>
                  <div className="text-[#F3F0FF] font-semibold">{test.author}</div>
                  <div className="text-[#A89BC6] text-sm">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
