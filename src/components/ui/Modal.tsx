"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Modal({ open, onClose, title, children, size = "md" }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) el.showModal();
    else el.close();
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target === el) onClose();
    };
    el.addEventListener("click", handler);
    return () => el.removeEventListener("click", handler);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.dialog} ${styles[size]}`}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div className={styles.inner}>
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.closeBtn} onClick={onClose} aria-label="關閉">
              <CloseIcon />
            </button>
          </div>
        )}
        {!title && (
          <button className={styles.closeBtnAbs} onClick={onClose} aria-label="關閉">
            <CloseIcon />
          </button>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </dialog>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M14.5 3.5L9 9M9 9L3.5 14.5M9 9L14.5 14.5M9 9L3.5 3.5"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
