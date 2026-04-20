import { Link } from "react-router-dom";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-[#1E1538] border border-[rgba(124,58,237,0.3)] rounded-2xl p-8 max-w-md w-full mx-4 animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A89BC6] hover:text-[#F3F0FF]"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export function LoginModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#F3F0FF]">Welcome Back</h2>
        
        <div className="space-y-4">
          <Link 
            to="/signin/user"
            onClick={onClose}
            className="block w-full p-4 border border-[rgba(124,58,237,0.3)] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition text-center text-[#F3F0FF] font-semibold"
          >
            Sign In as Student
          </Link>
          <Link 
            to="/signin/admin"
            onClick={onClose}
            className="block w-full p-4 border border-[rgba(124,58,237,0.3)] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition text-center text-[#F3F0FF] font-semibold"
          >
            Sign In as Instructor
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export function SignupModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#F3F0FF]">Join SkillStack</h2>
        
        <div className="space-y-4">
          <Link 
            to="/signup/user"
            onClick={onClose}
            className="block w-full p-4 border border-[rgba(124,58,237,0.3)] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition text-center text-[#F3F0FF] font-semibold"
          >
            Sign Up as Student
          </Link>
          <Link 
            to="/signup/admin"
            onClick={onClose}
            className="block w-full p-4 border border-[rgba(124,58,237,0.3)] rounded-lg hover:bg-[rgba(124,58,237,0.1)] transition text-center text-[#F3F0FF] font-semibold"
          >
            Sign Up as Instructor
          </Link>
        </div>
      </div>
    </Modal>
  );
}
