import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Range } from "react-range";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";
const pangrams = [
  "Waltz, nymph, for quick jigs vex Bud.",
  "Sphinx of black quartz, judge my vow.",
  "Pack my box with five dozen liquor jugs. ",
  "Glib jocks quiz nymph to vex dwarf.",
  "Jackdaws love my big sphinx of quartz.",
  "The five boxing wizards jump quickly.",
  "How vexingly quick daft zebras jump!",
  "Quick zephyrs blow, vexing daft Jim.",
  "Two driven jocks help fax my big quiz.",
  "The jay, pig, fox, zebra and my wolves quack!",
  "Sympathizing would fix Quaker objectives.",
  "A wizard's job is to vex chumps quickly in fog.",
  "Watch 'Jeopardy!', Alex Trebek's fun TV quiz game.",
  "By Jove, my quick study of lexicography won a prize!",
  "Waxy and quivering, jocks fumble the pizza.",
];

const PreviewInput = ({
  entry,
  preset,
  displayOptions = true,
  defaultSize = 170,
}) => {
  const router = useRouter();
  const [values, setValues] = useState([defaultSize]);
  const [textAreaContent, setTextAreaContent] = useState(entry.data.title);

  const usesFont = entry.data.font
  const usesImage = !entry.data.font && entry.data.cover

  return (
    <div className="space-y-2">
      {usesFont && (
        <div
          className={`focus:outline-none ${entry.data.class} text-black dark:text-white`}
        >
          <textarea
            value={textAreaContent}
            onChange={(e) => setTextAreaContent(e.target.value)}
            className="text-center whitespace-nowrap overflow-y-hidden focus:outline-none focus:bg-slate-50 p-5 w-full dark:bg-black dark:focus:bg-slate-900 transition-colors dark:focus:text-white scrollbar-thin scrollbar-thumb-black dark:scrollbar-thumb-white scrollbar-track-slate-400 dark:scrollbar-track-slate-900"
            style={{
              fontSize: `${values[0]}px`,
              height: `${defaultSize * 1.6}px`,
            }}
          ></textarea>
        </div>
      )}
      {usesImage && router.pathname === "/" && (
        <Link href={`${entry.folder}/${entry.data.slug}`}>
          <div style={{ backgroundImage: `url(${entry.data.cover})` }} className="h-60 w-full bg-cover bg-center mb-4 cursor-pointer" />
        </Link>
      )}
      {displayOptions && (
        <div className="md:flex md:space-x-8 space-y-4 md:space-y-0">
          <div className="flex-grow">
            <p className="text-sm dark:text-white min-w-max">{entry.data.author} </p>
            <p className="text-xs dark:text-slate-400 whitespace-nowrap">
              Year {`${entry.data.year}`} Student
            </p>
          </div>
          <div className="flex items-center justify-between sm:justify-end space-x-2 w-full">
            { usesFont && (
              <>
                <button
                  onClick={() =>
                    setTextAreaContent(
                      pangrams[Math.floor(Math.random() * pangrams.length)]
                    )
                  }
                  className="text-xs text-slate-500 dark:text-slate-400 p-2 hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  Pangram...
                </button>
                <button
                  onClick={() => setTextAreaContent(alphabet)}
                  className="text-xs text-slate-500 dark:text-slate-400 p-2 hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  ABC...
                </button>
                <button
                  onClick={() => setTextAreaContent(entry.data.title)}
                  className="text-xs text-slate-500 dark:text-slate-400 p-2 hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  Name
                </button>
                <div className="flex-grow h-0 hidden sm:block">
                  <Range
                    step={1}
                    min={12}
                    max={360}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                      <div {...props} className="h-1 w-full bg-slate-200">
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        className="w-4 h-4 rounded-full bg-slate-300"
                      />
                    )}
                  />
                </div>
              </>
            )}
            {router.pathname === "/" && (
              <Link href={`${entry.folder}/${entry.data.slug}`}>
                <a className="text-xs font-bold text-red-500 dark:text-purple-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-900">
                  See more →
                </a>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

PreviewInput.displayName = "PreviewInput";

export default PreviewInput;
