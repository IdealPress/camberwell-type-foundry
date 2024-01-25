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

  const usesFont = entry.data.font;
  const usesImage = !entry.data.font && entry.data.cover;

  return (
    <div className="space-y-2">
      {usesFont && (
        <div
          className={`focus:outline-none ${entry.data.class} text-black dark:text-white`}
        >
          <textarea
            value={textAreaContent}
            onChange={(e) => setTextAreaContent(e.target.value)}
            className="text-center focus:text-tf-red dark:focus:text-tf-purple whitespace-nowrap overflow-y-hidden focus:outline-none bg-transparent focus:bg-white rounded-xl p-5 w-full dark:bg-black dark:focus:bg-neutral-900 transition-colors scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-white scrollbar-track-neutral-50 dark:scrollbar-track-neutral-900"
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
        <div className="md:flex items-center md:space-x-8 space-y-4 md:space-y-0">
          <p className="text-sm text-center tracking-wide dark:text-white min-w-max">{entry.data.author} </p>
          <div className="flex items-center justify-between sm:justify-end space-x-2 w-full">
            { usesFont && (
              <>
                <button
                  onClick={() =>
                    setTextAreaContent(
                      pangrams[Math.floor(Math.random() * pangrams.length)]
                    )
                  }
                  className="text-xs text-neutral-600 dark:text-neutral-300 p-2 bg-neutral-100 hover:bg-neutral-900 hover:text-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 transition-colors rounded-full focus:outline-neutral-900 dark:focus:outline-neutral-50"
                >
                  Pangram...
                </button>
                <button
                  onClick={() => setTextAreaContent(alphabet)}
                  className="text-xs text-neutral-600 dark:text-neutral-300 p-2 bg-neutral-100 hover:bg-neutral-900 hover:text-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 transition-colors rounded-full focus:outline-neutral-900 dark:focus:outline-neutral-50"
                >
                  ABC...
                </button>
                <button
                  onClick={() => setTextAreaContent(entry.data.title)}
                  className="text-xs text-neutral-600 dark:text-neutral-300 p-2 bg-neutral-100 hover:bg-neutral-900 hover:text-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 transition-colors rounded-full focus:outline-neutral-900 dark:focus:outline-neutral-50"
                >
                  Name
                </button>
                <div className="hidden sm:flex bg-neutral-100 dark:bg-neutral-900 flex-grow h-8 items-center p-4 rounded-full transition-colors">
                  <div className="flex-grow h-0">
                    <Range
                      step={1}
                      min={12}
                      max={360}
                      values={values}
                      onChange={(values) => setValues(values)}
                      renderTrack={({ props, children }) => (
                        <div {...props} className="h-0.5 w-full bg-neutral-400">
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          className="w-3 h-3 rounded-full bg-neutral-400 focus:outline-neutral-900 dark:focus:outline-neutral-50"
                        />
                      )}
                    />
                  </div>
                </div>
              </>
            )}
            {router.pathname === "/" && (
              <Link href={`${entry.folder}/${entry.data.slug}`}>
                <a className="text-xs flex-grow sm:flex-grow-0  text-center font-bold text-tf-red hover:text-neutral-200 dark:text-tf-purple p-2 bg-neutral-100 dark:bg-neutral-900 transition-colors rounded-full focus:outline-neutral-900 dark:focus:outline-neutral-50 hover:bg-tf-red dark:hover:bg-tf-purple dark:hover:text-neutral-900">
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
