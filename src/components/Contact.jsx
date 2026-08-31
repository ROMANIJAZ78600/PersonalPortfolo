const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-white/10 dark:border-black/10 !py-24"
    >
      <div className="!mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 dark:text-[#1b2fbf]">
          Contact
        </p>

        <h2 className="!mt-4 text-4xl font-bold md:text-6xl dark:text-black">
          Let's build something
          <span className="block text-gray-500">great together.</span>
        </h2>

        <p className="!mx-auto !mt-6 max-w-xl text-gray-400 dark:text-gray-600">
          Have a project in mind? Send me a message and let's discuss how I can
          help.
        </p>

        <a
          href="mailto:your@email.com"
          className="!mt-8 inline-block rounded-full bg-cyan-400 dark:bg-[#1b2fbf] dark:text-white !px-8 !py-4 font-semibold text-black transition hover:bg-cyan-300 dark:hover:bg-[#1b2fbf]"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
