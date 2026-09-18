import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Supabase",
  "Git & GitHub",
  "React Native",
  "Canva",
  "MY SQL",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="!py-24 flex items-center justify-center w-full"
    >
      <div className="!mx-auto max-w-7xl !px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 dark:text-[#1b2fbf]">
          My Skills
        </p>

        <h2 className="!mt-4 text-4xl font-bold dark:text-black">
          Technologies I work with
        </h2>

        <div className="!mt-12 flex flex-wrap gap-4 cursor-pointer">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 dark:border-black/10 dark:bg-black/10 bg-white/[0.03] !px-6 !py-4 text-gray-300 dark:text-gray-400 transition hover:-translate-y-1 hover:border-cyan-400/40 dark:hover:border-[#1b2fbf]/40 dark:hover:text-[#1b2fbf]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
