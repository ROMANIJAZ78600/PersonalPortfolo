const Footer = () => {
  return (
    <footer className="border-t border-white/10 !py-8">
      <div className="!mx-auto flex max-w-7xl flex-col justify-between gap-4 !px-6 text-sm text-gray-300 sm:flex-row">
        <p>© {new Date().getFullYear()} Roman. All rights reserved.</p>

        <div className="flex gap-5">
          <a
            href="https://github.com/ROMANIJAZ78600"
            className="hover:text-white dark:hover:text-black"
          >
            GitHub
          </a>

          <a href="#" className="hover:text-white dark:hover:text-black">
            LinkedIn
          </a>

          <a href="#" className="hover:text-white dark:hover:text-black">
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
