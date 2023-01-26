import Link from "next/link";
import useDarkMode from "../utils/useDarkMode";
import MoonSVG from "./MoonSVG";
import SunSVG from "./SunSVG";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="bg-white dark:bg-black px-6 sticky top-0 z-20 transition-colors">
      <div className="flex justify-between items-center pt-2.5 font-serif border-b border-red-500 dark:border-purple-300 transition-colors">
        <Link href="/">
          <a className="text-xs sm:text-base md:text-xl uppercase tracking-wider transition-colors text-red-500 dark:text-purple-300 md:px-6 py-5 focus:outline-dotted outline-1 outline-black outline-offset-0">
            Camberwell College of Arts Type Foundry
          </a>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/about">
            <a className="uppercase tracking-wider text-xs sm:text-base transition-colors text-red-500 dark:text-purple-300 px-5 focus:outline-dotted outline-1 outline-black outline-offset-2">
              About
            </a>
          </Link>
          {typeof window !== "undefined" && (
            <button
              onClick={setDarkMode}
              className="uppercase tracking-wider transition-colors w-12 text-lg text-red-500 dark:text-purple-300 sm:text-2xl leading-none"
            >
              {darkMode ? <MoonSVG className="ml-1 -mt-0.5 w-4 h-5 fill-purple-300" /> : <SunSVG className="w-6 h-6 -mt-0.5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
