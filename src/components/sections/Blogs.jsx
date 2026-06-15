import ScrollReveal from "../animations/ScrollReveal";

const blogs = [
    {
    title: "Mastering Docker for Node.js",
    description:
      "A Complete Guide to Optimizing Node.js Docker Images with Multi-Stage Builds, Nginx Reverse Proxy, and AWS EC2 Free Tier Hosting.",
    image: "/Docker.jpg",
    date: "Sep 14, 2025",
    readTime: "3 min read",
    link: "https://medium.com/@saubhagyaushani03/mastering-docker-for-node-js-2e6b79e2f9c1",
  },
  {
    title: "REST API Design Best Practices Most Developers Still Get Wrong",
    description:
      "A practical guide to avoiding common mistakes and building scalable, clean APIs.",
    image: "/API.png",
    date: "May 29, 2026",
    readTime: "5 min read",
    link: "https://medium.com/@saubhagyaushani03/rest-api-design-best-practices-most-developers-still-get-wrong-9ec2014e4c9f",
  },
  {
    title: "Cloud Computing",
    description: "The Future of Technology",
    image: "/Cloud-computing.png",
    date: "Mar 4, 2026",
    readTime: "4 min read",
    link: "https://medium.com/@saubhagyaushani03/cloud-computing-db95f1037a1f",
  },
];

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
            Blogs
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            Thoughts, tutorials and insights on web development
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <ScrollReveal key={index}>
              <div className="flex flex-col h-full border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white dark:bg-white/5 hover:shadow-lg dark:hover:border-gray-600 transition-all duration-300">
                <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Date & Read time */}
                  <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      🕐 {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-black dark:text-white mb-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                    {blog.description}
                  </p>

                  {/* Read more */}
                  <button
                    onClick={() => window.open(blog.link, "_blank")}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-black dark:text-white hover:text-green-500 dark:hover:text-green-400 transition"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <button
              onClick={() =>
                window.open("https://medium.com/@saubhagyaushani03", "_blank")
              }
              className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white text-sm font-medium hover:border-green-500 dark:hover:border-green-400 hover:text-green-500 dark:hover:text-green-400 transition-all duration-300"
            >
              View All Posts
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Blogs;
