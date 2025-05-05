import { readFile } from "node:fs/promises";
import path from "node:path";

import React from "react";

import { Editor } from "../../../../components/Editor";

const contentDir = path.join(process.cwd(), "src", "content");

type Prams = {
  slug?: string;
};

export default async function Page({ slug }: Prams) {
  const filePath = path.join(contentDir, `${slug}.md`);
  const content = await readFile(filePath, { encoding: "utf-8" });

  if (!slug) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <h1>Blog: {slug} Edit mode</h1>
      <Editor initialValue={content} />
    </div>
  );
}
