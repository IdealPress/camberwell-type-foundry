import Link from "next/link";
import useDarkMode from "../utils/useDarkMode";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="flex justify-between items-center sticky top-5 z-10 font-serif">
      <Link href="/">
        <a className="dark:hover:bg-gray-600 hover:bg-gray-600 text-xs sm:text-base uppercase tracking-wider transition-colors bg-white dark:bg-black dark:text-white hover:text-white p-5">
          Camberwell College of Arts Type Foundry
        </a>
      </Link>
      <div className="flex space-x-4 items-center">
        <p className="hover:bg-gray-600 uppercase tracking-wider text-xs sm:text-base transition-colors dark:hover:bg-gray-600 dark:hover:text-white bg-white dark:bg-black dark:text-white hover:text-white p-5">
          About
        </p>
        {typeof window !== "undefined" && (
          <button
            onClick={setDarkMode}
            className="uppercase tracking-wider transition-colors hover:bg-gray-600 p-5 text-lg sm:text-2xl leading-none rounded-full"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
