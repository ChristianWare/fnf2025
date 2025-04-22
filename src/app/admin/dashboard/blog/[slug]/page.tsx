// src/app/admin/dashboard/blog/new/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    editorProps: {
      attributes: {
        class: "tiptap-editor", // attach our class
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editor) return;

    const content = editor.getHTML();
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

        {/* scrollable wrapper */}
        <div
          style={{
            height: "300px",
            overflowY: "auto",
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: "0.5rem",
          }}
        >
          <EditorContent editor={editor} />
        </div>

        <button
          type='submit'
          style={{ marginTop: "1rem", padding: "0.6rem 1.2rem" }}
        >
          Publish
        </button>
      </form>
    </main>
  );
}
