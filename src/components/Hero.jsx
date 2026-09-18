import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="flex items-center justify-between gap-[20px] w-full max-w-7xl !px-16">
        <div>
          <h1 className="text-3xl dark:text-black font-bold leading-tight sm:text-4xl lg:text-7xl">
            Roman Ijaz
          </h1>
          <p className="mb-5 text-sm font-medium uppercase text-cyan-400 dark:text-[#1b2fbf] tracking-[0.3em]">
            Web Developer
          </p>
          <h1 className="text-5xl dark:text-black font-bold leading-tight sm:text-6xl lg:text-7xl">
            Building
            <span className="block text-gray-300 dark:text-gray-400">
              Digital Experiences.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400 dark:text-gray-400">
            I'm Roman, a React.js and MERN Stack Web Developer from Lahore,
            focused on building modern, responsive, and high-performance web
            applications using React and modern technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/MyCv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-400 dark:bg-[#1b2fbf] dark:text-white !px-7 !py-3 font-semibold text-black transition hover:bg-cyan-300 dark:hover:bg-[#1b2fbf] dark:hover:text-white"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 dark:border-blue-600 dark:text-black dark:hover:text-[#1b2fbf] !px-7 !py-3 font-semibold transition hover:border-white/50 dark:hover:border-black"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Developer Card */}
        <div className="hidden justify-center md:flex">
          <div className="relative h-80 w-80 rounded-3xl border border-white/10 bg-white/[0.03] !p-6 shadow-2xl">
            <div className="flex h-full items-center justify-center !p-5 rounded-2xl border border-cyan-400/20 dark:border-[#1b2fbf]/40 bg-gradient-to-br dark:bg-gradient-to-br from-cyan-400/10 dark:from-[#1b2fbf]/40 to-transparent dark:to-transparent">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/036/498/120/small/ai-generated-3d-cartoon-character-a-confident-male-with-crossed-arms-isolated-on-transparent-background-png.png"
                alt="Roman Ijaz - Web Developer"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
