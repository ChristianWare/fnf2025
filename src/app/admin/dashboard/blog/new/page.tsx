/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import CodeBlock from "@tiptap/extension-code-block";

// Custom Toolbar component for TipTap
const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <div
      className='menu-bar'
      style={{
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderBottom: "none",
        borderTopLeftRadius: "0.25rem",
        borderTopRightRadius: "0.25rem",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <div>
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "p") editor.chain().focus().setParagraph().run();
            else
              editor
                .chain()
                .focus()
                .toggleHeading({ level: parseInt(value) })
                .run();
          }}
          style={{ padding: "0.25rem", borderRadius: "0.25rem" }}
        >
          <option value='p'>Paragraph</option>
          <option value='1'>Heading 1</option>
          <option value='2'>Heading 2</option>
          <option value='3'>Heading 3</option>
        </select>
      </div>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("bold") ? "#e9ecef" : "transparent",
          border: "1px solid #ccc",
        }}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("italic")
            ? "#e9ecef"
            : "transparent",
          border: "1px solid #ccc",
        }}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("underline")
            ? "#e9ecef"
            : "transparent",
          border: "1px solid #ccc",
        }}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("strike")
            ? "#e9ecef"
            : "transparent",
          border: "1px solid #ccc",
        }}
      >
        S
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("blockquote")
            ? "#e9ecef"
            : "transparent",
          border: "1px solid #ccc",
        }}
      >
        Quote
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("bulletList")
            ? "#e9ecef"
            : "transparent",
          border: "1px solid #ccc",
        }}
      >
        • List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("orderedList")
            ? "#e9ecef"
            : "transparent",
          border: "1px solid #ccc",
        }}
      >
        1. List
      </button>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={() => {
            const url = window.prompt("URL");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={editor.isActive("link") ? "is-active" : ""}
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            backgroundColor: editor.isActive("link")
              ? "#e9ecef"
              : "transparent",
            border: "1px solid #ccc",
          }}
        >
          Link
        </button>
        <button
          onClick={() => {
            const url = window.prompt("Image URL");
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            border: "1px solid #ccc",
          }}
        >
          Image
        </button>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            backgroundColor: editor.isActive({ textAlign: "left" })
              ? "#e9ecef"
              : "transparent",
            border: "1px solid #ccc",
          }}
        >
          Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            backgroundColor: editor.isActive({ textAlign: "center" })
              ? "#e9ecef"
              : "transparent",
            border: "1px solid #ccc",
          }}
        >
          Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
          style={{
            padding: "0.25rem 0.5rem",
            borderRadius: "0.25rem",
            backgroundColor: editor.isActive({ textAlign: "right" })
              ? "#e9ecef"
              : "transparent",
            border: "1px solid #ccc",
          }}
        >
          Right
        </button>
      </div>

      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
        style={{
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          backgroundColor: editor.isActive("codeBlock")
            ? "#e9ecef"
            : "transparent",
          border: "1px solid #ccc",
        }}
      >
        Code
      </button>

      <input
        type='color'
        onInput={(event) => {
          const target = event.target as HTMLInputElement;
          editor.chain().focus().setColor(target.value).run();
        }}
        value={editor.getAttributes("textStyle").color || "#000000"}
        style={{ width: "2rem", height: "2rem" }}
      />
    </div>
  );
};

export default function NewPost() {
  const router = useRouter();
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Color,
      CodeBlock,
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Get HTML content from editor
    const content = editor?.getHTML() || "";

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
          <MenuBar editor={editor} />
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "0 0 0.25rem 0.25rem",
              overflow: "auto",
              height: "400px",
              padding: "1rem",
            }}
          >
            <EditorContent editor={editor} />
          </div>
        </div>

        <button
          type='submit'
          style={{
            padding: "0.6rem 1.2rem",
            marginTop: "1rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Publish
        </button>
      </form>
    </main>
  );
}
