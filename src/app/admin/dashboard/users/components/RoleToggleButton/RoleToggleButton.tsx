// components/RoleToggleButton.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal"; // adjust this path if needed
import styles from "./RoleToggleButton.module.css";
import FalseButton from "@/components/FalseButton/FalseButton";

interface Props {
  userId: string;
  currentRole: "ADMIN" | "USER" | string;
}

export default function RoleToggleButton({ userId, currentRole }: Props) {
  const [loading, setLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const router = useRouter();
  const isAdmin = currentRole === "ADMIN";

  async function toggleRole() {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ makeAdmin: !isAdmin }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Failed to update role.");
    } finally {
      setLoading(false);
      setConfirmOpen(false);
    }
  }

  return (
    <>
      <button
        type='button'
        role='switch'
        aria-checked={isAdmin}
        disabled={loading}
        onClick={() => setConfirmOpen(true)}
        className={
          isAdmin
            ? `${styles.toggle} ${styles.toggleOn}`
            : `${styles.toggle} ${styles.toggleOff}`
        }
      >
        <span
          className={
            isAdmin
              ? `${styles.handle} ${styles.handleOn}`
              : `${styles.handle} ${styles.handleOff}`
          }
        />
      </button>

      <Modal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <p>
          Are you sure you want to{" "}
          {isAdmin ? "revoke admin rights from" : "make this user an admin"} this user?
        </p>
        <div className={styles.btnContainer}>
          <FalseButton
            onClick={() => setConfirmOpen(false)}
            btnType='outline'
            text='Cancel'
          />
          <FalseButton
            onClick={toggleRole}
            disabled={loading}
            btnType='primary'
            text={loading ? "…" : "Yes"}
          />
        </div>
      </Modal>
    </>
  );
}
