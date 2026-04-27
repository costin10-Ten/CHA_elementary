"use client";

import { useEffect, useRef } from "react";
import styles from "./BadgePopup.module.css";
import Researcher from "@/components/mascots/Researcher";
import Button from "@/components/ui/Button";

export interface BadgeData {
  id: string;
  name: string;
  icon: string;
  description: string;
  color?: string;
}

interface Props {
  badge: BadgeData | null;
  onClose: () => void;
}

export default function BadgePopup({ badge, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!badge) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [badge, onClose]);

  if (!badge) return null;

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={(e) => e.target === overlayRef.current && onClose()}>
      <div className={styles.popup} role="dialog" aria-modal aria-label={`解鎖徽章：${badge.name}`}>
        <Confetti />

        <div className={styles.header}>
          <p className={styles.preTitle}>新徽章解鎖！</p>
          <div
            className={styles.badgeIcon}
            style={badge.color ? { background: badge.color } : undefined}
            aria-hidden
          >
            <span className={styles.badgeEmoji}>{badge.icon}</span>
          </div>
        </div>

        <div className={styles.body}>
          <h2 className={styles.badgeName}>{badge.name}</h2>
          <p className={styles.badgeDesc}>{badge.description}</p>
        </div>

        <div className={styles.mascotRow}>
          <Researcher mood="surprise" size={96} />
        </div>

        <div className={styles.actions}>
          <Button variant="secondary" size="lg" onClick={onClose}>好耶！繼續冒險</Button>
        </div>

        <button className={styles.skipBtn} onClick={onClose} aria-label="關閉">✕</button>
      </div>
    </div>
  );
}

function Confetti() {
  const colors = ["#FFD93D", "#A6C83A", "#1F7FB8", "#FF6B9D", "#FF8A5C", "#5EE9F0"];
  const pieces = Array.from({ length: 30 });

  return (
    <div className={styles.confettiWrap} aria-hidden>
      {pieces.map((_, i) => (
        <span
          key={i}
          className={styles.confettiPiece}
          style={{
            left: `${(i / 30) * 100}%`,
            background: colors[i % colors.length],
            width: `${6 + Math.random() * 8}px`,
            height: `${6 + Math.random() * 8}px`,
            borderRadius: Math.random() > .5 ? "50%" : "2px",
            animationDelay: `${i * 50}ms`,
            animationDuration: `${1.4 + Math.random() * .8}s`,
          }}
        />
      ))}
    </div>
  );
}
