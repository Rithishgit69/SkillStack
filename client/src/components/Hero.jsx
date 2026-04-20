import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#F3F0FF] leading-tight">
            Learn <span className="bg-gradient-to-r from-[#7C3AED] to-[#F59E0B] bg-clip-text text-transparent">without limits</span>
          </h1>
          <p className="text-xl text-[#A89BC6]">
            Access thousands of expert-led courses and transform your career today
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <Link 
              to="/signup/user"
              className="px-8 py-3 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold"
            >
              Start Learning
            </Link>
            <button className="px-8 py-3 border border-[rgba(124,58,237,0.3)] text-[#F3F0FF] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition font-semibold">
              Explore Courses
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div>
              <div className="text-3xl font-bold text-[#F59E0B]">50K+</div>
              <div className="text-[#A89BC6]">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F59E0B]">500+</div>
              <div className="text-[#A89BC6]">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F59E0B]">95%</div>
              <div className="text-[#A89BC6]">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Right Column - Featured Course Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-[#F59E0B]/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-2xl p-6 space-y-4 animate-glow-pulse">
            <div className="w-full h-40 bg-gradient-to-br from-[#7C3AED] to-[#F59E0B] rounded-xl"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#F3F0FF]">Advanced Web Development</h3>
              <p className="text-[#A89BC6]">Master React, Node.js, and modern web architecture</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#F59E0B]">$99</span>
              <span className="text-[#A89BC6]">⭐ 4.9</span>
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-[#F59E0B]/20 text-[#F59E0B] px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              Bestseller
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
