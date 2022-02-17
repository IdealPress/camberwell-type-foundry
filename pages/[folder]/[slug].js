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
      <p className="uppercase tracking-wider py-4 px-5 text-md bg-gray-200 text-gray-800 inline-block sticky top-24 rounded-xl">
        {entry.data.title}
      </p>
      <div className="-mt-4 space-y-10">
        <article className="prose p-12 dark:prose-invert">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </article>
        <div className="flex flex-col space-y-8">
          <PreviewInput entry={entry} preset={"pangram"} />
          <CharacterSet entry={entry} />
        </div>
        <Link href={`/typefaces/${entry.data.class}.otf`}>
          <a className="block text-center text-xl p-6 bg-gray-100 rounded-xl uppercase tracking-wider">
            Download {entry.data.title}
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
