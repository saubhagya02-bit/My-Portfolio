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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <FadeIn>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hello! I’m Ushani, a third-year Software Engineering
                undergraduate at the University of Kelaniya. My academic journey
                has provided me with a strong foundation in software development
                principles and a growing passion for building impactful
                technology. As a Full-Stack Developer, I enjoy working across
                both frontend and backend, creating responsive user interfaces
                with React and developing efficient, scalable server-side
                solutions using MongoDB, MySQL, and the MERN stack. I am also
                expanding my skills into DevOps, exploring tools like Docker and
                AWS to enhance deployment and scalability.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                I enjoy solving real-world problems and continuously improving
                my skills through hands-on projects, research, and
                collaboration.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6">
            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Building responsive and modern user interfaces using React,
                  Tailwind CSS, and JavaScript.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  Backend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Developing REST APIs and managing databases using Node.js,
                  Express, and MySQL.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-green-500 dark:hover:border-green-400 transition">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  Problem Solving
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Applying logical thinking and algorithms to solve real-world
                  challenges efficiently.
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
