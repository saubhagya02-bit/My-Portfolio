import ScrollReveal from "../animations/ScrollReveal";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        invert: true,
      },
    ],
  },
  {
    category: "Other Development Tools",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
            Skills
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-12">
            Here are the technologies and tools I work with
          </p>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillsData.map((group, index) => (
            <ScrollReveal key={index}>
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-gray-50 dark:bg-white/5 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 h-full">
                <h3 className="text-base font-bold text-black dark:text-white mb-5">
                  {group.category}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-white/10 border border-gray-100 dark:border-gray-700 group-hover:border-green-400 transition-colors duration-300 p-1">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className={`w-8 h-8 object-contain ${
                            skill.invert
                              ? "invert-0 dark:invert brightness-50 dark:brightness-100"
                              : ""
                          }`}
                        />
                      </div>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
