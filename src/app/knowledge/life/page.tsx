import Link from "next/link";
import Tag from "@/components/ui/Tag";
import TipBox from "@/components/mascots/TipBox";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "生活中的化學 | 化學物質科普知識園區" };

export default function LifeChemistryPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="blue" variant="chip">生活中的化學</Tag>
              <span className={styles.metaInfo}>2026-04-05 · 閱讀約 6 分鐘</span>
            </div>
            <h1 className={styles.title}>廚房裡的化學反應</h1>
            <p className={styles.lead}>每天做飯的廚房，其實就是一個小化學實驗室！各種食材的變化，都是化學反應在進行。</p>
          </div>
          <div className={styles.body}>
            <h2>麵包為什麼會膨脹？</h2>
            <p>製作麵包時加入酵母，酵母分解糖分產生二氧化碳（CO₂），讓麵糰膨脹蓬鬆。這是一個生物化學反應！</p>
            <TipBox mood="smile" title="鴞博士說">
              <p>泡打粉（發粉）遇到水和熱也會產生 CO₂，這就是為什麼蛋糕加熱後會膨脹。</p>
            </TipBox>
            <h2>蛋為什麼加熱會凝固？</h2>
            <p>生雞蛋裡的蛋白質是液態的。加熱後，蛋白質的結構改變（「變性」），變成固態。這個過程無法逆轉！</p>
          </div>
          <div className={styles.navRow}>
            <Link href="/knowledge" className={styles.backLink}>← 回文章列表</Link>
            <Link href="/game" className={styles.challengeLink}>挑戰本章關卡 →</Link>
          </div>
        </div>
        <aside className={styles.sidebar}>
          <div className={styles.sideCard}>
            <h3 className={styles.sideTitle}>相關文章</h3>
            <div className={styles.relatedLinks}>
              <Link href="/knowledge/water-chemistry">水是怎麼變乾淨的？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
