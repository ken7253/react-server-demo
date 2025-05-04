import { randomUUID } from "node:crypto";
import React, { type PropsWithChildren } from "react";

const id = randomUUID();

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <head>
        <title>React server demo</title>
        <style href={id} precedence="medium">
          {`
          *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
        </style>
      </head>
      <body>
        <header style={{ display: "block", backgroundColor: "#333" }}>
          React server blog demo
        </header>
        <main>{children}</main>
        <footer>&copy; ken7253</footer>
      </body>
    </html>
  );
}
