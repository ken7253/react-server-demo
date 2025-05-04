import React from "react";
import { Link } from "@lazarv/react-server/navigation";

import { Counter } from "../components/counter";

export default async function Page() {
  return (
    <div>
      <h1>Hello React server!</h1>
      <Link to="/blog">Blog</Link>
      <Counter />
    </div>
  );
}
