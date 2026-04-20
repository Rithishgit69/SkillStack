import { userSignup } from "../services";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function UserSignup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = await userSignup({ firstName, lastName, email, password });
    setLoading(false);
    
    if (data.error) {
      setError(data.error);
    } else if (data.message === "User created successfully") {
      navigate("/signin/user");
    } else {
      setError(data.message || "Signup failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold text-[#F3F0FF]">Create Account</h1>
          <p className="text-[#A89BC6]">Start your learning journey</p>
        </div>

        <form onSubmit={handleOnSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-900/30 border border-red-700/50 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-[#A89BC6] font-medium mb-2 text-sm">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
              id="firstName"
              required
            />
          </div>

          <div>
            <label className="block text-[#A89BC6] font-medium mb-2 text-sm">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
              id="lastName"
              required
            />
          </div>

          <div>
            <label className="block text-[#A89BC6] font-medium mb-2 text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
              id="email"
              required
            />
          </div>

          <div>
            <label className="block text-[#A89BC6] font-medium mb-2 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
              id="password"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#7C3AED] text-[#F3F0FF] py-2 rounded-lg hover:bg-[#6D28D9] font-semibold transition disabled:bg-gray-700"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[#A89BC6] text-sm">
            Already have an account?{" "}
            <Link to="/signin/user" className="text-[#7C3AED] hover:text-[#F59E0B] font-semibold transition">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
