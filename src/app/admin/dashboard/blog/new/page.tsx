"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import "quill/dist/quill.snow.css";

// dynamically load the Quill editor (client only)
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

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

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list", // only "list" is needed for both ordered and bullets
  "link",
  "image",
  "align",
  "color",
  "code-block",
];


export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    if (res.ok) {
      router.push("/admin/dashboard/blog");
    } else {
      console.error("Failed to create post");
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", margin: "1rem 0" }}>
          Title
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </label>

        <div style={{ margin: "1rem 0" }}>
          <ReactQuill
            theme='snow'
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            style={{ height: 300, marginBottom: "2rem" }}
          />
        </div>

        <button type='submit' style={{ padding: "0.6rem 1.2rem" }}>
          Publish
        </button>
      </form>
    </main>
  );
}
