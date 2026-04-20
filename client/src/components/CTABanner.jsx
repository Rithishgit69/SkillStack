import { Link } from "react-router-dom";

export function CTABanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#7C3AED]/30 to-[#F59E0B]/30 border border-[rgba(124,58,237,0.3)] rounded-2xl p-12 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 to-[#F59E0B]/10 blur-2xl"></div>
          
          <div className="relative text-center space-y-6">
            <h2 className="text-4xl font-bold text-[#F3F0FF]">Ready to Transform Your Future?</h2>
            <p className="text-lg text-[#A89BC6]">Join thousands of learners and start your journey today</p>
            
            <div className="flex gap-4 justify-center pt-6">
              <Link 
                to="/signup/user"
                className="px-8 py-3 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold"
              >
                Get Started Free
              </Link>
              <button className="px-8 py-3 border border-[rgba(124,58,237,0.3)] text-[#F3F0FF] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
