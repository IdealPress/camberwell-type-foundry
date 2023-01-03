import Link from "next/link";
import useDarkMode from "../utils/useDarkMode";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="bg-white dark:bg-black px-6 sticky top-0 z-20 transition-colors">
      <div className="flex justify-between items-center pt-2.5 font-serif border-b border-black dark:border-white transition-colors">
        <Link href="/">
          <a className="text-xs sm:text-xl uppercase tracking-wider transition-colors dark:text-white  hover:text-gray-500 px-6 py-5 focus:outline-dotted outline-1 outline-black outline-offset-0">
            Camberwell College of Arts Type Foundry
          </a>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/about">
            <a className="uppercase tracking-wider text-xs sm:text-base transition-colors text-black dark:text-white px-5 focus:outline-dotted outline-1 outline-black outline-offset-2">
              About
            </a>
          </Link>
          {typeof window !== "undefined" && (
            <button
              onClick={setDarkMode}
              className="uppercase tracking-wider transition-colors w-12 text-lg text-black dark:text-white sm:text-2xl leading-none focus:outline-dotted outline-1 outline-black outline-offset-0"
            >
              {darkMode ? "☾" : "☀"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
