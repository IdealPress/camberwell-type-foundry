import Link from "next/link";
import useDarkMode from "../utils/useDarkMode";
import MoonSVG from "./MoonSVG";
import SunSVG from "./SunSVG";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="bg-neutral-50 dark:bg-black px-4 md:px-6 sticky top-0 z-20 transition-colors">
      <div className="flex justify-between items-baseline sm:items-center font-serif border-b border-tf-red dark:border-tf-purple transition-colors px-2 pt-2 pb-3 sm:pt-5 sm:pb-4">
        <Link href="/about">
          <a className="hidden md:block uppercase tracking-widest text-[0.6rem] sm:text-base transition-colors text-tf-red dark:text-tf-purple focus:outline-none focus:border-b border-current">
            <span className="hidden md:block">About</span>
          </a>
        </Link>
        <div className="md:pl-2 md:pr-12 md:text-center">
          <Link href="/">
            <a className="text-sm md:text-lg lg:text-xl uppercase tracking-widest transition-colors text-tf-red dark:text-tf-purple  focus:outline-none focus:border-b border-current">
              Camberwell{" "}
              <span className="hidden sm:inline">College of Arts</span> Type
              Foundry
            </a>
          </Link>
        </div>
        <div className="flex space-x-4 translate-y-1 sm:translate-y-0">
          {typeof window !== "undefined" && (
            <button
              tabIndex="0"
              onClick={setDarkMode}
              className="cursor-pointer uppercase tracking-wider transition-colors w-6 text-lg text-tf-red dark:text-tf-purple leading-none focus:text-black focus:outline-none dark:focus:text-white"
            >
              {darkMode ? (
                <MoonSVG className="translate-y-0.5 ml-1 w-4 h-5 fill-tf-purple" />
              ) : (
                <SunSVG className="w-5 h-5 md:w-6 sm:h-6 translate-y-0.5 " />
              )}
            </button>
          )}
          <Link href="/about">
            <a className="flex text-xs justify-center items-center md:hidden w-5 h-5 transition-colors text-tf-red dark:text-tf-purple border-tf-red dark:border-tf-purple border-[0.5px] focus:outline-none rounded-full mt-1 md:mt-0.5">
              <span>i</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
