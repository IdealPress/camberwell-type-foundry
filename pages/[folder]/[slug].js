import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { allFilePaths, CONTENT_PATH } from "../../utils/contentUtils";
import ReactMarkdown from "react-markdown";
import PreviewInput from "../../components/PreviewInput";
import CharacterSet from "../../components/CharacterSet";
import Link from "next/link";
import useScrollPosition from "../../utils/useScrollPosition";

export default function Page({ entry }) {
  return (
    <div className="mt-8 mb-24">
      <div className="mb-12">
        <PreviewInput
          entry={entry}
          preset={"pangram"}
          displayOptions={false}
          defaultSize={360}
        />
      </div>
      <p
        className={`${
          useScrollPosition() > 400 ? "px-5" : "text-5xl"
        } uppercase transition-all tracking-wider py-4 bg-white dark:bg-black dark:text-white text-gray-800 inline-block sticky top-24 font-serif`}
      >
        {entry.data.title}
      </p>
      <p className="text-gray-500">{entry.data.author}</p>
      <div className="space-y-10 mt-4">
        <article className="prose dark:prose-invert font-serif">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </article>
        <div className="flex flex-col space-y-8">
          <PreviewInput entry={entry} preset={"pangram"} />
          <CharacterSet entry={entry} />
        </div>
        <Link href={`/typefaces/${entry.data.class}.otf`}>
          <a className="inline-block text-center p-4 bg-gray-100 dark:bg-gray-900 hover:bg-gray-600 hover:text-white transition-colors dark:text-white uppercase tracking-wider">
            ↓ Download {entry.data.title}
          </a>
        </Link>
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
