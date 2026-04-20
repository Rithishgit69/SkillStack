export default function Terms() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">Terms of Service</h1>
        <p className="text-[#A89BC6] mb-8">Last updated: April 20, 2024</p>

        <div className="space-y-8 text-[#A89BC6]">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing and using SkillStack, you accept and agree to be bound by the terms and provision of this agreement."
            },
            {
              title: "2. User Responsibilities",
              content: "You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities under your account."
            },
            {
              title: "3. Intellectual Property",
              content: "All course content, including videos, materials, and resources, are protected by copyright and other intellectual property rights. You may not reproduce or distribute without permission."
            },
            {
              title: "4. Refund Policy",
              content: "Refunds are available within 7 days of purchase if you haven't accessed more than 25% of the course content. After 7 days or 25% completion, courses are non-refundable."
            },
            {
              title: "5. Prohibited Activities",
              content: "You agree not to engage in harassment, illegal activities, or attempts to bypass security measures. Violation may result in account suspension."
            },
            {
              title: "6. Limitation of Liability",
              content: "SkillStack is provided 'as is' without warranties. We are not liable for indirect, incidental, or consequential damages."
            },
            {
              title: "7. Modification of Terms",
              content: "We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of the new terms."
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#F3F0FF] mb-3">{section.title}</h3>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
