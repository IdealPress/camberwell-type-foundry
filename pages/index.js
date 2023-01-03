import PreviewInput from "../components/PreviewInput";
import { data, directories } from "../utils/contentUtils";

export default function Home({ content, directories }) {
  return directories.slice().reverse().map((directory, dirIndex) => (
    <div key={dirIndex} className="mb-24">
      <p className="transition-colors tracking-wider w-full mb-8 text-xs -mt-6 pt-6 pb-2 px-2 dark:text-white dark:bg-black dark:border-white border-black bg-white z-10 border-b inline-block sticky top-16 border-dotted">
        {directory}
      </p>
      <div className="flex flex-col space-y-8">
        {content[directory].map((entry, entIndex) => (
          <PreviewInput key={entIndex} entry={entry} />
        ))}
      </div>
    </div>
  ));
}

export function getStaticProps() {
  return { props: { content: data, directories } };
}
