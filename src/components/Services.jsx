import React from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern and responsive websites built with React and modern frontend technologies.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "High-converting landing pages with clean UI, responsive layouts and strong visual hierarchy.",
  },
  {
    number: "03",
    title: "UI Development",
    description:
      "Pixel-perfect and reusable interfaces using Tailwind CSS and component-based architecture.",
  },
  {
    number: "04",
    title: "Web Applications",
    description:
      "Dynamic and interactive web applications with React, state management and API integration.",
  },
  {
    number: "05",
    title: "React Native Frontend",
    description:
      "Cross-platform mobile applications with React Native, reusable components and responsive design.",
  },
  {
    number: "06",
    title: "Canva Design",
    description:
      "Visually appealing graphics and designs for social media, presentations and marketing materials.",
  },
];

const Services = () => {
  return (
    <section className="border-y border-white/10 !py-24">
      <div className="!mx-auto max-w-7xl !px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 dark:text-[#1b2fbf]">
          Services
        </p>

        <h2 className="mt-4 text-4xl font-bold dark:text-black">
          What I can do for you
        </h2>

        <div className="!mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl border border-white/10 dark:border-black/10 bg-white/[0.02] dark:bg-black/10 !p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 dark:hover:border-[#1b2fbf]/30"
            >
              <span className="text-md text-cyan-400 dark:text-[#1b2fbf]">
                {service.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold dark:text-black">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500 dark:text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
