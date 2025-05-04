"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((prev) => prev + 1)}>
      Counter at {count}
    </button>
  );
}
