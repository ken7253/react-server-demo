import { readdir, readFile } from "node:fs/promises";
import * as path from "node:path";

import React, { Suspense } from "react";
import { Link } from "@lazarv/react-server/navigation";
import { usePrerender } from "@lazarv/react-server/server/prerender";

type Prams = {
  slug?: string;
};

const contentDir = path.join(process.cwd(), "src", "content");

async function DynamicComponent({ slug }: Prams) {
  usePrerender();
  const filePath = path.join(contentDir, `${slug}.md`);
  const content = await readFile(filePath, { encoding: "utf-8" });

  // fake loading
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <pre>{content}</pre>;
}

export default async function Page({ slug }: Prams) {
  const contentList = await readdir(contentDir);
  const hasContent = contentList.some((file) => file === `${slug}.md`);

  if (!hasContent) {
    return (
      <div>
        <h1>Blog: {slug}</h1>
        <p>Blog not found</p>
        <Link to="/">Top page</Link>
      </div>
    );
  }

  return (
    <div>
      <article>
        <h1>Blog: {slug}</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <DynamicComponent slug={slug} />
        </Suspense>
      </article>
      <Link to={`/blog/${slug}/edit`}>Edit</Link>
    </div>
  );
}
