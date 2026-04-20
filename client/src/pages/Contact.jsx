export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">Contact Us</h1>
          <p className="text-[#A89BC6]">Have questions? We'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-8">
            <h3 className="text-lg font-bold text-[#F3F0FF] mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED]"
              />
              <select className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] focus:outline-none focus:border-[#7C3AED]">
                <option className="text-[#A89BC6]">Select Subject</option>
                <option className="text-[#A89BC6]">Course Related</option>
                <option className="text-[#A89BC6]">Technical Support</option>
                <option className="text-[#A89BC6]">Business Inquiry</option>
                <option className="text-[#A89BC6]">Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                className="w-full bg-[#0F0A1E] border border-[rgba(124,58,237,0.2)] px-4 py-2 rounded-lg text-[#F3F0FF] placeholder-[#A89BC6]/50 focus:outline-none focus:border-[#7C3AED] h-32"
              />
              <button className="w-full bg-[#7C3AED] text-[#F3F0FF] py-2 rounded-lg hover:bg-[#6D28D9] transition font-semibold">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: "📧", title: "Email", content: "support@skillstack.com" },
              { icon: "📱", title: "Phone", content: "+1 (555) 123-4567" },
              { icon: "📍", title: "Office", content: "123 Tech Street, San Francisco, CA 94102" },
              { icon: "🕒", title: "Hours", content: "Monday - Friday, 9 AM - 6 PM PST" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <p className="text-[#F3F0FF] font-semibold">{item.title}</p>
                    <p className="text-[#A89BC6] text-sm">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
