import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.siteTitle}>化學物質科普知識園區</span>
          <span className={styles.subtitle}>小學生版 · Elementary Edition</span>
        </div>

        <nav className={styles.links} aria-label="頁尾導航">
          <Link href="/knowledge">知識文章</Link>
          <Link href="/game">闖關遊戲</Link>
          <Link href="/experiment">實驗模擬</Link>
          <Link href="/badges">徽章系統</Link>
          <Link href="/parents">家長/教師專區</Link>
        </nav>

        <div className={styles.legal}>
          <p>主辦：環境部化學物質管理署</p>
          <p>網站資料如有疑問請洽主辦單位</p>
          <p className={styles.copy}>© {new Date().getFullYear()} 環境部化學物質管理署 版權所有</p>
        </div>
      </div>
    </footer>
  );
}
