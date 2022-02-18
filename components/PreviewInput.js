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
  const [textAreaContent, setTextAreaContent] = useState(
    pangrams[Math.floor(Math.random() * pangrams.length)]
  );
  return (
    <div className="space-y-2">
      <div
        className={`focus:outline-none ${entry.data.class}`}
        style={{ color: entry.data.color || "#000" }}
      >
        <textarea
          value={textAreaContent}
          onChange={(e) => setTextAreaContent(e.target.value)}
          className="whitespace-nowrap overflow-y-hidden focus:outline-none focus:bg-gray-50 p-5 w-full dark:bg-black dark:focus:bg-slate-900 transition-colors dark:focus:text-white"
          style={{
            fontSize: `${values[0]}px`,
            height: `${defaultSize * 1.6}px`,
          }}
        ></textarea>
      </div>
      {displayOptions && (
        <div className="md:flex md:space-x-12 space-y-4 md:space-y-0">
          <div>
            <p className="text-sm dark:text-white">{entry.data.author} </p>
            <p className="text-xs text-gray-400 whitespace-nowrap">
              Year {`${entry.data.year}`} Student
            </p>
          </div>
          <div className="flex items-center space-x-2 w-full flex-grow">
            <button
              onClick={() =>
                setTextAreaContent(
                  pangrams[Math.floor(Math.random() * pangrams.length)]
                )
              }
              className="text-xs gray-500 text-gray-500 p-2 hover:bg-gray-100 "
            >
              The Quick Brown...
            </button>
            <button
              onClick={() => setTextAreaContent(alphabet)}
              className="text-xs gray-500 text-gray-500 p-2 hover:bg-gray-100"
            >
              ABC...
            </button>
            <button
              onClick={() => setTextAreaContent(entry.data.title)}
              className="text-xs gray-500 text-gray-500 p-2 hover:bg-gray-100"
            >
              Name
            </button>
            <div className="flex-grow h-0">
              <Range
                step={1}
                min={12}
                max={360}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div {...props} className="h-1 w-full bg-gray-200">
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="w-4 h-4 rounded-full bg-gray-300"
                  />
                )}
              />
            </div>
            {router.pathname === "/" && (
              <Link href={`${entry.folder}/${entry.data.slug}`}>
                <a className="text-xs gray-500 text-gray-500 p-2 hover:bg-gray-100">
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
