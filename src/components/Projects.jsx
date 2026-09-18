const projects = [
  {
    title: "Real Estate Website",
    description:
      "Modern real estate platform with responsive UI and property listings.",
    tech: ["React", "Tailwind", "Node.js"],
    link: "https://real-estate-786.vercel.app/",
  },
  {
    title: "Trippy",
    description:
      "A travel website that provides information about various destinations and travel tips.",
    tech: ["React", "Vite", "Tailwind"],
    link: "https://trippy-lake.vercel.app/",
  },
  {
    title: "E commerce",
    description:
      "Fully functional e-commerce website with product catalog and shopping cart.",
    tech: ["React", "Tailwind", "Node.js", "expressJS"],
    link: "https://myshopo2.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="!py-24">
      <div className="!mx-auto max-w-7xl !px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 dark:text-[#1b2fbf]">
          Portfolio
        </p>

        <h2 className="!mt-4 text-4xl font-bold md:text-5xl dark:text-black">
          Selected Projects
        </h2>

        <div className="!mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 dark:border-black/10 bg-white/[0.03] dark:bg-black/10"
            >
              <div className="flex h-52 items-center justify-center bg-gradient-to-br dark:bg-gradient-to-br from-cyan-400/10 dark:from-[#1b2fbf]/40 to-transparent dark:to-transparent">
                <span className="text-5xl text-cyan-400/50 dark:text-[#1b2fbf]">
                  &lt;/&gt;
                </span>
              </div>

              <div className="!p-7">
                <h3 className="text-2xl font-semibold dark:text-black">
                  {project.title}
                </h3>

                <p className="!mt-3 text-gray-300">{project.description}</p>

                <div className="!mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/5 dark:bg-black/5 !px-3 !py-1 text-xs text-gray-300 dark:text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="!mt-6 inline-block text-sm font-medium text-cyan-400 dark:text-[#1b2fbf] hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
