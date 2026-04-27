"use client";

import { useEffect } from "react";
import styles from "./Toast.module.css";

type ToastType = "success" | "error" | "info" | "warning";

interface Props {
  message: string;
  type?: ToastType;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type = "info", onClose, duration = 3000 }: Props) {
  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  const icons: Record<ToastType, string> = {
    success: "✓", error: "✕", info: "ℹ", warning: "⚠",
  };

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert" aria-live="polite">
      <span className={styles.icon} aria-hidden>{icons[type]}</span>
      <span className={styles.message}>{message}</span>
      <button className={styles.close} onClick={onClose} aria-label="關閉通知">✕</button>
    </div>
  );
}
