import FadeIn from "../animations/FadeIn";
import ScrollReveal from "../animations/ScrollReveal";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div>
            <FadeIn>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hi, I'm Ushani Saubhagya, a Software Engineering undergraduate
                at the University of Kelaniya passionate about building
                innovative, scalable, and practical software solutions. My
                primary focus is Full Stack Development, with growing interests
                in Artificial Intelligence and Machine Learning, DevOps, and
                Cybersecurity.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                I have hands-on experience developing full-stack applications
                using React, JavaScript, TypeScript, Node.js, Express.js,
                Python, Java, and Spring Boot. I work with relational and NoSQL
                databases such as PostgreSQL, MySQL, and MongoDB, and have
                explored RESTful APIs, microservices, authentication, real-time
                applications, and distributed systems.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                Beyond application development, I explore AI/ML technologies
                using Python, LLMs, and Retrieval-Augmented Generation (RAG) to
                build intelligent applications. I am also developing my DevOps
                skills through Docker, Git, CI/CD, cloud technologies, and
                deployment workflows, while continuously learning about
                cybersecurity and secure software development practices.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                I enjoy learning through hands-on projects, exploring emerging
                technologies, and solving real-world engineering challenges. My
                goal is to become a versatile Software Engineer capable of
                designing intelligent applications, developing reliable backend
                systems, and building secure, scalable infrastructure.
              </p>
            </FadeIn>
          </div>

          {/* Skills / Focus Areas */}
          <div className="grid gap-6">
            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2">
                  Full-Stack Development
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Developing responsive, end-to-end web applications using
                  React, JavaScript, TypeScript, Node.js, Express.js, Java, and
                  Spring Boot, with experience in MongoDB, MySQL, and
                  PostgreSQL.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2">
                  AI & Machine Learning
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Exploring AI-powered applications using Python, Large Language
                  Models (LLMs), Retrieval-Augmented Generation (RAG),
                  embeddings, and AI integrations to build intelligent software
                  solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2">
                  DevOps & Cloud Engineering
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Working with Docker, Git, GitHub Actions, CI/CD pipelines, and
                  cloud technologies while exploring container orchestration,
                  deployment automation, and scalable infrastructure.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
