"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "/knowledge", label: "知識文章" },
  { href: "/game",      label: "闖關遊戲" },
  { href: "/experiment",label: "實驗模擬" },
  { href: "/badges",    label: "我的徽章" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Ministry of Environment logo (left) */}
        <Link href="/" className={styles.logoLeft} aria-label="回首頁 – 環境部化學物質管理署">
          <MoenvLogo />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="主要導航">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CHA logo (right) */}
        <div className={styles.logoRight}>
          <ChaLogo />
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="行動版導航">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ── Inline SVG logos ────────────────────────────── */

function MoenvLogo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="環境部 標誌"
      role="img"
    >
      <circle cx="50" cy="50" r="48" fill="#2E7AB6" />
      <circle cx="50" cy="50" r="48" fill="url(#moenv-split)" />
      {/* Bottom green half */}
      <path d="M2 50 A48 48 0 0 0 98 50 Z" fill="#8CC63F" />
      {/* Mountain peaks */}
      <polyline
        points="15,72 35,42 50,58 65,38 85,72"
        stroke="white"
        strokeWidth="5"
        strokeLinejoin="round"
        fill="none"
      />
      <polyline
        points="20,72 38,48 50,62 62,48 80,72"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="moenv-split" x1="0" y1="0" x2="0" y2="1">
          <stop offset="50%" stopColor="#2E7AB6" />
          <stop offset="50%" stopColor="#8CC63F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ChaLogo() {
  return (
    <svg
      width="160"
      height="48"
      viewBox="0 0 320 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="環境部化學物質管理署 標誌"
      role="img"
    >
      {/* Atom icon */}
      <circle cx="40" cy="48" r="36" fill="#1F7FB8" />
      <circle cx="40" cy="48" r="12" fill="#A6C83A" />
      {/* Orbit rings */}
      <ellipse cx="40" cy="48" rx="32" ry="14" stroke="white" strokeWidth="2" fill="none" />
      <ellipse cx="40" cy="48" rx="32" ry="14" stroke="white" strokeWidth="2" fill="none"
        transform="rotate(60 40 48)" />
      <ellipse cx="40" cy="48" rx="32" ry="14" stroke="white" strokeWidth="2" fill="none"
        transform="rotate(-60 40 48)" />
      {/* Electron dots */}
      <circle cx="72" cy="48" r="4" fill="white" />
      <circle cx="24" cy="16" r="4" fill="white" />
      <circle cx="24" cy="80" r="4" fill="white" />
      {/* Text */}
      <text x="88" y="38" fontFamily="'Noto Sans TC', sans-serif" fontWeight="700"
        fontSize="18" fill="#1A1814" letterSpacing="1">
        環境部化學物質管理署
      </text>
      <text x="88" y="60" fontFamily="'Noto Sans TC', sans-serif" fontWeight="400"
        fontSize="12" fill="#3A352D">
        Chemicals Administration
      </text>
      <text x="88" y="76" fontFamily="'Noto Sans TC', sans-serif" fontWeight="400"
        fontSize="12" fill="#3A352D">
        Ministry of Environment
      </text>
    </svg>
  );
}
