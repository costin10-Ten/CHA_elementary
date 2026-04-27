import Link from "next/link";
import Tag from "@/components/ui/Tag";
import TipBox from "@/components/mascots/TipBox";
import styles from "../water-chemistry/page.module.css";

export const metadata = { title: "危險化學物質辨識 | 化學物質科普知識園區" };

export default function HazardPage() {
  return (
    <article className={`section ${styles.article}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.articleContent}>
          <div className={styles.header}>
            <div className={styles.metaRow}>
              <Tag color="coral" variant="chip">危險化學物質</Tag>
              <span className={styles.metaInfo}>2026-03-20 · 閱讀約 6 分鐘</span>
            </div>
            <h1 className={styles.title}>家裡有哪些危險化學品？</h1>
            <p className={styles.lead}>清潔劑、農藥、電池⋯⋯這些日常用品如果使用不當，會有什麼危險？</p>
          </div>
          <div className={styles.body}>
            <h2>常見家用危險化學品</h2>
            <p>家裡最常見的危險化學品包括：漂白水（含次氯酸鈉）、鹽酸（馬桶清潔劑）、農藥、電池（含重金屬）。</p>
            <TipBox mood="thinking" title="安全守則" variant="warning">
              <p>絕對不要混合不同清潔劑！漂白水加上酸性清潔劑，會產生有毒的氯氣，非常危險！</p>
            </TipBox>
            <h2>如何安全處理？</h2>
            <p>廢棄的電池和藥品不能丟入一般垃圾，要送到指定的有害廢棄物回收點。請詢問大人或查詢環保局資訊。</p>
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
              <Link href="/knowledge/ghs-symbols">認識 GHS 危險標誌</Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
