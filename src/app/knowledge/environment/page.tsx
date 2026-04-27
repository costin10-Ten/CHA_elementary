import Link from "next/link";
import Tag from "@/components/ui/Tag";
import TipBox from "@/components/mascots/TipBox";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "環境保護 | 化學物質科普知識園區" };

export default function EnvironmentPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="green" variant="chip">環境保護</Tag>
              <span className={styles.metaInfo}>2026-03-28 · 閱讀約 5 分鐘</span>
            </div>
            <h1 className={styles.title}>酸雨是怎麼形成的？</h1>
            <p className={styles.lead}>工廠排放的廢氣如何影響雨水的酸鹼值？酸雨又會帶來什麼傷害？</p>
          </div>
          <div className={styles.body}>
            <h2>什麼是酸雨？</h2>
            <p>正常雨水的 pH 值約 5.6（略酸），因為空氣中的 CO₂ 溶入水中形成碳酸。如果 pH 值低於 5.6，就叫做「酸雨」。</p>
            <h2>酸雨的成因</h2>
            <p>工廠和汽車燃燒化石燃料，排放二氧化硫（SO₂）和氮氧化物（NOₓ）。這些氣體與水蒸氣反應，形成硫酸（H₂SO₄）和硝酸（HNO₃），使雨水變酸。</p>
            <TipBox mood="thinking" title="環保小行動">
              <p>減少搭車、多走路騎自行車，可以減少廢氣排放，是每個人都能做到的小事！</p>
            </TipBox>
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
              <Link href="/knowledge/plastic-types">塑膠編號你看懂了嗎？</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
