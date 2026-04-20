export default function Cookies() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">🍪 Cookie Policy</h1>
        <p className="text-[#A89BC6] mb-8">Last updated: April 20, 2024</p>

        <div className="space-y-8 text-[#A89BC6]">
          {[
            {
              title: "1. What Are Cookies?",
              content: "Cookies are small text files stored on your device that contain data about your browsing activity and preferences on SkillStack. We use them to enhance your experience."
            },
            {
              title: "2. Types of Cookies We Use",
              content: "Essential Cookies: Required for basic functionality (login, security). Analytics Cookies: Help us understand how you use our platform. Preference Cookies: Remember your settings and choices."
            },
            {
              title: "3. Third-Party Cookies",
              content: "We use cookies from services like Google Analytics and payment processors. These partners may also collect data according to their own policies."
            },
            {
              title: "4. How to Control Cookies",
              content: "You can control or delete cookies through your browser settings. Note that disabling essential cookies may affect platform functionality."
            },
            {
              title: "5. Cookie Consent",
              content: "By using SkillStack, you consent to our use of cookies as described in this policy. You can withdraw this consent anytime through your account settings."
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#F3F0FF] mb-3">{section.title}</h3>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Cookie Preferences */}
        <div className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-[#F3F0FF] mb-6">Cookie Preferences</h2>
          <div className="space-y-4">
            {[
              { name: "Essential Cookies", desc: "Required for platform operation", checked: true, disabled: true },
              { name: "Analytics Cookies", desc: "Help us improve our service", checked: true, disabled: false },
              { name: "Marketing Cookies", desc: "Personalize your experience", checked: false, disabled: false },
            ].map((cookie, idx) => (
              <label key={idx} className="flex items-center gap-4 p-4 bg-[rgba(124,58,237,0.1)] rounded-lg cursor-pointer hover:bg-[rgba(124,58,237,0.15)] transition">
                <input
                  type="checkbox"
                  checked={cookie.checked}
                  disabled={cookie.disabled}
                  className="w-5 h-5 rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-[#F3F0FF]">{cookie.name}</p>
                  <p className="text-sm text-[#A89BC6]">{cookie.desc}</p>
                </div>
              </label>
            ))}
          </div>
          <button className="mt-6 px-6 py-2 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
