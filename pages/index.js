import PreviewInput from "../components/PreviewInput";
import { data, directories } from "../utils/contentUtils";

export default function Home({ content, directories }) {
  return directories.map((directory, dirIndex) => (
    <div key={dirIndex} className="mt-8 mb-24">
      <p className="tracking-wider mb-8 text-xs py-1.5 px-2 bg-gray-400 text-gray-200 inline-block sticky top-24 rounded-xl">
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
