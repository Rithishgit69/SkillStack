import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-[#F3F0FF]">Join SkillStack</h1>
          <p className="text-[#A89BC6]">Choose your role to get started</p>
        </div>

        <div className="space-y-4">
          {/* Student Signup */}
          <Link 
            to="/signup/user"
            className="block w-full p-6 border-2 border-[rgba(124,58,237,0.3)] rounded-xl hover:border-[#7C3AED] hover:bg-[rgba(124,58,237,0.1)] transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">👤</div>
              <div>
                <h3 className="text-lg font-bold text-[#F3F0FF]">Student</h3>
                <p className="text-[#A89BC6] text-sm">Learn from expert instructors</p>
              </div>
            </div>
          </Link>

          {/* Instructor Signup */}
          <Link 
            to="/signup/admin"
            className="block w-full p-6 border-2 border-[rgba(124,58,237,0.3)] rounded-xl hover:border-[#7C3AED] hover:bg-[rgba(124,58,237,0.1)] transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">👨‍🏫</div>
              <div>
                <h3 className="text-lg font-bold text-[#F3F0FF]">Instructor</h3>
                <p className="text-[#A89BC6] text-sm">Create and teach courses</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-[#A89BC6]">
            Already have an account?{" "}
            <Link to="/signin" className="text-[#7C3AED] hover:text-[#F59E0B] font-semibold transition">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
