import { readdir } from "node:fs/promises";
import * as path from "node:path";

import React from "react";

import { Counter } from "./components/counter";

export default async function App() {
  const dir = path.join(process.cwd(), "assets", "content");
  const content = await readdir(dir, { encoding: "utf-8" });
  const files = content.filter((file) => file.endsWith(".md"));

  return (
    <div>
      <h1>Hello React server!</h1>
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
      <Counter />
    </div>
  );
}
