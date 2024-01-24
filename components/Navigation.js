import Link from "next/link";
import useDarkMode from "../utils/useDarkMode";
import MoonSVG from "./MoonSVG";
import SunSVG from "./SunSVG";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="bg-neutral-50 dark:bg-black px-6 sticky top-0 z-20 transition-colors">
      <div className="flex justify-between items-center font-serif border-b border-tf-red dark:border-tf-purple transition-colors px-2 pt-5 pb-4">
        <Link href="/about">
            <a className="uppercase tracking-widest text-xs sm:text-base transition-colors text-tf-red dark:text-tf-purple focus:outline-dotted outline-1 outline-black outline-offset-2">
              About
            </a>
          </Link>
          <div className="md:pl-2 md:pr-12">
            <Link href="/">
              <a className="text-base md:text-lg lg:text-xl uppercase tracking-widest transition-colors text-tf-red dark:text-tf-purple focus:outline-dotted outline-1 outline-black outline-offset-0">
                Camberwell <span className="hidden sm:inline">College of Arts</span> Type Foundry
              </a>
            </Link>
          </div>
        {typeof window !== "undefined" && (
          <div
            tabIndex="0"
            onClick={setDarkMode}
            className="cursor-pointer uppercase tracking-wider transition-colors w-6 text-lg text-tf-red dark:text-tf-purple sm:text-2xl leading-none"
          >
            {darkMode ? <MoonSVG className="ml-1 -mt-0.5 w-3 h-4 sm:w-4 sm:h-5 fill-tf-purple" /> : <SunSVG className="w-5 h-5 sm:w-6 sm:h-6 -mt-0.5" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
