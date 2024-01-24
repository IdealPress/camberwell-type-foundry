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
      <div className="mb-6">
        <PreviewInput
          entry={entry}
          preset={"pangram"}
          displayOptions={false}
          defaultSize={200}
        />
      </div>
      <p className={`text-3xl text-center w-full uppercase transition-all tracking-wider py-4 bg-neutral-50 dark:bg-black dark:text-white text-black inline-block font-serif ${entry.data.font && "md:hidden"}`}>
        {entry.data.title}
      </p>
      <p className="text-neutral-900 text-center dark:text-neutral-50 tracking-wider ">
        By {entry.data.author}
      </p>
      <div className="space-y-10 mt-6">
        <article className="prose dark:prose-invert font-serif mx-auto">
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
              className="text-center p-3 text-sm bg-neutral-50 text-black w-full dark:bg-neutral-900 hover:bg-neutral-800 rounded-full h-24 flex justify-center items-center hover:text-white transition-colors dark:text-white tracking-wider"
            >
              Download 
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
