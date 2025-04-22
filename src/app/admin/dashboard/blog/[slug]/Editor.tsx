"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import styles from "./Editor.module.css";

// Dynamically load the Quill editor client‑only
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

// Toolbar configuration
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }],
    ["code-block"],
    ["clean"],
  ],
};

// Allowed formats (exclude standalone "bullet")
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "link",
  "image",
  "align",
  "color",
  "code-block",
];

export default function Editor({ initial }: { initial: string }) {
  const [value, setValue] = useState(initial);
  const quillRef = useRef(null);

  // Populate hidden input on mount
  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>(
      'input[name="content"]'
    );
    if (input) input.value = initial;
  }, [initial]);

  // Sync changes to the hidden input
  function handleChange(html: string) {
    setValue(html);
    const input = document.querySelector<HTMLInputElement>(
      'input[name="content"]'
    );
    if (input) input.value = html;
  }

  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        ref={quillRef}
        className={styles.quill}
        theme='snow'
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
