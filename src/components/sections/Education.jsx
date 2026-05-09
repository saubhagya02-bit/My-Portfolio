import ScrollReveal from "../animations/ScrollReveal";

const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Kelaniya",
    period: "2024 - Present",
    grade: "CGPA: 3.38/4.0",
    description:
      "Specializing in Net-Centric Web Application Development, Data Science and Engineering Application, Business Engineering Applications and Health Informatic Engineering domains.",
  },
  {
    degree: "GCE Advanced Level",
    institution: "C. W. W. Kannangara Central College, Mathugama",
    period: "2013 - 2021",
    grade: "Z-Score: 1.4867",
    description: "Completed coursework in Mathematics, Chemistry and Physics.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white px-6 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
            Education
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {educationData.map((edu, index) => (
            <ScrollReveal key={index}>
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-gray-50 dark:bg-white/5 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-black dark:text-white max-w-xs">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <div className="flex justify-between items-center flex-wrap gap-2 mt-2">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.institution}
                  </p>
                  <span className="text-sm font-bold text-black dark:text-white">
                    {edu.grade}
                  </span>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-4" />

                <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
