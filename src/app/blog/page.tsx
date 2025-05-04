import { readdir } from "node:fs/promises";
import * as path from "node:path";

import React from "react";

export default async function Page() {
  const dir = path.join(process.cwd(), "src", "content");
  const content = await readdir(dir, { encoding: "utf-8" });
  const files = content.filter((file) => file.endsWith(".md"));

  return (
    <div>
      <h1>Blog</h1>
      <p>Welcome to the blog page!</p>
      <ul>
        {files.map((file) => {
          const fileName = file.replace(".md", "");
          return (
            <li key={fileName}>
              <a href={`/blog/${fileName}`}>{fileName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
