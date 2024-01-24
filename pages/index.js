import PreviewInput from "../components/PreviewInput";
import { data, directories } from "../utils/contentUtils";

export default function Home({ content, directories }) {
  return directories.slice().reverse().map((directory, dirIndex) => (
    <div key={dirIndex} className="pb-24">
      <p className="uppercase transition-colors tracking-widest w-full -mt-2 text-xs font-serif pt-4 md:pt-5 pb-2 px-2 dark:text-tf-purple dark:bg-black dark:border-tf-purple border-tf-red text-tf-red bg-neutral-50 z-10 border-b inline-block sticky top-14 ">
        Class of {directory}
      </p>
      <div className="flex flex-col space-y-8">
        {content[directory].map((entry, entIndex) => {
          if (entry.data.font || entry.data.cover)  {
            return (
              <PreviewInput key={entIndex} entry={entry} />
            )
          }
        })}
      </div>
    </div>
  ));
}

export function getStaticProps() {
  return { props: { content: data, directories } };
}
