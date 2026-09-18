import React from "react";

const About = () => {
  return (
    <section id="about" className="border-t border-white/10 !py-24">
      <div className="!mx-auto max-w-5xl !px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 dark:text-[#1b2fbf]">
          About Me
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl dark:text-black">
          I turn ideas into
          <span className="text-gray-300 dark:text-gray-400">
            {" "}
            real products.
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 dark:text-gray-400">
          I create responsive and user-friendly websites with a strong focus on
          clean code, modern UI and great user experience. My development stack
          includes React, JavaScript, Tailwind CSS, Node.js and Supabase.
        </p>

        <div className="!mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 dark:border-black/10 bg-white/[0.03] !p-6 dark:bg-[#1b2fbf]/10">
            <p className="text-3xl font-bold dark:text-gray-400">10+</p>
            <p className="mt-2 text-gray-300 dark:text-black">Projects</p>
          </div>

          <div className="rounded-2xl border border-white/10 dark:border-black/10 bg-white/[0.03] !p-6 dark:bg-[#1b2fbf]/10">
            <p className="text-3xl font-bold dark:text-gray-400">5+</p>
            <p className="mt-2 text-gray-300 dark:text-black">Technologies</p>
          </div>

          <div className="rounded-2xl border border-white/10 dark:border-black/10 bg-white/[0.03] !p-6 dark:bg-[#1b2fbf]/10">
            <p className="text-3xl font-bold dark:text-gray-400">100%</p>
            <p className="mt-2 text-gray-300 dark:text-black">Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
