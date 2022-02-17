import Link from "next/link";
import useDarkMode from "../utils/useDarkMode";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="flex justify-between sticky top-5 z-10">
      <Link href="/">
        <a className="uppercase tracking-widest bg-black dark:bg-white text-white dark:text-black p-5 rounded-xl">
          Camberwell College of Arts Type Foundry
        </a>
      </Link>
      <div className="flex space-x-4">
        <p className="uppercase tracking-wider bg-gray-100 p-5 rounded-2xl">
          About
        </p>
        {typeof window !== "undefined" && (
          <button
            onClick={setDarkMode}
            className="uppercase tracking-wider transition-colors hover:bg-gray-600 p-5 rounded-2xl text-2xl leading-none"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
