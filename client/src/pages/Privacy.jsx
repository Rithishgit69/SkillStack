export default function Privacy() {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">Privacy Policy</h1>
        <p className="text-[#A89BC6] mb-8">Last updated: April 20, 2024</p>

        <div className="space-y-8 text-[#A89BC6]">
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly, such as when you create an account, enroll in courses, or contact us. This includes your name, email address, password, and payment information."
            },
            {
              title: "2. How We Use Your Information",
              content: "We use your information to provide and improve our services, process transactions, send transactional and promotional communications, and comply with legal obligations."
            },
            {
              title: "3. Data Security",
              content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
            },
            {
              title: "4. Cookies and Tracking",
              content: "We use cookies and similar tracking technologies to enhance your experience on our platform. You can control these settings through your browser preferences."
            },
            {
              title: "5. Third-Party Sharing",
              content: "We do not sell your personal information. We may share information with service providers who assist us in operating our platform."
            },
            {
              title: "6. Your Rights",
              content: "You have the right to access, correct, or delete your personal information. You can also opt-out of promotional communications at any time."
            },
            {
              title: "7. Changes to This Policy",
              content: "We may update this privacy policy from time to time. We will notify you of any changes by updating the 'Last updated' date."
            },
            {
              title: "8. Contact Us",
              content: "If you have questions about this privacy policy, please contact us at privacy@skillstack.com"
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
