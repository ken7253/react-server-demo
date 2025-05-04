import React from "react";
import { Link } from "@lazarv/react-server/navigation";

export default async function Page() {
  return (
    <div>
      <h1>Hello React server!</h1>
      <Link to="/blog">Blog</Link>
    </div>
  );
}
