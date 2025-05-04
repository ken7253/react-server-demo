import { readdir, readFile } from "node:fs/promises";
import * as path from "node:path";

import React from "react";
import { Link } from "@lazarv/react-server/navigation";

type Prams = {
  slug?: string;
};

export default async function Page({ slug }: Prams) {
  const contentDir = path.join(process.cwd(), "src", "content");
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

  const filePath = path.join(contentDir, `${slug}.md`);
  const content = await readFile(filePath, { encoding: "utf-8" });

  return (
    <div>
      <article>
        <h1>Blog: {slug}</h1>
        <pre>{content}</pre>
      </article>
    </div>
  );
}
