"use client";

import { useState } from "react";
import BadgePopup, { type BadgeData } from "@/components/game/BadgePopup";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Researcher from "@/components/mascots/Researcher";
import ProgressBar from "@/components/ui/ProgressBar";
import styles from "./page.module.css";

const ALL_BADGES: (BadgeData & { unlocked: boolean; category: string })[] = [
  { id: "first-quiz",     name: "初探化學",      icon: "🧪", description: "完成第一道題目！",           unlocked: true,  color: "#D5EAF6", category: "入門" },
  { id: "water-master",   name: "水的守護者",     icon: "💧", description: "學習淨水化學知識",            unlocked: true,  color: "#D5EAF6", category: "生活化學" },
  { id: "quiz-master",    name: "化學小達人",     icon: "🏆", description: "基礎關卡全部通過",            unlocked: false, color: "#FFD93D", category: "進階" },
  { id: "ghs-hero",       name: "安全小英雄",     icon: "🛡️", description: "完成 GHS 標誌辨識課程",       unlocked: false, color: "#FFE8D8", category: "安全知識" },
  { id: "eco-friend",     name: "地球好朋友",     icon: "🌍", description: "完成環境保護主題所有文章",    unlocked: false, color: "#EAF2C8", category: "環境保護" },
  { id: "lab-rookie",     name: "實驗室新鮮人",   icon: "⚗️", description: "完成第一個互動實驗",         unlocked: false, color: "#FFF8D6", category: "實驗探索" },
  { id: "formula-fan",    name: "化學式愛好者",   icon: "📐", description: "學會 10 個化學式",            unlocked: false, color: "#D5EAF6", category: "進階" },
  { id: "plastic-pro",    name: "塑膠達人",       icon: "♻️", description: "了解所有塑膠分類",            unlocked: false, color: "#EAF2C8", category: "環境保護" },
  { id: "speed-runner",   name: "閃電答題",       icon: "⚡", description: "10 秒內答對一題",             unlocked: false, color: "#FFF8D6", category: "挑戰" },
  { id: "perfect-score",  name: "滿分神人",       icon: "⭐", description: "一個關卡全部答對",            unlocked: false, color: "#FFD93D", category: "挑戰" },
  { id: "curious-cat",    name: "好奇研究員",     icon: "🔬", description: "閱讀全部知識文章",            unlocked: false, color: "#D5EAF6", category: "知識" },
  { id: "legend",         name: "化學傳說",       icon: "👑", description: "解鎖全部其他徽章",            unlocked: false, color: "#FFD93D", category: "傳說" },
];

export default function BadgesPage() {
  const [previewBadge, setPreviewBadge] = useState<BadgeData | null>(null);
  const unlockedCount = ALL_BADGES.filter((b) => b.unlocked).length;

  return (
    <>
      <div className={`section ${styles.page}`}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <Researcher mood="proud" size={96} />
              <div>
                <h1>我的徽章牆</h1>
                <p className={styles.subtitle}>收集所有徽章，成為化學傳說！</p>
                <ProgressBar
                  value={unlockedCount}
                  max={ALL_BADGES.length}
                  label={`已解鎖 ${unlockedCount} / ${ALL_BADGES.length}`}
                  color="secondary"
                />
              </div>
            </div>
            <Button variant="primary" size="md" as="a" href="/game">繼續闖關獲得徽章</Button>
          </div>

          {/* Unlocked */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>✨</span> 已解鎖
            </h2>
            <div className={styles.badgeGrid}>
              {ALL_BADGES.filter((b) => b.unlocked).map((badge) => (
                <button
                  key={badge.id}
                  className={`${styles.badgeCard} ${styles.unlocked}`}
                  onClick={() => setPreviewBadge(badge)}
                  aria-label={`徽章：${badge.name}`}
                >
                  <div className={styles.badgeIconWrap} style={{ background: badge.color }}>
                    <span className={styles.badgeEmoji}>{badge.icon}</span>
                  </div>
                  <span className={styles.badgeName}>{badge.name}</span>
                  <span className={styles.badgeDesc}>{badge.description}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Locked */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🔒</span> 待解鎖
            </h2>
            <div className={styles.badgeGrid}>
              {ALL_BADGES.filter((b) => !b.unlocked).map((badge) => (
                <div key={badge.id} className={`${styles.badgeCard} ${styles.locked}`} aria-label={`未解鎖徽章：${badge.name}`}>
                  <div className={styles.badgeIconWrap} style={{ background: "#E0DDD8" }}>
                    <span className={styles.badgeEmoji} style={{ filter: "grayscale(1) opacity(.4)" }}>
                      {badge.icon}
                    </span>
                    <span className={styles.lockOverlay} aria-hidden>🔒</span>
                  </div>
                  <span className={styles.badgeName} style={{ opacity: .5 }}>{badge.name}</span>
                  <span className={styles.badgeDesc} style={{ opacity: .4 }}>{badge.description}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <BadgePopup badge={previewBadge} onClose={() => setPreviewBadge(null)} />
    </>
  );
}
