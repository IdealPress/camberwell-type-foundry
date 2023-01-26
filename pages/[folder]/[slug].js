import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { allFilePaths, CONTENT_PATH } from "../../utils/contentUtils";
import ReactMarkdown from "react-markdown";
import PreviewInput from "../../components/PreviewInput";
import CharacterSet from "../../components/CharacterSet";
import Link from "next/link";

export default function Page({ entry }) {
  return (
    <div className="mt-8 mb-24">
      <div className="mb-12">
        <PreviewInput
          entry={entry}
          preset={"pangram"}
          displayOptions={false}
          defaultSize={200}
        />
      </div>
      <p className="text-5xl uppercase transition-all tracking-wider py-4 bg-white dark:bg-black dark:text-white text-black inline-block font-serif">
        {entry.data.title}
      </p>
      <p className="text-slate-600 dark:text-slate-400">{entry.data.author}</p>
      <div className="space-y-10 mt-4">
        <article className="prose dark:prose-invert font-serif">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </article>
        {entry.data.font && (
          <>
            <div className="flex flex-col space-y-8">
              <PreviewInput entry={entry} preset={"pangram"} />
              <CharacterSet entry={entry} />
            </div>
            <a 
              href={`/typefaces/${entry.data.class}.otf`} 
              download 
              className="inline-block text-center p-4 bg-slate-100 dark:bg-slate-900 hover:bg-slate-600 hover:text-white transition-colors dark:text-white tracking-wider"
            >
              ↓ Download 
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const filePath = path.join(
    CONTENT_PATH,
    `${params.folder}/${params.slug}.md`
  );
  const source = fs.readFileSync(filePath);
  const { content, data } = matter(source);
  const dirname = path.basename(path.dirname(filePath));

  return {
    props: {
      entry: {
        content,
        data,
        path: filePath,
        folder: dirname,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = allFilePaths.map((filePath) => ({
    params: {
      folder: path.basename(path.dirname(filePath)),
      slug: path.parse(filePath).name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
