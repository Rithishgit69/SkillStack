export default function Blog() {
  const articles = [
    {
      title: "How to Learn Effectively: 5 Science-Backed Tips",
      excerpt: "Discover the most effective learning techniques backed by cognitive science research.",
      date: "April 15, 2024",
      readTime: "5 min read",
      tags: ["Learning", "Tips"],
      author: "Priya Sharma"
    },
    {
      title: "Top 10 In-Demand Tech Skills for 2024",
      excerpt: "Explore the most sought-after technical skills by employers this year.",
      date: "April 12, 2024",
      readTime: "8 min read",
      tags: ["Tech", "Career"],
      author: "Arjun Kumar"
    },
    {
      title: "The Future of AI in Education",
      excerpt: "How artificial intelligence is transforming the way we learn and teach.",
      date: "April 8, 2024",
      readTime: "6 min read",
      tags: ["AI", "Education"],
      author: "Sneha Menon"
    },
    {
      title: "Building Your First Web App: A Beginner's Guide",
      excerpt: "Step-by-step guide for complete beginners to create their first web application.",
      date: "April 5, 2024",
      readTime: "7 min read",
      tags: ["Web Dev", "Tutorial"],
      author: "Rahul Joshi"
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#F3F0FF] mb-4">📖 Our Blog</h1>
          <p className="text-[#A89BC6]">Tips, insights, and stories about learning and technology</p>
        </div>

        <div className="space-y-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-[#1E1538] border border-[rgba(124,58,237,0.2)] rounded-xl p-8 hover:border-[#7C3AED] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#F3F0FF] group-hover:text-[#7C3AED] transition flex-1">
                  {article.title}
                </h2>
                <span className="text-[#A89BC6] text-sm ml-4 whitespace-nowrap">{article.readTime}</span>
              </div>
              
              <p className="text-[#A89BC6] mb-4 leading-relaxed">{article.excerpt}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(124,58,237,0.1)]">
                <div className="flex gap-2">
                  {article.tags.map((tag, tidx) => (
                    <span key={tidx} className="text-xs px-3 py-1 bg-[rgba(124,58,237,0.2)] text-[#7C3AED] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[#A89BC6] text-sm">
                  {article.date} by <span className="text-[#F3F0FF]">{article.author}</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#7C3AED] text-[#F3F0FF] rounded-lg hover:bg-[#6D28D9] transition font-semibold">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
