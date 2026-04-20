const steps = [
  { 
    number: "01", 
    title: "Browse Courses", 
    description: "Explore thousands of courses from expert instructors"
  },
  { 
    number: "02", 
    title: "Enroll Now", 
    description: "Start learning with lifetime access to course materials"
  },
  { 
    number: "03", 
    title: "Get Certified", 
    description: "Complete and earn recognized certificates of completion"
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#F3F0FF] mb-4">How It Works</h2>
          <p className="text-[#A89BC6] text-lg">Get started with SkillStack in three simple steps</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Background number */}
              <div className="absolute inset-0 text-8xl font-bold text-[rgba(124,58,237,0.05)] -z-10">
                {step.number}
              </div>
              
              {/* Card */}
              <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.18)] p-8 rounded-2xl space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#F3F0FF]">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-[#F3F0FF]">{step.title}</h3>
                <p className="text-[#A89BC6]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
