"use client";

import React, { ChangeEvent, MouseEventHandler, useState } from "react";

type Props = {
  initialValue?: string;
  onSave?: (value: string) => void;
};

import styles from "./index.module.css";

export function Editor({ initialValue, onSave }: Props) {
  const [text, setText] = useState<string>(initialValue || "");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave: MouseEventHandler<HTMLButtonElement> = () => {
    onSave?.(text);
  };

  return (
    <div>
      <textarea
        className={styles.text}
        value={text}
        onChange={handleChange}
      ></textarea>
      <button className={styles.save} type="button" onClick={handleSave}>
        save file
      </button>
    </div>
  );
}
