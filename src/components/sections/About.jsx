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
                Hi, I’m Ushani Saubhagya, a Software Engineering undergraduate
                at the University of Kelaniya with a strong interest in
                full-stack development, backend engineering, and DevOps. I enjoy
                turning ideas into practical software by designing responsive
                interfaces, building reliable APIs, and working with databases
                and modern application architectures.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                My experience includes building applications with React,
                TypeScript, Node.js, Java, Spring Boot, MongoDB, and MySQL. I
                have also explored microservices, authentication, REST APIs,
                real-time applications, and containerized systems using Docker.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                Alongside software development, I’m developing my skills in
                DevOps and cloud technologies, including Docker, GitHub Actions,
                AWS, CI/CD, and deployment automation. I’m particularly
                interested in building software that is not only functional,
                but also scalable, maintainable, and reliable.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                I learn best by building real-world projects, solving technical
                problems, and continuously improving my engineering practices.
                My goal is to grow into a well-rounded Software Engineer who
                can contribute across development, backend systems, and cloud
                infrastructure.
              </p>
            </FadeIn>
          </div>

          {/* Skills / Focus Areas */}
          <div className="grid gap-6">
            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2">
                  Full-Stack Engineering
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Building complete web applications with React, TypeScript,
                  Node.js, Express, Java, Spring Boot, MongoDB, and MySQL.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2">
                  Backend & Microservices
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Designing REST APIs, authentication systems, database
                  integrations, and exploring scalable microservice-based
                  architectures.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2">
                  DevOps & Cloud
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Exploring Docker, GitHub Actions, CI/CD, AWS, containerized
                  deployments, and cloud infrastructure to build reliable and
                  scalable applications.
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
